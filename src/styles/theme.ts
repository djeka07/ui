import defaultBorder, { Border } from './border';
import palette, { Palette } from './palette';
import typography, { TypographyProps } from './typography';

type Theme = {
  border: Border;
  palette: Palette;
  typography: TypographyProps;
};

export const createDefaultTheme = (theme: 'light' | 'dark' = 'dark'): Theme => ({
  border: defaultBorder,
  palette: palette(theme),
  typography,
});

export default Theme;
