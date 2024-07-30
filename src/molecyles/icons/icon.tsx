import { MouseEventHandler } from 'react';
import { css } from '../../models/helpers/class';
import { svg, SvgStyleVariants, wrapper, WrapperStyleVariants } from './icon.css';
import * as Svgs from './svgs';

export type IconProps = SvgStyleVariants & {
  title?: string;
  name: Svgs.IconNames;
  wrapperClass?: string;
  className?: string;
  onClick?: () => void;
};

const IconSvg = ({ title, name, onClick, color, size, className }: IconProps) => {
  const Svg = Svgs[name];
  return (
    <Svg
      title={title}
      onClick={onClick}
      className={css(svg({ size, color, cursor: !!onClick ? 'pointer' : undefined }), className)}
    />
  );
};

const Icon = ({
  background = undefined,
  radius,
  boxShadow = true,
  wrapperClass,
  padding = 'small',
  ...props
}: IconProps & WrapperStyleVariants) =>
  !!background ? (
    <div className={css(wrapper({ background, boxShadow, radius, padding }), wrapperClass)}>
      <IconSvg {...props} />
    </div>
  ) : (
    <IconSvg {...props} />
  );

export default Icon;
