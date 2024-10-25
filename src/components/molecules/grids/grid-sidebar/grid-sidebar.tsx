import { MouseEvent, useState } from 'react';
import { Icon } from '../../../atoms';
import { button, root, text } from './grid-sidebar.css';
import { GridColumnsSidebar } from '../../../atoms/grids/grid-column-sidebar';
import { ColumnDefinitionState, GetLocaleTextFunc } from '../grid/grid.type';
import { GridFilterSidebar } from '../../../atoms/grids/grid-filter-sidebar';

type View = 'column' | 'filter';

type GridSidebarProps = {
  columnDefinition: ColumnDefinitionState[];
  onColumnReorder?: (newOrder: ColumnDefinitionState[]) => void;
  onColumnToggle?: (columnDefinition: ColumnDefinitionState) => void;
  getLocaleText?: GetLocaleTextFunc;
};

const GridSidebar = ({ columnDefinition, onColumnReorder, onColumnToggle, getLocaleText }: GridSidebarProps) => {
  const [view, setShowView] = useState<View | null>(null);

  const onViewClick = (e: MouseEvent, view: View) => {
    e.stopPropagation();
    setShowView((prev) => (prev === view ? null : view));
  };

  return (
    <>
      <div className={root}>
        <button className={button({ active: view === 'column' })} onClick={(e) => onViewClick(e, 'column')}>
          <Icon name="Columns" color="text" size="small" />
          <span className={text}>{getLocaleText?.({ key: 'columns' }) || 'Columns'}</span>
        </button>
        <button className={button({ active: view === 'filter' })} onClick={(e) => onViewClick(e, 'filter')}>
          <Icon name="Filter" color="text" size="small" />
          <span className={text}>{getLocaleText?.({ key: 'filters' }) || 'Filters'}</span>
        </button>
      </div>
      {view === 'column' && (
        <GridColumnsSidebar
          getLocaleText={getLocaleText}
          columnDefinition={columnDefinition}
          onColumnReorder={onColumnReorder}
          onColumnToggle={onColumnToggle}
          onClose={() => setShowView(null)}
        />
      )}
      {view === 'filter' && <GridFilterSidebar columnDefinition={columnDefinition} getLocaleText={getLocaleText} />}
    </>
  );
};

export default GridSidebar;
