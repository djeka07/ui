import { Variant } from '../components/atoms/typographies/typography.props';
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
  input: Variant | Variant[];
  fontSize?: FontSize;
};

export type Family = { heading: string; body: string };

export type TypographyProps = {
  weight: Weight;
  size: Size;
  tagSizes?: Tag[];
  family: Family;
  fontFace: FontFace[];
};

export default {
  family: {
    body: 'Campton, Helvetica, sans-serif;',
    heading: 'Campton, Helvetica, sans-serif;',
  },
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
