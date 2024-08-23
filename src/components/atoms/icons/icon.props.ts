import { SvgStyleVariants } from './icon.css';
import * as Svgs from './svgs';

export type IconProps = SvgStyleVariants & {
  name: Svgs.IconNames;
  wrapperClass?: string;
  className?: string;
  onClick?: () => void;
};
