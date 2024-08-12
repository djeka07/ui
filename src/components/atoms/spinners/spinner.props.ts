import { RootVariants, SpinnerVariants } from './spinner.css';

export type SpinnerProps = SpinnerVariants &
  RootVariants & {
    className?: string;
    wrapperClass?: string;
  };