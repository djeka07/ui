import { ReactNode, useRef } from 'react';
import { ColumnDefinitionType, DefaultColumnDefinitionType } from '../grid.type';
import { root } from './grid-item.css';
import { css } from '@djeka07/utils';
import { useDidMount } from '@djeka07/hooks';

type GridItemProps = {
  width?: number;
  row: number;
  renderer?: (() => JSX.Element) | ReactNode;
  minWidth?: number;
  tabIndex: number;
  onClick?: () => void;
  className?: string;
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
    <div
      ref={ref}
      style={{
        minWidth: columnDefinition.minWidth || defaultColumnDefinition.minWidth,
        width: `${columnDefinition.width || defaultColumnDefinition.width}px`,
      }}
      className={css(root, className)}
      role={onClick ? 'button' : 'cell'}
      onClick={onClick}
      onKeyDown={onClick}
      tabIndex={tabIndex}
    >
      {typeof renderer === 'function' ? renderer() : renderer}
    </div>
  );
};

export default GridItem;
