import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const root = recipe({
  base: {
    position: 'relative',
    maxHeight: 'calc(100vh - 48px)',
    overflowX: 'auto',
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

export const wrapper = style({
  display: 'grid',
});

export type GridVariants = RecipeVariants<typeof root>;
