import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const message = recipe({
  base: {
    fontSize: 'var(--small-font-size)',
    borderRadius: 'var(--small-border-radius)',
    overflow: 'hidden',
  },
  variants: {
    type: {
      error: { backgroundColor: 'var(--light-error-color)', color: 'var(--dark-error-color)' },
      success: { backgroundColor: 'var(--light-success-color)', color: 'var(--dark-success-color)' },
      warning: { backgroundColor: 'var(--light-warning-color)', color: 'var(--dark-warning-color)' },
      info: { backgroundColor: 'var(--light-info-color)', color: 'var(--dark-info-color)' },
    },
  },
  defaultVariants: {
    type: 'info',
  },
});

export const innerMessage = recipe({
  base: {
    padding: '10px 10px',
  },
  variants: {
    icon: {
      true: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      },
    },
  },
});

export type MessageVariants = RecipeVariants<typeof message>;
