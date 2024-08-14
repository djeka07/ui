import React, { Fragment, memo } from 'react';
import { ForProps } from './for.props';

const For = <T extends object>({ each, fallback = null, className, ...rest }: ForProps<T>) => {
  if (!each || each?.length === 0) {
    return fallback;
  }

  return !!className ? (
    <div className={className}>
      <ForRender {...rest} each={each} />
    </div>
  ) : (
    <ForRender {...rest} each={each} />
  );
};

const ForRender = <T extends object>({ each, keyed, children }: Pick<ForProps<T>, 'each' | 'keyed' | 'children'>) =>
  each!.map((e: T, index: number) => (
    <Fragment key={typeof keyed === 'function' ? keyed(e, index) : (e[keyed as keyof T] as string)}>
      {children(e, index)}
    </Fragment>
  ));

export default memo(For) as typeof For;
