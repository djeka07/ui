import { css, isEmpty } from '@djeka07/utils';
import { ReactNode, useRef } from 'react';
import { GridItem } from '../grid-item';
import { ColumnDefinitionType, DefaultColumnDefinitionType, GridRenderers, RowEvent } from '../grid.type';
import { root, wrapper } from './grid-rows.css';

type GridRowsProps<T> = {
  className?: string;
  rowClassName?: string;
  itemClassName?: string;
  renderers?: GridRenderers;
  getRowId: (props: T) => string;
  onRowClick?: (item: T) => void;
  items: T[];
  rowClassRules?: [string, string | ((params: RowEvent<T>) => boolean)][];
  columnDefinition: ColumnDefinitionType[];
  defaultColumnDefinition: DefaultColumnDefinitionType;
};

const GridRows = <T,>({
  items,
  columnDefinition,
  defaultColumnDefinition,
  className,
  renderers,
  itemClassName,
  rowClassName,
  rowClassRules,
  getRowId,
  onRowClick,
}: GridRowsProps<T>) => {
  const ref = useRef<number[]>([]);

  const getRowClasses = (item: T): Record<string, string | boolean> | undefined => {
    return rowClassRules?.reduce(
      (amount, [key, value]) => {
        if (typeof value === 'function') {
          return { ...amount, [key]: value({ data: item }) };
        }

        return { ...amount, [key]: value };
      },
      {} as Record<string, string | boolean>,
    );
  };

  return (
    <div className={css(root, className)}>
      {items?.map((item, index) => {
        const rowClasses = !isEmpty(rowClassRules) ? getRowClasses(item) : undefined;
        return (
          <div key={getRowId(item)} className={css(wrapper({ odd: index % 2 !== 0 }), rowClassName, rowClasses)}>
            {columnDefinition.map((def) => {
              const renderer = renderers?.[def.cellRenderer as string];
              const value = item?.[def.field as keyof T];
              return value ? (
                <GridItem
                  row={index}
                  columnDefinition={def}
                  className={itemClassName}
                  tabIndex={index + 1}
                  onClick={onRowClick ? () => onRowClick(item) : undefined}
                  key={`-grid-item-${def.field}-${value}`}
                  defaultColumnDefinition={defaultColumnDefinition}
                  onMount={(width) => ref.current.push(width)}
                  renderer={
                    renderer ? () => renderer({ data: item, value: value as T[keyof T] }) : (value as ReactNode)
                  }
                />
              ) : null;
            })}
          </div>
        );
      }) || 'no items'}
    </div>
  );
};

export default GridRows;
