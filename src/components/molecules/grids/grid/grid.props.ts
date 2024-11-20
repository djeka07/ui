import { RefObject } from 'react';
import { GridVariants } from './grid.css';
import {
  ColumnDefinitionType,
  DefaultColumnDefinitionType,
  GridRenderers,
  RowClassRules,
  GetRowsParams,
  ColumnDefinitionState,
  DefaultGridDefinitionType,
  GetLocaleTextFunc,
} from './grid.type';

export type GridServerSideProps<T> = {
  rowModelType: 'server';
  items?: never;
  getRows: (params: GetRowsParams<T>) => Promise<void> | void;
  pagination?: 'infinite' | 'page';
};

export type GridClientProps<T> = {
  rowModelType: 'client';
  items: T[];
  total?: number;
  isLoading?: boolean;
  pagination?: 'page';
};

export type GridProps<T> = GridVariants & {
  getRowId: (props: T) => string;
  onRowClick?: (item: T) => void;
  className?: string;
  itemHeight?: number;
  overscan?: number;
  columnClassName?: string;
  headerClassName?: string;
  headerCellClassName?: string;
  renderers?: GridRenderers<T>;
  loaderRenderer?: string;
  sidebar?: boolean;
  noItemsRenderer?: string;
  itemClassName?: string;
  columnDefinition: ColumnDefinitionType[];
  defaultColumnDefinition?: DefaultColumnDefinitionType;
  defaultGridDefinition?: DefaultGridDefinitionType;
  getLocaleText?: GetLocaleTextFunc;
  rowClassRules?: RowClassRules;
  pageSize?: number;
} & (GridServerSideProps<T> | GridClientProps<T>);

export type ServerGridProps<T> = Omit<
  GridProps<T>,
  'columnDefinition' | 'defaultColumnDefinition' | 'rowModelType' | 'overscan' | 'itemHeight'
> &
  GridVariants &
  Omit<GridServerSideProps<T>, 'rowModelType'> & {
    columnDefinition: ColumnDefinitionState[];
    defaultColumnDefinition: DefaultColumnDefinitionType;
    wrapperRef: RefObject<HTMLElement | null>;
    onGridColumnResize?: (column: ColumnDefinitionType, newSize: number) => void;
    onGridColumnToggle?: (column: ColumnDefinitionState) => void;
    onGridColumnReorder?: (newOrder: ColumnDefinitionState[]) => void;
    overscan: number;
    itemHeight: number;
    left: number;
    columnDefinitionsToShow: ColumnDefinitionState[];
    onScrollX: (value: number) => void;
  };

export type ClientGridProps<T> = Omit<
  GridProps<T>,
  'columnDefinition' | 'defaultColumnDefinition' | 'rowModelType' | 'overscan' | 'itemHeight'
> &
  GridVariants &
  Omit<GridClientProps<T>, 'rowModelType'> & {
    columnDefinition: ColumnDefinitionState[];
    defaultColumnDefinition: DefaultColumnDefinitionType;
    columnDefinitionFields: string[];
    onGridColumnResize?: (column: ColumnDefinitionType, newSize: number) => void;
    onGridColumnToggle?: (column: ColumnDefinitionState) => void;
    onGridColumnReorder?: (newOrder: ColumnDefinitionState[]) => void;
    overscan: number;
    itemHeight: number;
    left: number;
    columnDefinitionsToShow: ColumnDefinitionState[];
    onScrollX: (value: number) => void;
  };
