import { ReactNode, Children, memo } from 'react';

type SwitchProps<T> = {
  children: JSX.Element | JSX.Element[];
  expression: T;
  fallback?: ReactNode;
};

type MatchProps<T> = {
  when: T;
  children: ReactNode | ReactNode[];
};

const Switch = <T,>({ children, expression, fallback = null }: SwitchProps<T>) => {
  const childToShow = Children.toArray(children).filter(
    (c: any) => c?.type.displayName === 'Match' && c.props.when === expression,
  );

  if (!!childToShow) {
    return childToShow;
  }

  return fallback;
};

export const Match = <T,>({ children }: MatchProps<T>) => <>{children}</>;
Match.displayName = 'Match';

export default memo(Switch);
