import { ColumnDefinitionState } from '../../../molecules/grids/grid/grid.type';

export type DragOverState = ColumnDefinitionState & {
  x?: number;
  y?: number;
};
