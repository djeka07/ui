import { Element } from '../components/atoms/typographies/typography.props';
import { BreakPointEnumKeys } from './media.css';

export type Size = {
  xxxsmall: string;
  xxsmall: string;
  xsmall: string;
  small: string;
  normal: string;
  medium: string;
  large: string;
  xlarge: string;
  xxlarge: string;
  xxxlarge: string;
};

export type Weight = {
  light: string;
  regular: string;
  bold: string;
};

export type WeightKeys = keyof Weight;

export type SizeKeys = keyof Size;

export type FontFaceSource = {
  url: string;
  format: string;
};

export type FontFace = {
  family: string;
  src: FontFaceSource[];
  weight?: string | number;
  style?: string;
  display: string;
};

export type FontSize = { [key in BreakPointEnumKeys]?: string };

export type Tag = {
  input: Element | Element[];
  weight?: WeightKeys;
  fontSize: FontSize;
  family?: string;
};

export type TypographyProps = {
  weight: Weight;
  size: Size;
  tags: Tag[];
  fontFace: FontFace[];
};

export default {
  tags: [
    { input: 'h1', weight: 'regular', family: 'Campton, Helvetica, sans-serif', fontSize: { xs: '2rem', sm: '4rem' } },
    {
      input: 'h2',
      weight: 'regular',
      family: 'Campton, Helvetica, sans-serif',
      fontSize: { xs: '1.5rem', sm: '3rem' },
    },
    {
      input: 'h3',
      weight: 'regular',
      family: 'Campton, Helvetica, sans-serif',
      fontSize: { xs: '1.3rem', sm: '2.5rem' },
    },
    {
      input: 'h4',
      weight: 'regular',
      family: 'Campton, Helvetica, sans-serif',
      fontSize: { xs: '1.2rem', sm: '2rem' },
    },
    { input: 'h5', weight: 'regular', family: 'Campton, Helvetica, sans-serif', fontSize: { xs: '1.125rem' } },
    { input: 'h6', weight: 'regular', family: 'Campton, Helvetica, sans-serif', fontSize: { xs: '1rem' } },
    {
      input: ['body', 'caption', 'div', 'label', 'p', 'span'],
      weight: 'regular',
      family: 'Campton, Helvetica, sans-serif;',
      fontSize: { xs: '1rem' },
    },
  ],
  weight: {
    light: '100',
    regular: '400',
    bold: '700',
  },
  size: {
    xxxsmall: '0.5rem',
    xxsmall: '0.625rem',
    xsmall: '0.75rem',
    small: '0.875rem',
    normal: '1rem',
    medium: '1.125rem',
    large: '1.25rem',
    xlarge: '1.5rem',
    xxlarge: '1.75rem',
    xxxlarge: '2.rem',
  },
  fontFace: [
    {
      family: 'Campton',
      src: [
        { url: 'https://solid-static.azureedge.net/static/fonts/subset-Campton-Book.woff2', format: 'woff2' },
        { url: 'https://solid-static.azureedge.net/static/fonts/subset-Campton-Book.woff', format: 'woff' },
      ],
      weight: 400,
      style: 'normal',
      display: 'swap',
    },
    {
      family: 'Campton',
      src: [
        { url: 'https://solid-static.azureedge.net/static/fonts/subset-Campton-Light.woff2', format: 'woff2' },
        { url: 'https://solid-static.azureedge.net/static/fonts/subset-Campton-Light.woff', format: 'woff' },
      ],
      weight: 300,
      style: 'normal',
      display: 'swap',
    },
    {
      family: 'Campton',
      src: [
        { url: 'https://solid-static.azureedge.net/static/fonts/subset-Campton-Bold.woff2', format: 'woff2' },
        { url: 'https://solid-static.azureedge.net/static/fonts/subset-Campton-Bold.woff', format: 'woff' },
      ],
      weight: 700,
      style: 'normal',
      display: 'swap',
    },
  ],
} satisfies TypographyProps;
