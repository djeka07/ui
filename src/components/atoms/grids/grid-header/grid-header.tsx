import { css } from '@djeka07/utils';
import { useRef } from 'react';
import { GridColumnHeader } from '../grid-column-header';
import {
  ColumnDefinitionState,
  ColumnDefinitionType,
  DefaultColumnDefinitionType,
  FilterItemModel,
  onGridUpdate,
} from '../grid.type';
import { root } from './grid-header.css';
import { PopupVariants } from '../grid-column-filter/grid-column-filter.css';

type GridHeaderProps = PopupVariants & {
  className?: string;
  headerCellClassName?: string;
  onResize?: (column: ColumnDefinitionType, newSize: number) => void;
  columnDefinition: ColumnDefinitionState[];
  onUpdate?: (params: onGridUpdate) => void;
  defaultColumnDefinition: DefaultColumnDefinitionType;
  onFilterChange?: ((filter: FilterItemModel) => void) | undefined;
};

const GridHeader = ({
  columnDefinition,
  className,
  defaultColumnDefinition,
  headerCellClassName,
  onResize,
  onFilterChange,
  radius,
}: GridHeaderProps) => {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={headerRef} className={css(root, className)}>
      {columnDefinition.map((colDef, columnIndex) => (
        <div key={`column-${columnIndex}-${colDef.field}`}>
          <GridColumnHeader
            defaultColumnDefinition={defaultColumnDefinition}
            columnDefinition={colDef}
            className={headerCellClassName}
            onResize={onResize}
            onFilterChange={onFilterChange}
            radius={radius}
          />
        </div>
      ))}
    </div>
  );
};

export default GridHeader;
