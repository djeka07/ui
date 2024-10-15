import { ColumnDefinitionType } from '../grid.type';

type GridColumnHeaderProps = {
  columnDefinition: ColumnDefinitionType;
};

const GridColumnHeader = ({ columnDefinition }: GridColumnHeaderProps) => {
  return <div>{columnDefinition.fieldName}</div>;
};

export default GridColumnHeader;
