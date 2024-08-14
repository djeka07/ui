import React from 'react';
import { css } from '@djeka07/utils';
import { svg, wrapper, WrapperStyleVariants } from './icon.css';
import * as Svgs from './svgs';
import { IconProps } from './icon.props';

const IconSvg = ({ title, name, onClick, color, size, className }: IconProps) => {
  const Svg = Svgs[name];
  return (
    <Svg
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
