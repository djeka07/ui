'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ColumnDefinitionState,
  ColumnDefinitionType,
  DefaultColumnDefinitionType,
  FilterItemModel,
  GridRenderers,
  GridTableRenderers,
  onGridUpdate,
  RowClassRules,
} from './grid.type';
import { GridVariants, root, wrapper } from './grid.css';
import { css, isEmpty } from '@djeka07/utils';
import { GridHeader } from '../../../atoms/grids/grid-header';
import { GridDefaultLoader } from '../../../atoms/grids/grid-default-loader';
import { GridRows } from '../../../atoms/grids/grid-rows';
import Fuse from 'fuse.js';

type GridProps<T> = GridVariants & {
  items: T[];
  getRowId: (props: T) => string;
  onRowClick?: (item: T) => void;
  isLoading?: boolean;
  total?: number;
  className?: string;
  columnClassName?: string;
  headerClassName?: string;
  headerCellClassName?: string;
  renderers?: GridRenderers;
  loaderRenderer?: string;
  itemClassName?: string;
  columnDefinition: ColumnDefinitionType[];
  defaultColumnDefinition?: DefaultColumnDefinitionType;
  rowClassRules?: RowClassRules;
  onUpdate?: (params: onGridUpdate) => void;
  rowModelType?: 'client' | 'server';
};

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
  rowClassRules,
  rowModelType = 'client',
  defaultColumnDefinition = { autoFill: true, minWidth: 100, width: 200 },
}: GridProps<T>) => {
  const ref = useRef<HTMLDivElement>(null);
  const [columnDefinitionState, setColumnDefinitionState] = useState<ColumnDefinitionState[]>(columnDefinition);

  const definitionsToShow = useMemo(
    () => columnDefinitionState?.filter((definition) => definition.hide !== true),
    [columnDefinitionState],
  );

  const fusedItems = useMemo(
    () => new Fuse(items, { keys: definitionsToShow.map((def) => def.field), distance: 900 }),
    [definitionsToShow, items],
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
    const columnWidth = width / columnDefinitionState?.length || 0;
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

  const onFilterChange = (filter: FilterItemModel) => {
    console.log(filter, fusedItems.search({ $and: [{ [filter.field]: filter.filter }] }));
  };

  return (
    <div ref={ref} className={css(root({ radius }), className)}>
      <div className={wrapper}>
        {!isEmpty(definitionsToShow) && (
          <GridHeader
            columnDefinition={definitionsToShow}
            onUpdate={onUpdate}
            onFilterChange={onFilterChange}
            defaultColumnDefinition={defaultColumnDefinition}
            className={headerClassName}
            headerCellClassName={headerCellClassName}
            onResize={onGridColumnResize}
            radius={radius}
          />
        )}
        {isLoading ? (
          !!loaderRenderer && !!renderers?.[loaderRenderer] ? (
            (renderers as GridTableRenderers)[loaderRenderer]()
          ) : (
            <GridDefaultLoader
              columnDefinitions={definitionsToShow}
              defaultColumnDefinition={defaultColumnDefinition}
              rows={10}
            />
          )
        ) : (
          <GridRows
            getRowId={getRowId}
            className={columnClassName}
            itemClassName={itemClassName}
            onRowClick={onRowClick}
            columnDefinition={definitionsToShow}
            defaultColumnDefinition={defaultColumnDefinition}
            renderers={renderers}
            rowClassRules={rowClassRules ? Object.entries(rowClassRules) : undefined}
            items={items}
          />
        )}
      </div>
    </div>
  );
};

export default Grid;
