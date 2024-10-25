import { css } from '@djeka07/utils';
import { useCallback, useEffect, useRef, useState, memo } from 'react';
import { GridColumnFilterWrapper } from '../grid-column-filter';
import { PopupVariants } from '../grid-column-filter/grid-column-filter.css';
import { DragOverState } from '../grid-header/grid-header.type';
import { resize, resizeWrapper, root, text, wrapper } from './grid-column-header.css';
import { useDidUpdate } from '@djeka07/hooks';
import {
  ColumnDefinitionState,
  DefaultColumnDefinitionType,
  FilterItemModel,
} from '../../../molecules/grids/grid/grid.type';

type GridColumnHeaderProps = PopupVariants & {
  appliedFilter?: FilterItemModel;
  className?: string;
  draggingDefinition: ColumnDefinitionState | null;
  draggingOverDefinition: DragOverState | null;
  columnDefinition: ColumnDefinitionState;
  defaultColumnDefinition: DefaultColumnDefinitionType;
  onFilterChange?: (filter: FilterItemModel) => void;
  onResize?: (column: ColumnDefinitionState, newSize: number) => void;
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
  radius,
}: GridColumnHeaderProps) => {
  const shouldRenderFilter = columnDefinition.filter !== false && columnDefinition.floatingFilter === false;
  const shouldRenderFloatingFilter = columnDefinition.filter !== false && columnDefinition.floatingFilter !== false;
  const showDropZone = !!draggingDefinition && draggingDefinition.field !== columnDefinition.field;
  const showActiveDropZone =
    !!draggingOverDefinition &&
    draggingOverDefinition.field === columnDefinition.field &&
    draggingOverDefinition?.field !== draggingDefinition?.field;
  const minWidth = columnDefinition.minWidth || defaultColumnDefinition.minWidth;
  const ref = useRef<HTMLDivElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);
  const [columnWidth, _setColumnWidth] = useState<number>(columnDefinition.width || defaultColumnDefinition.width);
  const columnWidthRef = useRef<number>(columnDefinition.width || defaultColumnDefinition.width);

  const setColumnWidth = (width: number) => {
    _setColumnWidth(width);
    columnWidthRef.current = width;
  };

  useDidUpdate(() => {
    const { width } = columnDefinition;
    if (!!width && width !== columnWidthRef.current) {
      setColumnWidth(width);
    }
  }, [columnDefinition.width]);

  const internalOnResize = useCallback(
    (event: MouseEvent) => {
      const { x } = ref.current?.getBoundingClientRect() || { x: 0 };
      const newSize = event.clientX - x;
      const newWidth = newSize <= minWidth ? minWidth : newSize;
      setColumnWidth(newWidth);
      onResize?.(columnDefinition, newWidth);
    },
    [columnDefinition, minWidth, onResize],
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

  return (
    <div
      ref={ref}
      className={css(root({ showDropZone, showActiveDropZone }), className)}
      style={{
        minWidth,
        width: columnWidth,
      }}
      id={columnDefinition.field}
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
        {columnDefinition.resizeable !== false && (
          <div ref={dragRef} className={resizeWrapper}>
            <div className={resize} /> <div className={resize} />
          </div>
        )}
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

export default memo(GridColumnHeader);
