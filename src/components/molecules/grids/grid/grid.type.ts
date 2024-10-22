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

export type GetLocaleTextFunc = (params: GetLocaleTextParams) => string;

export type GetLocaleTextParams = {
  key: string;
  defaultValue?: string;
  variableValues?: string[];
};

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

export type DefaultGridDefinitionType = {
  heigth: number;
};

type ValueOf<T> = T[keyof T];

export type CellRenderParams<TData = unknown> = {
  data: TData;
  value: ValueOf<TData>;
};

export type TableRenderParams<T = unknown> = {
  data: T[];
  columnDefinition: ColumnDefinitionType;
};

export type GridCellRenderers<T> = {
  [name: string]: (props: CellRenderParams<T>) => JSX.Element;
};

export type GridTableRenderers = {
  [name: string]: () => JSX.Element;
};

export type GridRenderers<T> = GridCellRenderers<T> | GridTableRenderers;

export type ColumnDefinitionState = ColumnDefinitionType & {
  widthChanged?: boolean;
};

export type RowEvent<TData = unknown> = {
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

export type OnGridUpdate = { startRow: number; endRow: number; filters: FilterItemModel[]; sorts: SortModel[] };

export type ServerSideRequest = {
  startRow: number;
  endRow: number;
  filter?: FilterItemModel[];
  sorts?: SortModel[];
};

export type SuccessParams<T> = { items: T[]; total: number };

export type GetRowsParams<T> = {
  request: ServerSideRequest;
  success: (params: SuccessParams<T>) => void;
  fail: () => void;
};

export type ServerGridState<T> = {
  items: T[];
  total: number;
  filter: FilterItemModel[];
  sort: SortModel[];
  pageNumber: number;
  pageSize: number;
  state: 'pending' | 'ready' | 'errored' | 'repending';
};
