/* eslint-disable @typescript-eslint/no-explicit-any */
export enum ColumnType {
  Text = 'text',
  Number = 'number',
  Boolean = 'boolean',
  Date = 'date',
  Array = 'array',
}

export enum FilterOperator {
  CONTAINS = 'contains',
  EQUALS = 'equals',
  NOT_EQUAL = 'notEqual',
  LESS_THAN = 'lessThan',
  GREATER_THAN = 'greaterThan',
  GREATER_THAN_OR_EQUAL = 'greaterThanOrEqual',
  LESS_THAN_OR_EQUAL = 'lessThanOrEqual',
  IN_RANGE = 'inRange',
  BLANK = 'blank',
}

export enum SortType {
  ASC = 'asc',
  DESC = 'desc',
}

export type ColumnDefinitionType = {
  fieldName: string;
  field: string;
  type: ColumnType;
  width?: number;
  cellRenderer?: string;
  minWidth?: number;
  hide?: boolean;
  resizeable?: boolean;
  filter?: boolean;
  floatingFilter?: boolean;
};

export type DefaultColumnDefinitionType = {
  width: number;
  minWidth: number;
  autoFill: boolean;
};

export type CellRenderParams<TData = any, TValue = any> = {
  data: TData;
  value: TValue;
};

export type GridCellRenderers = {
  [name: string]: (props: CellRenderParams) => JSX.Element;
};

export type GridTableRenderers = {
  [name: string]: () => JSX.Element;
};

export type GridRenderers = GridCellRenderers | GridTableRenderers;

export type ColumnDefinitionState = ColumnDefinitionType & {
  widthChanged?: boolean;
};

export type RowEvent<TData = any> = {
  data: TData;
};

export type RowClassRules = { [cssClassName: string]: string | ((params: RowEvent) => boolean) };

export type FilterItemModel = {
  field: string;
  filterType: ColumnType;
  type: FilterOperator;
  filter?: string;
  filterTo?: string;
  dateFrom?: string;
  dateTo?: string;
  values?: string[];
};

export type SortModel = { columnField: string; sort: SortType };

export type onGridUpdate = { startRow: number; endRow: number; filters: FilterItemModel[]; sorts: SortModel[] };
