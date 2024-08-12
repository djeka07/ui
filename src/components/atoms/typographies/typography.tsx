import { css } from '@djeka07/utils';
import { createElement } from 'react';
import { typography } from './typography.css';
import { elementMap, TypographyProps } from './typography.type';

const Typography = ({
  children,
  align,
  as,
  className,
  fontStyle,
  color,
  onClick,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  size,
  transform,
  variant = 'body',
  weight,
  wordBreak,
}: TypographyProps) => {
  const element = as || elementMap[variant];

  return createElement(element, {
    className: css(
      typography({
        align,
        color,
        element: !color ? element : undefined,
        cursor: !!onClick ? 'pointer' : undefined,
        fontStyle,
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        size,
        transform,
        weight,
        wordBreak,
      }),
      className,
    ),
    children,
  });
};

export default Typography;
