import { RowEvent } from '../../../molecules/grids/grid/grid.type';

type RowClassRules<T> = [string, string | ((params: RowEvent<T>) => boolean)][];

const getRowClasses = <T>(item: T, rowClassRules: RowClassRules<T>): Record<string, string | boolean> | undefined => {
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

export default getRowClasses;
