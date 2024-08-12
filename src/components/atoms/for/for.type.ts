export type ForProps<T> = {
  each?: T[];
  fallback?: JSX.Element | null;
  className?: string;
  children: (item: T, index: number) => JSX.Element;
  keyed: ((item: T, index: number) => string) | keyof T;
};