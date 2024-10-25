'use client';

import { css, isEmpty, unique } from '@djeka07/utils';
import Fuse from 'fuse.js';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { GridDefaultLoader } from '../../../atoms/grids/grid-default-loader';
import { GridHeader } from '../../../atoms/grids/grid-header';
import { GridRowsVirtualized } from '../../../atoms/grids/grid-rows-virtualized';
import updateFilter from '../update-filter';
import { root, rowWrapper } from './grid.css';
import { ClientGridProps, GridClientProps, GridProps, ServerGridProps } from './grid.props';
import {
  ColumnDefinitionState,
  ColumnDefinitionType,
  FilterItemModel,
  GridTableRenderers,
  ServerGridState,
  SuccessParams,
} from './grid.type';
import isServerRowModelType from './is-server-row-model-type';
import { GridSidebar } from '../grid-sidebar';

const Grid = <T,>({
  columnDefinition,
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
  rowClassRules,
  pageSize,
  pagination,
  sidebar = true,
  itemHeight = 56,
  overscan = 20,
  defaultColumnDefinition = { autoFill: true, minWidth: 100, width: 200 },
  ...rest
}: GridProps<T>) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollXValue, setScrollXValue] = useState<number>(0);
  const [columnDefinitionState, setColumnDefinitionState] = useState<ColumnDefinitionState[]>(
    unique(columnDefinition, 'field'),
  );
  const definitionsToShow = useMemo(
    () => columnDefinitionState?.filter((definition) => definition.hide !== true),
    [columnDefinitionState],
  );

  const fields = useMemo(() => columnDefinition.map((d) => d.field), [columnDefinition]);

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

  const onScrollX = (value: number) => {
    setScrollXValue(value);
  };

  const onGridColumnToggle = (definition: ColumnDefinitionState) => {
    setColumnDefinitionState((prev) =>
      prev.reduce((amt, curr) => {
        if (curr.field === definition.field) {
          return [...amt, { ...curr, hide: !definition?.hide || false }];
        }
        return [...amt, curr];
      }, [] as ColumnDefinitionState[]),
    );
  };

  const onResize = useCallback(() => {
    const { width } = ref.current?.getBoundingClientRect() || { width: 0 };
    const numberOfColumns = columnDefinitionState?.length;
    const gap = numberOfColumns * 2;
    const columnWidth = width / numberOfColumns - gap || 0;
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
      {isServerRowModelType(rest) ? (
        <ServerSideGrid<T>
          wrapperRef={ref}
          columnDefinitionsToShow={definitionsToShow}
          columnDefinition={columnDefinitionState}
          defaultColumnDefinition={defaultColumnDefinition}
          getRowId={getRowId}
          columnClassName={columnClassName}
          headerCellClassName={headerCellClassName}
          headerClassName={headerClassName}
          itemClassName={itemClassName}
          loaderRenderer={loaderRenderer}
          onGridColumnResize={onGridColumnResize}
          onGridColumnReorder={onGridColumnReorder}
          onGridColumnToggle={onGridColumnToggle}
          onRowClick={onRowClick}
          radius={radius}
          renderers={renderers}
          rowClassRules={rowClassRules}
          getRows={rest.getRows}
          pageSize={pageSize}
          pagination={pagination}
          overscan={overscan}
          itemHeight={itemHeight}
          left={scrollXValue}
          onScrollX={onScrollX}
          sidebar={sidebar}
        />
      ) : (
        <ClientGrid<T>
          columnDefinitionsToShow={definitionsToShow}
          columnDefinition={columnDefinitionState}
          columnDefinitionFields={fields}
          defaultColumnDefinition={defaultColumnDefinition}
          getRowId={getRowId}
          columnClassName={columnClassName}
          headerCellClassName={headerCellClassName}
          headerClassName={headerClassName}
          itemClassName={itemClassName}
          loaderRenderer={loaderRenderer}
          onGridColumnResize={onGridColumnResize}
          onGridColumnReorder={onGridColumnReorder}
          onGridColumnToggle={onGridColumnToggle}
          onRowClick={onRowClick}
          radius={radius}
          renderers={renderers}
          rowClassRules={rowClassRules}
          items={(rest as GridClientProps<T>).items}
          isLoading={(rest as GridClientProps<T>).isLoading}
          pageSize={pageSize}
          pagination={pagination as GridClientProps<T>['pagination']}
          overscan={overscan}
          itemHeight={itemHeight}
          left={scrollXValue}
          onScrollX={onScrollX}
          sidebar={sidebar}
        />
      )}
    </div>
  );
};

const ClientGrid = <T,>({
  columnDefinitionFields,
  columnDefinition,
  columnDefinitionsToShow,
  defaultColumnDefinition,
  headerCellClassName,
  headerClassName,
  columnClassName,
  itemClassName,
  loaderRenderer,
  radius,
  renderers,
  rowClassRules,
  onGridColumnResize,
  onGridColumnReorder,
  getRowId,
  onRowClick,
  onScrollX,
  onGridColumnToggle,
  left,
  items,
  isLoading,
  overscan,
  itemHeight,
  sidebar,
  pageSize = 10,
  pagination,
  getLocaleText,
}: ClientGridProps<T>) => {
  const [appliedFilters, setAppliedFilters] = useState<FilterItemModel[]>([]);
  const memoedSearch = useMemo(() => {
    console.log('memo');
    return new Fuse(items, {
      keys: columnDefinitionFields,
      isCaseSensitive: false,
      threshold: 0.2,
      location: 0,
      distance: 500,
    });
  }, [columnDefinitionFields, items]);
  const [stateItems, setStateItems] = useState<T[]>(items);

  const onSearch = (filterModels: FilterItemModel[]) => {
    const search = !isEmpty(filterModels)
      ? memoedSearch
          .search({
            $and: filterModels.map((item) => {
              return { [item.field]: item.filter };
            }),
          })
          .map((result) => result.item)
      : items;
    setStateItems(search);
  };

  const onFilterChange = (filter: FilterItemModel) => {
    setAppliedFilters((prev) => {
      const updatedFilter = updateFilter(filter, prev);
      onSearch(updatedFilter);
      return updatedFilter;
    });
  };

  useEffect(() => {
    console.log('mount');
    setStateItems(items);
  }, [items]);

  return (
    <>
      {!isEmpty(columnDefinition) && (
        <GridHeader
          appliedFilters={appliedFilters}
          columnDefinition={columnDefinitionsToShow}
          onFilterChange={onFilterChange}
          onColumnReorder={onGridColumnReorder}
          defaultColumnDefinition={defaultColumnDefinition}
          className={headerClassName}
          headerCellClassName={headerCellClassName}
          onResize={onGridColumnResize}
          left={left}
          radius={radius}
        />
      )}
      {isLoading ? (
        !!loaderRenderer && !!renderers?.[loaderRenderer] ? (
          (renderers as GridTableRenderers)[loaderRenderer]()
        ) : (
          <GridDefaultLoader
            onScrollX={onScrollX}
            itemHeight={itemHeight}
            columnDefinitions={columnDefinitionsToShow}
            defaultColumnDefinition={defaultColumnDefinition}
            rows={10}
          />
        )
      ) : (
        <>
          <GridRowsVirtualized
            getRowId={getRowId}
            className={columnClassName}
            itemClassName={itemClassName}
            onRowClick={onRowClick}
            columnDefinition={columnDefinitionsToShow}
            defaultColumnDefinition={defaultColumnDefinition}
            renderers={renderers}
            rowClassRules={rowClassRules ? Object.entries(rowClassRules) : undefined}
            items={stateItems}
            pageSize={pageSize}
            pagination={pagination}
            totalNumberOfItems={stateItems?.length || 0}
            overscan={overscan}
            onScrollX={onScrollX}
            itemHeight={itemHeight}
            hasSidebar={sidebar}
          />
          <div
            style={{
              backgroundColor: 'var(--grid-footer-bg-color)',
              color: 'var(--grid-footer-fg-color)',
              boxShadow: 'var(--main-box-shadow)',
              padding: '8px 4px',
              fontWeight: 'bold',
            }}
          >
            Total: {stateItems?.length || 0}
          </div>
        </>
      )}
      {sidebar && (
        <GridSidebar
          getLocaleText={getLocaleText}
          columnDefinition={columnDefinition}
          onColumnReorder={onGridColumnReorder}
          onColumnToggle={onGridColumnToggle}
        />
      )}
    </>
  );
};

const ServerSideGrid = <T,>({
  columnDefinition,
  defaultColumnDefinition,
  getRowId,
  getRows,
  columnClassName,
  headerCellClassName,
  headerClassName,
  itemClassName,
  loaderRenderer,
  onGridColumnReorder,
  onGridColumnResize,
  onGridColumnToggle,
  onRowClick,
  onScrollX,
  left,
  radius,
  renderers,
  rowClassRules,
  overscan,
  itemHeight,
  sidebar,
  columnDefinitionsToShow,
  getLocaleText,
  pageSize = 50,
  pagination = 'infinite',
}: ServerGridProps<T>) => {
  const ref = useRef<HTMLDivElement>(null);

  const [state, setState] = useState<ServerGridState<T>>({
    items: [],
    total: 0,
    filter: [],
    sort: [],
    pageSize,
    pageNumber: 0,
    state: 'pending',
  });

  const onFilterChange = (filter: FilterItemModel) => {
    setState((prev) => {
      const updatedFilter = updateFilter(filter, prev.filter);
      return {
        ...prev,
        filter: updatedFilter,
      };
    });
  };

  const success = useCallback(
    ({ items, total }: SuccessParams<T>) => {
      const isFirstPage = state.pageNumber === 0;
      setState((prev) => ({
        ...prev,
        items: isFirstPage ? items || [] : [...prev.items, ...(items || [])],
        state: 'ready',
        total,
      }));
    },
    [state.pageNumber],
  );

  const fail = () => {
    setState((prev) => ({ ...prev, state: 'errored' }));
  };

  const onCloseToBottom = async () => {
    console.log('dispatching on close to bottom');
    setState((prev) => ({ ...prev, pageNumber: prev.pageNumber + 1, state: 'repending' }));
  };

  useEffect(() => {
    const startRow = state.pageNumber * state.pageSize;
    const endRow = startRow + pageSize;
    getRows({ request: { startRow, endRow, filter: state.filter, sorts: state.sort }, success, fail });
  }, [getRows, pageSize, state.filter, state.pageNumber, state.pageSize, state.sort, success]);

  return (
    <>
      {!isEmpty(columnDefinition) && (
        <GridHeader
          appliedFilters={state.filter}
          columnDefinition={columnDefinitionsToShow}
          onFilterChange={onFilterChange}
          onColumnReorder={onGridColumnReorder}
          defaultColumnDefinition={defaultColumnDefinition}
          className={headerClassName}
          headerCellClassName={headerCellClassName}
          onResize={onGridColumnResize}
          left={left}
          radius={radius}
        />
      )}
      <div ref={ref} className={rowWrapper}>
        {state.state === 'pending' ? (
          !!loaderRenderer && !!renderers?.[loaderRenderer] ? (
            (renderers as GridTableRenderers)[loaderRenderer]()
          ) : (
            <GridDefaultLoader
              onScrollX={onScrollX}
              itemHeight={itemHeight}
              columnDefinitions={columnDefinitionsToShow}
              defaultColumnDefinition={defaultColumnDefinition}
              rows={pageSize}
            />
          )
        ) : (
          <GridRowsVirtualized
            getRowId={getRowId}
            onScrollX={onScrollX}
            className={columnClassName}
            itemClassName={itemClassName}
            onRowClick={onRowClick}
            columnDefinition={columnDefinitionsToShow}
            defaultColumnDefinition={defaultColumnDefinition}
            renderers={renderers}
            rowClassRules={rowClassRules ? Object.entries(rowClassRules) : undefined}
            items={state.items}
            pageSize={state.pageSize}
            totalNumberOfItems={state.total}
            pagination={pagination}
            state={state.state}
            onCloseToBottom={onCloseToBottom}
            overscan={overscan}
            hasSidebar={sidebar}
            itemHeight={itemHeight}
          />
        )}
      </div>
      <div
        style={{
          backgroundColor: 'var(--grid-footer-bg-color)',
          color: 'var(--grid-footer-fg-color)',
          boxShadow: 'var(--main-box-shadow)',
          padding: '8px 4px',
          fontWeight: 'bold',
        }}
      >
        {state.items?.length || 0} / {state.total}
      </div>
      {sidebar && (
        <GridSidebar
          getLocaleText={getLocaleText}
          columnDefinition={columnDefinition}
          onColumnReorder={onGridColumnReorder}
          onColumnToggle={onGridColumnToggle}
        />
      )}
    </>
  );
};

export default Grid;
