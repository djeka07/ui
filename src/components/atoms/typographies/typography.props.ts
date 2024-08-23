import { ReactNode } from 'react';
import { TypographyVariants } from './typography.css';

export type Variant = 'hero' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'label' | 'p' | 'span';

export type Element = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'label' | 'p' | 'span' | 'div';

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

export type TypographyProps = Omit<TypographyVariants, 'cursor'> & {
  as?: Element;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};
