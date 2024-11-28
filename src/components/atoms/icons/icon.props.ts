import { CSSProperties } from 'react';
import { SvgStyleVariants } from './icon.css';
import { IconNames } from './svgs';

export type IconProps = SvgStyleVariants & {
  style?: CSSProperties;
  name: IconNames;
  wrapperClass?: string;
  className?: string;
  onClick?: () => void;
};
