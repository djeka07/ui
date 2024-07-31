import { Fragment, memo } from 'react';

type ForProps<T> = {
  each?: T[];
  fallback?: JSX.Element;
  className?: string;
  children: (item: T, index: number) => JSX.Element;
  keyed: ((item: T, index: number) => string) | keyof T;
};

const For = <T extends object>({ each, fallback, className, ...rest }: ForProps<T>) => {
  if ((!each || each?.length === 0) && !fallback) {
    return null;
  }

  if ((!each || each?.length === 0) && fallback) {
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
