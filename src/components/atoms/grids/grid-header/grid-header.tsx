import { css } from '@djeka07/utils';
import { DragEvent, useRef, useState } from 'react';
import { GridColumnHeader } from '../grid-column-header';
import {
  ColumnDefinitionState,
  ColumnDefinitionType,
  DefaultColumnDefinitionType,
  FilterItemModel,
  onGridUpdate,
} from '../grid.type';
import { gridColumnHeaderWrapper, root } from './grid-header.css';
import { PopupVariants } from '../grid-column-filter/grid-column-filter.css';

type GridHeaderProps = PopupVariants & {
  className?: string;
  headerCellClassName?: string;
  onResize?: (column: ColumnDefinitionType, newSize: number) => void;
  columnDefinition: ColumnDefinitionState[];
  appliedFilters: FilterItemModel[];
  onUpdate?: (params: onGridUpdate) => void;
  defaultColumnDefinition: DefaultColumnDefinitionType;
  onColumnReorder?: (newColumns: ColumnDefinitionState[]) => void;
  onFilterChange?: ((filter: FilterItemModel) => void) | undefined;
};

const GridHeader = ({
  columnDefinition,
  className,
  defaultColumnDefinition,
  headerCellClassName,
  onResize,
  onFilterChange,
  onColumnReorder,
  radius,
  appliedFilters,
}: GridHeaderProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [draggingDefinition, setDraggingDefinition] = useState<ColumnDefinitionState | null>(null);
  const [draggingOverDefinition, setDraggingOverDefinition] = useState<ColumnDefinitionState | null>(null);
  const onDragStart = (e: DragEvent<HTMLDivElement>, columnDefinition: ColumnDefinitionState) => {
    setDraggingDefinition(columnDefinition);
  };

  const onDragEnd = () => {
    if (draggingDefinition?.field !== draggingOverDefinition?.field) {
      const newOrder = columnDefinition.reduce((amount, curr) => {
        if (!!draggingDefinition && curr.field === draggingOverDefinition?.field) {
          return [...amount, draggingDefinition, curr];
        }

        if (curr.field === draggingDefinition?.field) {
          return amount;
        }

        return [...amount, curr];
      }, [] as ColumnDefinitionState[]);
      onColumnReorder?.(newOrder);
    }
    setDraggingDefinition(null);
    setDraggingOverDefinition(null);
  };

  const onDragOver = (e: DragEvent<HTMLDivElement>, columnDefinition: ColumnDefinitionState) => {
    if (draggingOverDefinition?.field !== columnDefinition.field) {
      setDraggingOverDefinition(columnDefinition);
    }
  };
  return (
    <div id="drop_zone" ref={headerRef} className={css(root, className)} onDrop={(e) => console.log('drop', e)}>
      {columnDefinition.map((colDef, columnIndex) => (
        <div className={gridColumnHeaderWrapper} key={`column-${columnIndex}-${colDef.field}`}>
          <GridColumnHeader
            draggingDefinition={draggingDefinition}
            draggingOverDefinition={draggingOverDefinition}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onDragOver={onDragOver}
            appliedFilter={appliedFilters.find((appliedFilter) => appliedFilter.field === colDef.field)}
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
