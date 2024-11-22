import { SvgStyleVariants } from './icon.css';
import { IconNames } from './svgs';

export type IconProps = SvgStyleVariants & {
  name: IconNames;
  wrapperClass?: string;
  className?: string;
  onClick?: () => void;
};
