import createBorder, { Border } from './border';
import createBreakPoints, { BreakPointProps } from './breakpoint';
import createTypography, { TypographyProps } from './typography';
import createPalette, { Palette } from './palette';
import createStyleSheet from './stylesheet';

export type Theme = {
  typography: TypographyProps;
  breakpoint: BreakPointProps;
  border: Border;
  palette: Palette;
};

export default (theme: 'dark' | 'light') =>
  ({
    typography: createTypography,
    breakpoint: createBreakPoints(),
    palette: createPalette(theme),
    border: createBorder,
  }) satisfies Theme;

export { createStyleSheet };
