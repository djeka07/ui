import React, { Children, memo } from 'react';
import { MatchProps, SwitchProps } from './switch.props';

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
