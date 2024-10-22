import { css } from '@djeka07/utils';
import { item, itemSkeleton, root, text, wrapper } from './grid-default-loader.css';
import { ColumnDefinitionState, DefaultColumnDefinitionType } from '../../../molecules/grids/grid/grid.type';

type GridDefaultLoaderProps = {
  className?: string;
  rows: number;
  columnDefinitions: ColumnDefinitionState[];
  defaultColumnDefinition: DefaultColumnDefinitionType;
  onScrollX: (value: number) => void;
  itemHeight: number;
  startIndex?: number;
};

const GridDefaultLoader = ({
  columnDefinitions,
  defaultColumnDefinition,
  rows,
  className,
  itemHeight,
  startIndex = 0,
  onScrollX,
}: GridDefaultLoaderProps) => {
  return (
    <div className={css(root, className)} onScroll={(e) => onScrollX(e.currentTarget.scrollLeft)}>
      {[...new Array(rows)].map((_, index) => (
        <div
          style={{ height: itemHeight }}
          className={wrapper({ odd: (startIndex + index) % 2 !== 0 })}
          key={`grid-default-loader-row-${startIndex + index}`}
        >
          {columnDefinitions.map((columnDefinition, columnIndex) => (
            <div className={item} key={`grid-default-loader-row-${startIndex + index}-column-${columnIndex}`}>
              <div
                className={itemSkeleton}
                style={{
                  minWidth: columnDefinition.minWidth || defaultColumnDefinition.minWidth,
                  width: columnDefinition.width || defaultColumnDefinition.width,
                }}
              >
                <span className={text}>{columnDefinition.fieldName}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default GridDefaultLoader;
