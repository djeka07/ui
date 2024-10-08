import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const root = style({
  padding: '0 8px',
  display: 'grid',
  gap: 8,
});

export const button = style({
  border: 0,
  backgroundColor: 'transparent',
  cursor: 'pointer',
});

export const textInput = style({
  backgroundColor: '#fff',
});

export const popupWrapper = recipe({
  base: {
    width: 200,
    padding: '24px 8px',
    backgroundColor: 'var(--grid-header-bg-color)',
    border: '1px solid var(--grid-border-bg-color)',
    boxShadow: 'var(--main-box-shadow)',
  },
  variants: {
    radius: {
      none: {
        borderRadius: 0,
      },
      small: {
        borderRadius: 2,
      },
      medium: {
        borderRadius: 4,
      },
      large: {
        borderRadius: 8,
      },
      xlarge: {
        borderRadius: 12,
      },
      xxlarge: {
        borderRadius: 16,
      },
    },
  },
});

export type PopupVariants = RecipeVariants<typeof popupWrapper>;
