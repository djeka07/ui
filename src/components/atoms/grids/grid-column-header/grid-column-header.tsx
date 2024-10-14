import { css } from '@djeka07/utils';
import { useCallback, useEffect, useRef, useState, DragEvent, MutableRefObject } from 'react';
import { ColumnDefinitionState, DefaultColumnDefinitionType, FilterItemModel } from '../grid.type';
import { resize, root, text, wrapper } from './grid-column-header.css';
import { useDidUpdate } from '@djeka07/hooks';
import { GridColumnFilterWrapper } from '../grid-column-filter';
import { PopupVariants } from '../grid-column-filter/grid-column-filter.css';

type GridColumnHeaderProps = PopupVariants & {
  appliedFilter?: FilterItemModel;
  className?: string;
  gridColumnHeaderRefs: MutableRefObject<HTMLDivElement[]>;
  draggingDefinition: ColumnDefinitionState | null;
  draggingOverDefinition: ColumnDefinitionState | null;
  columnDefinition: ColumnDefinitionState;
  defaultColumnDefinition: DefaultColumnDefinitionType;
  onFilterChange?: (filter: FilterItemModel) => void;
  onResize?: (column: ColumnDefinitionState, newSize: number) => void;
  onDragStart: (e: DragEvent<HTMLDivElement>, columnDefinition: ColumnDefinitionState) => void;
  onDragEnd: (e: DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: DragEvent<HTMLDivElement>, columnDefinition: ColumnDefinitionState) => void;
};

type ColumnState = {
  width: number;
  changed: boolean;
};

const GridColumnHeader = ({
  draggingDefinition,
  draggingOverDefinition,
  appliedFilter,
  className,
  columnDefinition,
  defaultColumnDefinition,
  onFilterChange,
  onResize,
  onDragStart,
  onDragEnd,
  onDragOver,
  gridColumnHeaderRefs,
  radius,
}: GridColumnHeaderProps) => {
  const shouldRenderFilter = columnDefinition.filter !== false && columnDefinition.floatingFilter !== true;
  const shouldRenderFloatingFilter = columnDefinition.filter !== false && columnDefinition.floatingFilter === true;
  const minWidth = columnDefinition.minWidth || defaultColumnDefinition.minWidth;
  const ref = useRef<HTMLDivElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<ColumnState>({
    width: columnDefinition.width || defaultColumnDefinition.width,
    changed: false,
  });

  useDidUpdate(() => {
    const { width } = columnDefinition;
    if (!!width && width !== state.width) {
      setState((prev) => ({ ...prev, width }));
    }
  }, [columnDefinition.width]);

  const internalOnResize = useCallback(
    (event: MouseEvent) => {
      const { x } = ref.current?.getBoundingClientRect() || { width: state.width, x: 0 };
      const newSize = event.clientX - x;
      const newWidth = newSize <= minWidth ? minWidth : newSize;
      setState(() => {
        return {
          width: newWidth,
          changed: true,
        };
      });
      onResize?.(columnDefinition, newWidth);
    },
    [columnDefinition, minWidth, onResize, state.width],
  );

  const onMouseUp = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      document?.removeEventListener('mousemove', internalOnResize);
      document?.removeEventListener('mouseup', onMouseUp);
    },
    [internalOnResize],
  );

  const onMouseDown = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      document?.addEventListener('mousemove', internalOnResize);
      document?.addEventListener('mouseup', onMouseUp);
    },
    [internalOnResize, onMouseUp],
  );

  useEffect(() => {
    const dragCurrentRef = dragRef.current;
    dragCurrentRef?.addEventListener('mousedown', onMouseDown);
    return () => {
      dragCurrentRef?.removeEventListener('mousedown', onMouseDown);
    };
  }, [defaultColumnDefinition.autoFill, onMouseDown]);

  const internalOnDragStart = (e: DragEvent<HTMLDivElement>) => {
    onDragStart(e, columnDefinition);
  };

  const internalOnDragOver = (e: DragEvent<HTMLDivElement>) => {
    onDragOver(e, columnDefinition);
  };

  return (
    <div
      className={css(
        root({
          showDropZone: !!draggingDefinition && draggingDefinition.field !== columnDefinition.field,
          showActiveDropZone: !!draggingOverDefinition && draggingOverDefinition.field === columnDefinition.field,
        }),
        className,
      )}
      ref={(element: HTMLDivElement) => gridColumnHeaderRefs.current.push(element)}
      style={{
        minWidth,
        width: state.width,
      }}
      id={columnDefinition.field}
      draggable
      onDragStart={internalOnDragStart}
      onDragOver={internalOnDragOver}
      onDragEnd={onDragEnd}
      onDrop={(e) => console.log(e)}
    >
      <div className={wrapper({ shouldRenderFloatingFilter })}>
        <div className={text}>{columnDefinition.fieldName}</div>
        {shouldRenderFloatingFilter && (
          <GridColumnFilterWrapper
            appliedFilter={appliedFilter}
            columnDefinition={columnDefinition}
            isFloating
            radius={radius}
            onFilterChange={onFilterChange}
          />
        )}
        {columnDefinition.resizeable !== false && <div ref={dragRef} className={resize} />}
      </div>
      {shouldRenderFilter && (
        <GridColumnFilterWrapper
          appliedFilter={appliedFilter}
          columnDefinition={columnDefinition}
          onFilterChange={onFilterChange}
        />
      )}
    </div>
  );
};

export default GridColumnHeader;
