import { css } from '@djeka07/utils';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ColumnDefinitionType, DefaultColumnDefinitionType, FilterItemModel } from '../grid.type';
import { resize, root, text, wrapper } from './grid-column-header.css';
import { useDidUpdate } from '@djeka07/hooks';
import { GridColumnFilterWrapper } from '../grid-column-filter';
import { PopupVariants } from '../grid-column-filter/grid-column-filter.css';

type GridColumnHeaderProps = PopupVariants & {
  className?: string;
  columnDefinition: ColumnDefinitionType;
  defaultColumnDefinition: DefaultColumnDefinitionType;
  onResize?: (column: ColumnDefinitionType, newSize: number) => void;
  onFilterChange?: (filter: FilterItemModel) => void;
};

type ColumnState = {
  width: number;
  changed: boolean;
};

const GridColumnHeader = ({
  columnDefinition,
  defaultColumnDefinition,
  className,
  onResize,
  onFilterChange,
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
    const currentRef = dragRef.current;
    currentRef?.addEventListener('mousedown', onMouseDown);
    return () => {
      currentRef?.removeEventListener('mousedown', onMouseDown);
    };
  }, [defaultColumnDefinition.autoFill, onMouseDown]);
  return (
    <div
      className={css(root(), className)}
      ref={ref}
      style={{
        minWidth,
        width: state.width,
      }}
    >
      <div className={wrapper({ shouldRenderFloatingFilter })}>
        <div className={text}>{columnDefinition.fieldName}</div>
        {shouldRenderFloatingFilter && (
          <GridColumnFilterWrapper
            columnDefinition={columnDefinition}
            isFloating
            radius={radius}
            onFilterChange={onFilterChange}
          />
        )}
        {columnDefinition.resizeable !== false && <div ref={dragRef} className={resize} />}
      </div>
      {shouldRenderFilter && (
        <GridColumnFilterWrapper columnDefinition={columnDefinition} onFilterChange={onFilterChange} />
      )}
    </div>
  );
};

export default GridColumnHeader;
