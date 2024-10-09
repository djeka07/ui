'use client';

import { css, isEmpty } from '@djeka07/utils';
import Fuse from 'fuse.js';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { GridDefaultLoader } from '../../../atoms/grids/grid-default-loader';
import { GridHeader } from '../../../atoms/grids/grid-header';
import { GridRows } from '../../../atoms/grids/grid-rows';
import { root, wrapper } from './grid.css';
import { ColumnDefinitionState, ColumnDefinitionType, FilterItemModel, GridTableRenderers } from './grid.type';
import { GridProps } from './grid.props';
import { ClientGrid } from '../client-grid';

const Grid = <T,>({
  columnDefinition,
  items,
  isLoading,
  className,
  getRowId,
  onRowClick,
  columnClassName,
  headerClassName,
  headerCellClassName,
  itemClassName,
  renderers,
  loaderRenderer,
  radius = 'small',
  onUpdate,
  total,
  rowClassRules,
  rowModelType = 'client',
  defaultColumnDefinition = { autoFill: true, minWidth: 100, width: 200 },
}: GridProps<T>) => {
  const ref = useRef<HTMLDivElement>(null);
  const [columnDefinitionState, setColumnDefinitionState] = useState<ColumnDefinitionState[]>(columnDefinition);
  const [stateItems, setStateItems] = useState<T[]>(items);
  const definitionsToShow = useMemo(
    () => columnDefinitionState?.filter((definition) => definition.hide !== true),
    [columnDefinitionState],
  );

  const onGridColumnResize = useCallback((column: ColumnDefinitionType, newSize: number) => {
    setColumnDefinitionState((prev) =>
      prev.reduce((amt, curr) => {
        if (curr.field === column.field) {
          return [...amt, { ...curr, width: newSize, widthChanged: true }];
        }
        return [...amt, curr];
      }, [] as ColumnDefinitionState[]),
    );
  }, []);

  const onResize = useCallback(() => {
    const { width } = ref.current?.getBoundingClientRect() || { width: 0 };
    const numberOfColumns = columnDefinitionState?.length;
    const gap = numberOfColumns * 2;
    const columnWidth = width / numberOfColumns - gap || 0;
    console.log(width, columnWidth);
    setColumnDefinitionState((prev) =>
      prev.map((columnDefinition) => {
        const minWidth = columnDefinition.minWidth || defaultColumnDefinition.minWidth;
        const newColumnWidth = columnWidth <= minWidth ? minWidth : columnWidth;
        const width = columnDefinition.widthChanged ? columnDefinition.width : newColumnWidth;
        return {
          ...columnDefinition,
          width,
        };
      }),
    );
  }, [columnDefinitionState?.length, defaultColumnDefinition.minWidth]);

  useEffect(() => {
    const currentRef = ref.current;
    const shouldResize = defaultColumnDefinition.autoFill && !!currentRef;
    if (shouldResize) {
      onResize();
      window.addEventListener('resize', onResize);
    }

    return () => {
      if (shouldResize) {
        window.removeEventListener('resize', onResize);
      }
    };
  }, [columnDefinitionState.length, defaultColumnDefinition.autoFill, defaultColumnDefinition.minWidth, onResize]);

  const onGridColumnReorder = (newOrder: ColumnDefinitionState[]) => {
    setColumnDefinitionState(newOrder);
  };

  return (
    <div ref={ref} className={css(root({ radius }), className)}>
      <div className={wrapper}>
        {rowModelType === 'client' ? (
          <ClientGrid
            columnDefinition={definitionsToShow}
            defaultColumnDefinition={defaultColumnDefinition}
            getRowId={getRowId}
            items={items}
            columnClassName={columnClassName}
            headerCellClassName={headerCellClassName}
            headerClassName={headerClassName}
            isLoading={isLoading}
            itemClassName={itemClassName}
            loaderRenderer={loaderRenderer}
            onGridColumnResize={onGridColumnResize}
            onGridColumnReorder={onGridColumnReorder}
            onRowClick={onRowClick}
            radius={radius}
            renderers={renderers}
            rowClassRules={rowClassRules}
            total={total}
          />
        ) : (
          <div>Server</div>
        )}
      </div>
    </div>
  );
};

export default Grid;
