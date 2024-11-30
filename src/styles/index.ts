import createBorder, { Border, RadiusKeys } from './border';
import createTypography, { TypographyProps, SizeKeys } from './typography';
import createPalette, { Palette } from './palette';
import createStyleSheet from './stylesheet';
import media from './media.css';

type Theme = {
  typography: TypographyProps;
  border: Border;
  palette: Palette;
};

const createDefaultTheme = (theme: 'dark' | 'light') =>
  ({
    typography: createTypography,
    palette: createPalette(theme),
    border: createBorder,
  }) satisfies Theme;

export { createStyleSheet, createDefaultTheme, media };
export type { TypographyProps, Border, Palette, Theme, SizeKeys, RadiusKeys };
