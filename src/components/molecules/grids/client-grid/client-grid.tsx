import { useMemo, useState } from 'react';
import { GridHeader } from '../../../atoms/grids/grid-header';
import {
  ColumnDefinitionState,
  ColumnDefinitionType,
  DefaultColumnDefinitionType,
  FilterItemModel,
  GridRenderers,
  GridTableRenderers,
  RowClassRules,
} from '../grid/grid.type';
import { GridVariants } from '../grid/grid.css';
import { isEmpty } from '@djeka07/utils';
import { GridDefaultLoader } from '../../../atoms/grids/grid-default-loader';
import { GridRows } from '../../../atoms/grids/grid-rows';
import Fuse from 'fuse.js';
import updateFilter from './update-filter';

type ClientGridProps<T> = GridVariants & {
  columnDefinition: ColumnDefinitionState[];
  defaultColumnDefinition: DefaultColumnDefinitionType;
  headerClassName?: string;
  headerCellClassName?: string;
  renderers?: GridRenderers;
  loaderRenderer?: string;
  itemClassName?: string;
  rowClassRules?: RowClassRules;
  columnClassName?: string;
  onGridColumnResize?: (column: ColumnDefinitionType, newSize: number) => void;
  onGridColumnReorder?: (newOrder: ColumnDefinitionState[]) => void;
  isLoading?: boolean;
  total?: number;
  getRowId: (props: T) => string;
  onRowClick?: (item: T) => void;
  items: T[];
};

const ClientGrid = <T,>({
  columnDefinition,
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
  isLoading,
  total,
  getRowId,
  onRowClick,
  items,
}: ClientGridProps<T>) => {
  const [appliedFilters, setAppliedFilters] = useState<FilterItemModel[]>([]);
  const memoedSearch = useMemo(
    () =>
      new Fuse(items, {
        keys: columnDefinition.map((f) => f.field),
        isCaseSensitive: false,
        threshold: 0.2,
        location: 0,
        distance: 500,
      }),
    [columnDefinition, items],
  );
  const [stateItems, setStateItems] = useState<T[]>(items);

  const onSearch = (filterModels: FilterItemModel[]) => {
    console.log(filterModels);
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

  return (
    <>
      {!isEmpty(columnDefinition) && (
        <GridHeader
          appliedFilters={appliedFilters}
          columnDefinition={columnDefinition}
          onFilterChange={onFilterChange}
          onColumnReorder={onGridColumnReorder}
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
            columnDefinitions={columnDefinition}
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
          columnDefinition={columnDefinition}
          defaultColumnDefinition={defaultColumnDefinition}
          renderers={renderers}
          rowClassRules={rowClassRules ? Object.entries(rowClassRules) : undefined}
          items={stateItems}
        />
      )}
    </>
  );
};

export default ClientGrid;
