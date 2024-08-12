import { ReactNode } from 'react';

export type SwitchProps<T> = {
  children: JSX.Element | JSX.Element[];
  expression: T;
  fallback?: ReactNode;
};

export type MatchProps<T> = {
  when: T;
  children: ReactNode | ReactNode[];
};