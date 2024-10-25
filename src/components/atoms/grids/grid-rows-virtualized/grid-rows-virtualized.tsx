import { css, isEmpty } from '@djeka07/utils';
import { ReactNode, useCallback, useEffect, useRef, useState, memo } from 'react';
import { GridServerSideProps } from '../../../molecules/grids/grid/grid.props';
import {
  ColumnDefinitionType,
  DefaultColumnDefinitionType,
  GridRenderers,
  GridTableRenderers,
  RowEvent,
  ServerGridState,
} from '../../../molecules/grids/grid/grid.type';
import { GridDefaultNoItems } from '../grid-default-no-items';
import { GridItem } from '../grid-item';
import getRowClasses from '../grid-rows/get-row-classes';

import { itemSkeleton, loaderItem, root, text, wrapper } from './grid-rows-virtualized.css';

type GridRowsProps<T> = {
  className?: string;
  rowClassName?: string;
  itemClassName?: string;
  noItemsRenderer?: string;
  renderers?: GridRenderers<T>;
  getRowId: (props: T) => string;
  onRowClick?: (item: T) => void;
  onScrollX: (value: number) => void;
  onCloseToBottom?: () => Promise<void>;
  rowClassRules?: [string, string | ((params: RowEvent<T>) => boolean)][];
  columnDefinition: ColumnDefinitionType[];
  items: T[];
  totalNumberOfItems?: number;
  defaultColumnDefinition: DefaultColumnDefinitionType;
  state?: ServerGridState<T>['state'];
  pageSize: number;
  pagination: GridServerSideProps<T>['pagination'];
  overscan: number;
  hasSidebar?: boolean;
  itemHeight: number;
};

const GridRowsVirtualized = <T,>({
  items,
  totalNumberOfItems = 0,
  columnDefinition,
  defaultColumnDefinition,
  className,
  renderers,
  pageSize,
  itemClassName,
  rowClassName,
  rowClassRules,
  noItemsRenderer,
  state = 'ready',
  pagination,
  onCloseToBottom,
  getRowId,
  onRowClick,
  onScrollX,
  itemHeight,
  overscan,
  hasSidebar,
}: GridRowsProps<T>) => {
  const ref = useRef<HTMLDivElement>(null);
  const windowHeight = ref.current?.clientHeight || 500;
  const loaderRef = useRef<HTMLDivElement>(null);
  const visibleItemsRef = useRef<HTMLDivElement>(null);
  const [scrollTop, _setScrollTop] = useState<number>(0);
  const scrollTopRef = useRef<number>(0);
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  let renderedNodesCount = Math.floor(windowHeight / itemHeight) + 2 * overscan;
  renderedNodesCount = Math.min(totalNumberOfItems - startIndex, renderedNodesCount);

  const loaderStartIndex = startIndex + pageSize;
  let loaderRenderedNodesCount = Math.floor(windowHeight / itemHeight) + 2 * overscan;
  loaderRenderedNodesCount = Math.min(totalNumberOfItems - loaderStartIndex, renderedNodesCount);
  const setScrollTop = useCallback((value: number) => {
    _setScrollTop(value);
    scrollTopRef.current = value;
  }, []);

  const onScroll = useCallback(
    (e: Event) => {
      const element = e?.target as HTMLElement;
      if (onScrollX) {
        onScrollX(element.scrollLeft);
      }
      setScrollTop(element.scrollTop);
      if (onCloseToBottom && state === 'ready') {
        const pixelsToBottom = (loaderRef.current?.getBoundingClientRect()?.y || 0) - windowHeight;
        if (pixelsToBottom <= 500) {
          onCloseToBottom?.();
        }
      }
    },
    [onCloseToBottom, onScrollX, setScrollTop, state, windowHeight],
  );

  useEffect(() => {
    const currentRef = ref?.current;
    if (!!currentRef && pageSize) {
      console.log('addeventlisterner');
      currentRef?.addEventListener('scroll', onScroll);
    }

    return () => {
      console.log('removeeventlisterner');
      currentRef?.removeEventListener('scroll', onScroll);
    };
  }, [onScroll, pageSize]);

  const renderRows = () => {
    const itemsToRender = [];
    const numberOfItemsToIterate = Math.min(renderedNodesCount, items.length);
    for (let i = 0; i < numberOfItemsToIterate; i++) {
      const index = i + startIndex;
      const item = items[index];
      if (!item) {
        continue;
      }
      const rowClasses = !isEmpty(rowClassRules) ? getRowClasses(item, rowClassRules) : undefined;
      itemsToRender.push(
        <div key={getRowId(item)} className={css(wrapper({ odd: index % 2 !== 0 }), rowClassName, rowClasses)}>
          {columnDefinition.map((def) => {
            const renderer = renderers?.[def.cellRenderer as string];
            const value = item?.[def.field as keyof T];
            return value ? (
              <GridItem
                row={index}
                columnDefinition={def}
                className={itemClassName}
                tabIndex={index + 1}
                onClick={onRowClick ? () => onRowClick(item) : undefined}
                key={`-grid-item-${def.field}-${value}`}
                defaultColumnDefinition={defaultColumnDefinition}
                renderer={renderer ? () => renderer({ data: item, value: value as T[keyof T] }) : (value as ReactNode)}
              />
            ) : null;
          })}
        </div>,
      );
    }

    return itemsToRender;
  };

  const renderLoaderRows = () => {
    if (pagination !== 'infinite' && !onCloseToBottom) {
      return null;
    }

    const loaderItemsToRender = [];

    for (let i = 0; i < loaderRenderedNodesCount; i++) {
      const index = i + loaderStartIndex;
      loaderItemsToRender.push(
        <div
          ref={i === 0 ? loaderRef : undefined}
          style={{ height: 56 }}
          className={wrapper({ odd: (startIndex + index) % 2 !== 0 })}
          key={`grid-default-loader-row-${startIndex + index}`}
        >
          {columnDefinition.map((colDef, columnIndex) => (
            <div
              className={css(loaderItem, itemClassName)}
              style={{
                minWidth: colDef.minWidth || defaultColumnDefinition.minWidth,
                width: colDef.width || defaultColumnDefinition.width,
              }}
              key={`grid-default-loader-row-${startIndex + index}-column-${columnIndex}`}
            >
              <div className={itemSkeleton}>
                <span className={text}>{colDef.fieldName}</span>
              </div>
            </div>
          ))}
        </div>,
      );
    }

    return loaderItemsToRender;
  };

  return (
    <div ref={ref} className={css(root({ hasSidebar }), className)}>
      {!isEmpty(items) ? (
        <div
          style={{
            height: `${totalNumberOfItems * itemHeight}px`,
          }}
        >
          <div
            ref={visibleItemsRef}
            style={{
              transform: `translateY(${startIndex * itemHeight}px)`,
            }}
          >
            {renderRows()}
            <div ref={loaderRef} />
            {renderLoaderRows()}
          </div>
        </div>
      ) : !!noItemsRenderer && !!renderers?.[noItemsRenderer] ? (
        (renderers as GridTableRenderers)[noItemsRenderer]()
      ) : (
        <GridDefaultNoItems />
      )}
    </div>
  );
};

GridRowsVirtualized.displayName = 'GridRowsVirtualized';
export default memo(GridRowsVirtualized) as typeof GridRowsVirtualized;
