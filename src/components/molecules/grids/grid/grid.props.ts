import { GridVariants } from './grid.css';
import {
  ColumnDefinitionType,
  DefaultColumnDefinitionType,
  GridRenderers,
  onGridUpdate,
  RowClassRules,
} from './grid.type';

export type GridProps<T> = GridVariants & {
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
