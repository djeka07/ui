import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const root = style({
  padding: '0 8px',
  display: 'grid',
  gap: 8,
});

export const button = recipe({
  base: {
    border: 0,
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  variants: {
    active: {
      true: {
        backgroundColor: 'var(--main-primary-color)',
        selectors: {
          '&:hover': {
            backgroundColor: 'color-mix(in srgb, var(--main-primary-color), black 50%)',
          },
        },
      },
    },
  },
});

export const icon = recipe({
  base: {
    fill: 'var(--grid-header-fg-color)',
  },
  variants: {
    active: {
      true: {
        fill: 'var(--white-common-color)',
      },
    },
  },
});

export const popupWrapper = recipe({
  base: {
    width: 200,
    position: 'fixed',
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
