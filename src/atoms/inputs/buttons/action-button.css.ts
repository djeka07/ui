import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const actionButton = recipe({
  base: {
    transition: 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out',
    selectors: {
      '&&&': {
        fontWeight: 'normal',
        border: `2px dashed var(--main-text-color)`,
        minHeight: 90,
      },
      '&&&:hover': {
        opacity: '0.8',
        backgroundColor: 'transparent',
        transform: 'scale(0.99)',
      },
    },
  },
  variants: {
    color: {
      transparent: {
        backgroundColor: 'transparent',
      },
      light: { backgroundColor: 'var(--light-bqckground-color)' },
      main: { backgroundColor: 'var(--main-bqckground-color)' },
      dark: { backgroundColor: 'var(--dark-bqckground-color)' },
    },
  },
});

export const typography = style({
  display: 'block',
});

export const root = style({
  flexDirection: 'column',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 4,
});

export type ActionButtonStyleVariant = RecipeVariants<typeof actionButton>;
