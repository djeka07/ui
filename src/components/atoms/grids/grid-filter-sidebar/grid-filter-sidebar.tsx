import { memo, useState } from 'react';
import { ColumnDefinitionState, GetLocaleTextFunc } from '../../../molecules/grids/grid/grid.type';
import { Typography } from '../../typographies';
import { root, wrapper } from '../grid-column-sidebar/grid-column-sidebar.css';
import { GridColumnFilterWrapper } from '../grid-column-filter';
import { Icon } from '../../icons';
import { button, filter } from './grid-filter-sidebar.css';

type GridFilterSidebarProps = {
  columnDefinition: ColumnDefinitionState[];
  getLocaleText?: GetLocaleTextFunc;
  onClose?: () => void;
};

const GridFilterSidebar = ({ columnDefinition, getLocaleText }: GridFilterSidebarProps) => {
  const [open, setIsOpen] = useState<string[]>([]);
  return (
    <div className={root}>
      <div className={wrapper({ border: true })}>
        <Typography variant="h4">{getLocaleText?.({ key: 'filters' }) || 'Filters'}</Typography>
      </div>
      <div className={wrapper({ overflow: true })}>
        {columnDefinition
          .filter((c) => c.filter !== false)
          .map((columnDef, index) => {
            const isOpen = open?.includes(columnDef.field);
            return (
              <div className={filter} key={`grid-sidebar-filter-${columnDef.field}-${index}`}>
                <button
                  className={button}
                  onClick={() => {
                    setIsOpen((prev) => {
                      if (prev.includes(columnDef.field)) {
                        return prev.filter((p) => p !== columnDef.field);
                      }
                      return [...prev, columnDef.field];
                    });
                  }}
                >
                  <Icon name={isOpen ? 'Up' : 'Down'} />
                  <Typography variant="body">{columnDef.fieldName}</Typography>
                </button>
                <div style={{ height: isOpen ? 'auto' : 0, overflow: 'hidden' }}>
                  <div style={{ paddingBottom: 16, paddingTop: 4 }}>
                    <GridColumnFilterWrapper columnDefinition={columnDef} isFloating={false} />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

GridFilterSidebar.displayName = 'GridFilterSidebar';
export default memo(GridFilterSidebar) as typeof GridFilterSidebar;
