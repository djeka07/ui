import { css, isEmpty } from '@djeka07/utils';
import { ReactNode } from 'react';
import { GridDefaultNoItems } from '../grid-default-no-items';
import { GridItem } from '../grid-item';
import getRowClasses from './get-row-classes';
import { root, wrapper } from './grid-rows.css';
import {
  ColumnDefinitionType,
  DefaultColumnDefinitionType,
  GridRenderers,
  GridTableRenderers,
  RowEvent,
} from '../../../molecules/grids/grid/grid.type';

type GridRowsProps<T> = {
  className?: string;
  rowClassName?: string;
  itemClassName?: string;
  noItemsRenderer?: string;
  renderers?: GridRenderers<T>;
  getRowId: (props: T) => string;
  onRowClick?: (item: T) => void;
  rowClassRules?: [string, string | ((params: RowEvent<T>) => boolean)][];
  columnDefinition: ColumnDefinitionType[];
  items: T[];
  defaultColumnDefinition: DefaultColumnDefinitionType;
  onCloseToBottom?: () => Promise<void>;
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
  noItemsRenderer,
  getRowId,
  onRowClick,
}: GridRowsProps<T>) => {
  return (
    <div className={css(root, className)}>
      {!isEmpty(items) ? (
        <>
          {items.map((item, index) => {
            const rowClasses = !isEmpty(rowClassRules) ? getRowClasses(item, rowClassRules) : undefined;
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
                      renderer={
                        renderer ? () => renderer({ data: item, value: value as T[keyof T] }) : (value as ReactNode)
                      }
                    />
                  ) : null;
                })}
              </div>
            );
          })}
        </>
      ) : !!noItemsRenderer && !!renderers?.[noItemsRenderer] ? (
        (renderers as GridTableRenderers)[noItemsRenderer]()
      ) : (
        <GridDefaultNoItems />
      )}
    </div>
  );
};

export default GridRows;
