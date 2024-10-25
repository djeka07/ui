import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { ColumnDefinitionState, GetLocaleTextFunc } from '../../../molecules/grids/grid/grid.type';
import { Icon } from '../../icons';
import { Checkbox } from '../../inputs';
import { Typography } from '../../typographies';
import { definition, root, wrapper } from './grid-column-sidebar.css';
import { DragOverState } from '../grid-header/grid-header.type';
import { useClickOutside } from '@djeka07/hooks';

type GridColumnSidebarProps = {
  columnDefinition: ColumnDefinitionState[];
  onColumnReorder?: (newOrder: ColumnDefinitionState[]) => void;
  getLocaleText?: GetLocaleTextFunc;
  onColumnToggle?: (columnDefinition: ColumnDefinitionState) => void;
  onClose?: () => void;
};

const GridColumnsSidebar = ({
  columnDefinition,
  onColumnReorder,
  onColumnToggle,
  getLocaleText,
  onClose,
}: GridColumnSidebarProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const gridColumnHeaderRefs = useRef<{ element: HTMLDivElement; def: ColumnDefinitionState }[]>([]);
  const [draggingColumn, _setDraggingColumn] = useState<ColumnDefinitionState | null>(null);
  const draggingColumnRef = useRef<ColumnDefinitionState | null>(null);
  const draggingColumnOverRef = useRef<DragOverState | null>(null);
  const [draggingOverColumn, _setDraggingOverColumn] = useState<DragOverState | null>(null);

  useClickOutside(rootRef, () => {
    onClose?.();
  });

  const setDraggingColumn = (data: ColumnDefinitionState | null) => {
    draggingColumnRef.current = data;
    _setDraggingColumn(data);
  };

  const setDraggingOverColumn = (data: DragOverState | null) => {
    draggingColumnOverRef.current = data;
    _setDraggingOverColumn(data);
  };

  const onReorder = useCallback(
    (height: number, offsetX: number) => {
      const dragging = draggingColumnRef.current;
      const draggingOver = draggingColumnOverRef.current;
      if (dragging?.field !== draggingOver?.field) {
        const newOrder = columnDefinition.reduce((amount, curr) => {
          if (!!dragging && curr.field === draggingOver?.field) {
            return offsetX > height / 2 ? [...amount, curr, dragging] : [...amount, dragging, curr];
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

  const onDragStart = useCallback((e: globalThis.DragEvent) => {
    const current = gridColumnHeaderRefs?.current?.find((curr) => curr.element === e.currentTarget);
    if (!current) {
      e.preventDefault();
      return;
    }
    setDraggingColumn(current.def);
  }, []);

  const onDragEnd = useCallback(() => {
    setDraggingColumn(null);
    setDraggingOverColumn(null);
  }, []);

  const onDragOver = useCallback(
    (e: globalThis.DragEvent) => {
      e.preventDefault();
      const current = gridColumnHeaderRefs.current.find((f) => f.element === e.currentTarget);
      if (
        !!current &&
        (current?.def.field !== draggingColumnOverRef.current?.field || draggingColumnOverRef.current?.x !== e.offsetX)
      ) {
        setDraggingOverColumn({ ...current.def, y: e.offsetY });
        onReorder(current.element.getBoundingClientRect()?.height, e.offsetY);
      }
    },
    [onReorder],
  );

  useEffect(() => {
    const currentGridColumnRefs = gridColumnHeaderRefs.current;
    const shouldBindEvents = !!currentGridColumnRefs && onColumnReorder;
    if (shouldBindEvents) {
      currentGridColumnRefs?.forEach((current) => {
        current?.element?.addEventListener('dragstart', onDragStart);
        current?.element?.addEventListener('dragover', onDragOver);
        current?.element?.addEventListener('dragend', onDragEnd);
      });
    }

    return () => {
      if (shouldBindEvents) {
        currentGridColumnRefs?.forEach((current) => {
          current?.element?.removeEventListener('dragstart', onDragStart);
          current?.element?.removeEventListener('dragover', onDragOver);
          current?.element?.removeEventListener('dragend', onDragEnd);
        });
      }
    };
  }, [onColumnReorder, onDragEnd, onDragOver, onDragStart]);

  return (
    <div className={root} ref={rootRef}>
      <div className={wrapper({ border: true })}>
        <Typography variant="h4">{getLocaleText?.({ key: 'columns' }) || 'Columns'}</Typography>
      </div>
      <div className={wrapper({ overflow: true })}>
        {columnDefinition.map((columnDef, index) => (
          <div
            draggable={!!onColumnReorder}
            className={definition({
              grabbing: columnDef.field === draggingColumn?.field,
              top: columnDef.field === draggingOverColumn?.field && (draggingOverColumn?.y || 0) < 10,
              bottom: columnDef.field === draggingOverColumn?.field && (draggingOverColumn?.y || 0) > 10,
            })}
            ref={(element: HTMLDivElement) => gridColumnHeaderRefs.current.push({ element, def: columnDef })}
            key={`columndefinition-sidebar-${columnDef.field}-${index}`}
          >
            {!!onColumnToggle && <Checkbox checked={!columnDef.hide} onChange={() => onColumnToggle(columnDef)} />}
            {!!onColumnReorder && <Icon name="Move" color="text" />}
            <Typography variant="body">{columnDef.fieldName}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(GridColumnsSidebar) as typeof GridColumnsSidebar;
