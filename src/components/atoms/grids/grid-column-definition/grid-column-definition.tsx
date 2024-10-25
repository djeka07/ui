import { ColumnDefinitionType } from '../../../molecules/grids/grid/grid.type';

type GridColumnHeaderProps = {
  columnDefinition: ColumnDefinitionType;
};

const GridColumnHeader = ({ columnDefinition }: GridColumnHeaderProps) => {
  return <div>{columnDefinition.fieldName}</div>;
};

export default GridColumnHeader;
