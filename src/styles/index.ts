import createBorder, { Border } from './border';
import createBreakPoints, { BreakPointProps } from './breakpoint';
import createTypography, { TypographyProps, SizeKeys } from './typography';
import createPalette, { Palette } from './palette';
import createStyleSheet from './stylesheet';
import media from './media.css';

type Theme = {
  typography: TypographyProps;
  breakpoint: BreakPointProps;
  border: Border;
  palette: Palette;
};

const createDefaultTheme = (theme: 'dark' | 'light') =>
  ({
    typography: createTypography,
    breakpoint: createBreakPoints(),
    palette: createPalette(theme),
    border: createBorder,
  }) satisfies Theme;

export { createStyleSheet, createDefaultTheme, media };
export type { TypographyProps, BreakPointProps, Border, Palette, Theme, SizeKeys };
