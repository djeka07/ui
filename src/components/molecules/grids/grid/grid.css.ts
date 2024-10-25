import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const root = recipe({
  base: {
    position: 'relative',
    display: 'grid',
    overflow: 'hidden',
    gridTemplateRows: 'auto 1fr auto',
    height: '100%',
    maxHeight: 'calc(100vh - 48px)',
    boxShadow: 'var(--main-box-shadow)',
    backgroundColor: 'var(--grid-main-bg-color)',
    minHeight: 200,
  },
  variants: {
    radius: {
      none: {
        borderRadius: 0,
      },
      small: {
        borderRadius: 4,
      },
      medium: {
        borderRadius: 8,
      },
      large: {
        borderRadius: 12,
      },
      xlarge: {
        borderRadius: 16,
      },
      xxlarge: {
        borderRadius: 20,
      },
    },
  },
});

export type GridVariants = RecipeVariants<typeof root>;

export const rowWrapper = style({
  position: 'relative',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
  height: '100%',
});
