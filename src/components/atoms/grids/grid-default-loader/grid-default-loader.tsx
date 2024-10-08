import { css } from '@djeka07/utils';
import { item, itemSkeleton, root, text, wrapper } from './grid-default-loader.css';
import { ColumnDefinitionState, DefaultColumnDefinitionType } from '../grid.type';

type GridDefaultLoaderProps = {
  className?: string;
  rows: number;
  columnDefinitions: ColumnDefinitionState[];
  defaultColumnDefinition: DefaultColumnDefinitionType;
};

const GridDefaultLoader = ({ columnDefinitions, defaultColumnDefinition, rows, className }: GridDefaultLoaderProps) => (
  <div className={css(root, className)}>
    {[...new Array(rows)].map((_, index) => (
      <div className={wrapper({ odd: index % 2 !== 0 })} key={`grid-default-loader-row-${index}`}>
        {columnDefinitions.map((columnDefinition, columnIndex) => (
          <div
            className={item}
            style={{
              minWidth: columnDefinition.minWidth || defaultColumnDefinition.minWidth,
              width: columnDefinition.width || defaultColumnDefinition.width,
            }}
            key={`grid-default-loader-row-${index}-column-${columnIndex}`}
          >
            <div className={itemSkeleton}>
              <span className={text}>{columnDefinition.fieldName}</span>
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default GridDefaultLoader;
