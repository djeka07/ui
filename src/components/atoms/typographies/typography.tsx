import { css } from '@djeka07/utils';
import { createElement } from 'react';
import { typography } from './typography.css';
import { elementMap, TypographyProps } from './typography.props';

const Typography = ({
  children,
  align,
  as,
  className,
  fontStyle,
  color,
  onClick,
  marginBottom,
  overflow,
  whiteSpace,
  marginLeft,
  marginRight,
  marginTop,
  size,
  transform,
  variant = 'body',
  style,
  weight,
  wordBreak,
}: TypographyProps) => {
  const element = as || elementMap[variant];

  return createElement(element, {
    className: css(
      typography({
        align,
        color,
        variant: !color ? variant : undefined,
        cursor: onClick ? 'pointer' : undefined,
        fontStyle,
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        whiteSpace,
        overflow,
        size,
        transform,
        weight,
        wordBreak,
      }),
      className,
    ),
    style,
    children,
  });
};

export default Typography;
