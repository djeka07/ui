import { ReactNode } from 'react';

export type ForProps<T> = {
  each?: T[];
  fallback?: ReactNode | null;
  className?: string;
  children: (item: T, index: number) => ReactNode;
  keyed: ((item: T, index: number) => string) | keyof T;
};
