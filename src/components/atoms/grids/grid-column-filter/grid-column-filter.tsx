import { useDebounce, useDidUpdate, usePrevious } from '@djeka07/hooks';
import { ChangeEvent, useState } from 'react';
import { Icon } from '../../icons';
import { Button, DropDown, TextInput } from '../../inputs';
import { Popup } from '../../popups';
import { columnTypes, FilterParams } from './filter-column-types';
import { button, icon, PopupVariants, popupWrapper, root } from './grid-column-filter.css';
import {
  ColumnDefinitionType,
  FilterItemModel,
  FilterOperator,
  GetLocaleTextFunc,
} from '../../../molecules/grids/grid/grid.type';

type GridColumnFilterProps = PopupVariants & {
  onFilterChange?: (filter: FilterItemModel) => void;
  columnDefinition: ColumnDefinitionType;
  getLocaleText?: GetLocaleTextFunc;
  isFloating?: boolean;
  appliedFilter?: FilterItemModel;
};

type GridColumnFilterBaseProps = {
  onChange: (value: string) => void;
  field: string;
  filter?: string;
  placeholder: string;
  label?: string;
  filterParams?: FilterParams;
};

const GridColumnFilterBase = ({
  onChange,
  field,
  filter,
  placeholder,
  filterParams,
  label,
}: GridColumnFilterBaseProps) => {
  const internalOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <div className={root}>
      {filterParams?.filterOptions && (
        <DropDown
          size="small"
          label="Type"
          name="filterParams"
          items={filterParams.filterOptions.map((filterOption) => ({
            name: filterOption,
            value: filterOption,
            isSelected: filterOption === filterParams?.defaultFilterOption,
          }))}
        />
      )}
      <TextInput
        size="small"
        label={label}
        placeholder={placeholder}
        name={field}
        type="text"
        value={filter}
        onChange={internalOnChange}
      />
    </div>
  );
};

const GridColumnFilterWrapper = ({
  columnDefinition,
  isFloating = false,
  radius,
  onFilterChange,
  getLocaleText,
  appliedFilter,
}: GridColumnFilterProps) => {
  const [state, setState] = useState<Pick<FilterItemModel, 'type' | 'filter'>>({
    type: FilterOperator.CONTAINS,
    filter: '',
  });
  const previousState = usePrevious(state);
  const internalFilterChange = useDebounce(state, 300);

  const onChange = (value: string) => {
    setState((prev) => ({ ...prev, filter: value }));
  };

  useDidUpdate(() => {
    if (previousState) {
      onFilterChange?.({ ...internalFilterChange, field: columnDefinition.field, filterType: columnDefinition.type });
    }
  }, [internalFilterChange]);

  const placeholder =
    getLocaleText?.({ key: 'filter-on', defaultValue: columnDefinition.fieldName }) ||
    `Filter on ${columnDefinition.fieldName}`;

  const filterParams = (columnTypes[columnDefinition.type]?.filterParams as FilterParams) || {
    filterParams: undefined,
    defaultFilterOption: undefined,
  };

  if (!isFloating) {
    return (
      <GridColumnFilterBase
        label={`Filter on ${columnDefinition.fieldName}`}
        placeholder={placeholder}
        field={columnDefinition.field}
        filter={state.filter}
        filterParams={filterParams}
        onChange={onChange}
      />
    );
  }
  const isApplied = appliedFilter?.field === columnDefinition?.field;
  return (
    <Popup
      wrapperClassName={popupWrapper({ radius })}
      toggler={({ toggleShow }) => (
        <Button
          label="Filter"
          size="xsmall"
          transparent
          className={button({ active: isApplied })}
          onClick={(e) => {
            toggleShow();
            e.stopPropagation();
          }}
        >
          <Icon
            className={icon({ active: isApplied })}
            name="Filter"
            color={appliedFilter?.field === columnDefinition?.field ? 'success-dark' : 'gridHeader'}
          />
        </Button>
      )}
    >
      {() => (
        <GridColumnFilterBase
          filterParams={filterParams}
          label={`Filter on ${columnDefinition.fieldName}`}
          placeholder={placeholder}
          field={columnDefinition.field}
          onChange={onChange}
          filter={state.filter}
        />
      )}
    </Popup>
  );
};

export default GridColumnFilterWrapper;
