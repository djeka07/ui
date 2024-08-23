import { ReactNode } from 'react';

export type SwitchProps<T> = {
  children: ReactNode | ReactNode[];
  expression: T;
  fallback?: ReactNode;
};

export type MatchProps<T> = {
  when: T;
  children: ReactNode | ReactNode[];
};
