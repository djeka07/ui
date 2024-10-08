import defaultBorder, { Border } from './border';
import breakpoint, { BreakPointProps } from './breakpoint';
import palette, { Palette } from './palette';
import typography, { TypographyProps } from './typography';

type Theme = {
  border: Border;
  palette: Palette;
  breakpoint: BreakPointProps;
  typography: TypographyProps;
};

export const createDefaultTheme = (theme: 'light' | 'dark' = 'dark'): Theme => ({
  border: defaultBorder,
  breakpoint: breakpoint(),
  palette: palette(theme),
  typography,
});

export default Theme;
