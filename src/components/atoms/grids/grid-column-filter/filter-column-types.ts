import { ColumnType, FilterOperator } from '../../../molecules/grids/grid/grid.type';

export type FilterParams = {
  filterOptions: FilterOperator[];
  defaultFilterOption?: FilterOperator;
};

type FilterColumnType = {
  cellRenderer?: string;
  filter: string | boolean;
  filterParams?: FilterParams;
};

export const columnTypes: {
  [key: string]: FilterColumnType;
} = {
  [ColumnType.Number]: {
    filter: 'numberColumnFilter',
  },
  [ColumnType.Boolean]: {
    cellRenderer: 'booleanRenderer',
    filter: 'booleanColumnFilter',
  },
  [ColumnType.Array]: {
    cellRenderer: 'arrayRenderer',
    filter: false,
  },
  [ColumnType.Text]: {
    filter: 'textColumnFilter',
    filterParams: {
      filterOptions: [FilterOperator.CONTAINS, FilterOperator.EQUALS, FilterOperator.NOT_EQUAL, FilterOperator.BLANK],
      defaultFilterOption: FilterOperator.CONTAINS,
    },
  },
  [ColumnType.Date]: {
    filter: 'dateColumnFilter',
    filterParams: {
      filterOptions: [
        FilterOperator.LESS_THAN,
        FilterOperator.LESS_THAN_OR_EQUAL,
        FilterOperator.GREATER_THAN,
        FilterOperator.GREATER_THAN_OR_EQUAL,
        FilterOperator.IN_RANGE,
      ],
    },
  },
};
