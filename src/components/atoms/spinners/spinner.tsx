import React from 'react';
import { root, RootVariants, rotate, SpinnerVariants } from './spinner.css';
import { css } from '@djeka07/utils';

type SpinnerProps = SpinnerVariants &
  RootVariants & {
    className?: string;
    wrapperClass?: string;
  };

const Spinner = (props: SpinnerProps) => {
  const className = css(rotate({ size: props.size, color: props.color }), props.className);
  return (
    <span className={css(root({ size: props?.size, margin: props?.margin }), props.wrapperClass)}>
      <span className={className} />
      <span className={className} />
      <span className={className} />
      <span className={className} />
    </span>
  );
};

export default Spinner;
