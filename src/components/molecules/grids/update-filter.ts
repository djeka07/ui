import { FilterItemModel } from './grid/grid.type';

const updateFilter = (newFilter: FilterItemModel, filters?: FilterItemModel[]): FilterItemModel[] => {
  const newFilters = [...(filters || [])];
  if (!filters?.some((filter) => filter.field === newFilter.field)) {
    return [...newFilters, newFilter];
  }

  if (!newFilter.filter) {
    return newFilters.filter((filter) => filter.field !== newFilter.field);
  }

  const index = filters?.findIndex((f) => f.field === newFilter.field);
  newFilters[index] = newFilter;
  return newFilters;
};

export default updateFilter;
