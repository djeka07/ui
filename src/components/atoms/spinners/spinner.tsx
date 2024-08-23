import { css } from '@djeka07/utils';
import { root, rotate } from './spinner.css';
import { SpinnerProps } from './spinner.props';

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
