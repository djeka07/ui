import { css } from '@djeka07/utils';
import { useEffect, useRef, useState, useCallback } from 'react';
import { PopupVariants } from '../grid-column-filter/grid-column-filter.css';
import { GridColumnHeader } from '../grid-column-header';
import { gridColumnHeaderWrapper, root } from './grid-header.css';
import { DragOverState } from './grid-header.type';
import {
  ColumnDefinitionState,
  ColumnDefinitionType,
  DefaultColumnDefinitionType,
  FilterItemModel,
  OnGridUpdate,
} from '../../../molecules/grids/grid/grid.type';

type GridHeaderProps = PopupVariants & {
  className?: string;
  headerCellClassName?: string;
  onResize?: (column: ColumnDefinitionType, newSize: number) => void;
  columnDefinition: ColumnDefinitionState[];
  appliedFilters?: FilterItemModel[];
  onUpdate?: (params: OnGridUpdate) => void;
  left: number;
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
  left,
}: GridHeaderProps) => {
  const gridColumnHeaderRefs = useRef<{ element: HTMLDivElement; def: ColumnDefinitionState }[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const [draggingColumn, _setDraggingColumn] = useState<ColumnDefinitionState | null>(null);
  const draggingColumnRef = useRef<ColumnDefinitionState | null>(null);
  const draggingColumnOverRef = useRef<DragOverState | null>(null);
  const [draggingOverColumn, _setDraggingOverColumn] = useState<DragOverState | null>(null);

  const setDraggingColumn = (data: ColumnDefinitionState | null) => {
    draggingColumnRef.current = data;
    _setDraggingColumn(data);
  };

  const setDraggingOverColumn = (data: DragOverState | null) => {
    draggingColumnOverRef.current = data;
    _setDraggingOverColumn(data);
  };

  const onDragStart = useCallback((e: globalThis.DragEvent) => {
    const current = gridColumnHeaderRefs?.current?.find((curr) => curr.element === e.currentTarget);
    if (!current) {
      e.preventDefault();
      return;
    }
    if (headerRef.current) {
      headerRef.current.setAttribute('style', 'overflow: auto');
    }
    setDraggingColumn(current.def);
  }, []);

  const onReorder = useCallback(
    (width: number, offsetX: number) => {
      const dragging = draggingColumnRef.current;
      const draggingOver = draggingColumnOverRef.current;
      if (dragging?.field !== draggingOver?.field) {
        const newOrder = columnDefinition.reduce((amount, curr) => {
          if (!!dragging && curr.field === draggingOver?.field) {
            return offsetX > width / 2 ? [...amount, curr, dragging] : [...amount, dragging, curr];
          }

          if (curr.field === dragging?.field) {
            return amount;
          }

          return [...amount, curr];
        }, [] as ColumnDefinitionState[]);
        onColumnReorder?.(newOrder);
      }
    },
    [columnDefinition, onColumnReorder],
  );

  const onDragEnd = useCallback(() => {
    setDraggingColumn(null);
    setDraggingOverColumn(null);
    if (headerRef.current) {
      headerRef.current.setAttribute('style', 'overflow: hidden');
      headerRef.current.scrollLeft = left;
    }
  }, [left]);

  const onDragOver = useCallback(
    (e: globalThis.DragEvent) => {
      e.preventDefault();
      const current = gridColumnHeaderRefs.current.find((f) => f.element === e.currentTarget);
      if (
        !!current &&
        (current?.def.field !== draggingColumnOverRef.current?.field || draggingColumnOverRef.current?.x !== e.offsetX)
      ) {
        setDraggingOverColumn({ ...current.def, x: e.offsetY });
        onReorder(current.element.getBoundingClientRect()?.width, e.offsetX);
      }
    },
    [onReorder],
  );

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.scrollLeft = left;
    }
  }, [left]);

  useEffect(() => {
    const currentGridColumnRefs = gridColumnHeaderRefs.current;
    currentGridColumnRefs?.forEach((current) => {
      current?.element?.addEventListener('dragstart', onDragStart);
      current?.element?.addEventListener('dragover', onDragOver);
      current?.element?.addEventListener('dragend', onDragEnd);
    });
    return () => {
      currentGridColumnRefs?.forEach((current) => {
        current?.element?.removeEventListener('dragstart', onDragStart);
        current?.element?.removeEventListener('dragover', onDragOver);
        current?.element?.removeEventListener('dragend', onDragEnd);
      });
    };
  }, [onDragEnd, onDragOver, onDragStart]);
  return (
    <div ref={headerRef} className={css(root, className)}>
      {columnDefinition.map((colDef, columnIndex) => (
        <div
          className={gridColumnHeaderWrapper}
          key={`column-${columnIndex}-${colDef.field}`}
          draggable
          ref={(element: HTMLDivElement) => gridColumnHeaderRefs.current.push({ element, def: colDef })}
        >
          <GridColumnHeader
            draggingDefinition={draggingColumn}
            draggingOverDefinition={draggingOverColumn}
            appliedFilter={appliedFilters?.find((appliedFilter) => appliedFilter.field === colDef.field)}
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
