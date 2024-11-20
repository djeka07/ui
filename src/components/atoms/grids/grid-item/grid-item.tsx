import { memo, ReactNode, RefObject, useRef } from 'react';
import { root } from './grid-item.css';
import { css } from '@djeka07/utils';
import { useDidMount } from '@djeka07/hooks';
import { ColumnDefinitionType, DefaultColumnDefinitionType } from '../../../molecules/grids/grid/grid.type';

type GridItemProps = {
  width?: number;
  row: number;
  renderer?: (() => ReactNode) | ReactNode;
  minWidth?: number;
  tabIndex: number;
  onClick?: () => void;
  className?: string;
  wrapperRef?: RefObject<HTMLDivElement>;
  onMount?: (currentWidth: number) => void;
  columnDefinition: ColumnDefinitionType;
  defaultColumnDefinition: DefaultColumnDefinitionType;
};

const GridItem = ({
  onClick,
  tabIndex,
  renderer,
  className,
  columnDefinition,
  defaultColumnDefinition,
  row,
  onMount,
}: GridItemProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useDidMount(() => {
    if (!!ref.current && onMount && defaultColumnDefinition.autoFill) {
      const { width } = ref.current.getBoundingClientRect();
      onMount(width);
    }
  });

  return (
    <div>
      <div
        ref={ref}
        style={{
          minWidth: columnDefinition.minWidth || defaultColumnDefinition.minWidth,
          width: `${columnDefinition.width || defaultColumnDefinition.width}px`,
          height: 56,
        }}
        className={css(root({ odd: row % 2 !== 0 }), className)}
        role={onClick ? 'button' : 'cell'}
        onClick={onClick}
        onKeyDown={onClick}
        tabIndex={tabIndex}
      >
        {typeof renderer === 'function' ? renderer() : renderer}
      </div>
    </div>
  );
};

export default memo(GridItem);
