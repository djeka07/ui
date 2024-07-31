import { createElement, ReactNode } from 'react';
import { typography, TypographyVariants } from './typography.css';
import { css } from '@djeka07/utils';

export type Variant = 'hero' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'label' | 'p' | 'span';

type Element = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'label' | 'p' | 'span' | 'div';

export const elementMap: { [key: string]: Element } = {
  hero: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'div',
  caption: 'caption',
  label: 'span',
  p: 'p',
  span: 'span',
};

export type TypographyProps = TypographyVariants & {
  as?: Element;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

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
