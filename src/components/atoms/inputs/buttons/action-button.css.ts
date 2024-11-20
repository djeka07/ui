import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const actionButton = recipe({
  base: {
    transition: 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out',
    selectors: {
      '&&&': {
        fontWeight: 'normal',
        border: `2px dashed var(--text-color)`,
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
        selectors: {
          '&&&': {
            backgroundColor: 'transparent',
          },
        },
      },
      light: {
        selectors: {
          '&&&': {
            backgroundColor: 'color-mix(in srgb, var(--background-color), white 50%)',
          },
        },
      },
      main: {
        selectors: {
          '&&&': { backgroundColor: 'var(--background-color)' },
        },
      },
      dark: {
        selectors: {
          '&&&': { backgroundColor: 'color-mix(in srgb, var(--background-color), black 50%)' },
        },
      },
    },
  },
});

export const typography = recipe({
  base: { display: 'block' },
  variants: {
    color: {
      transparent: {},
      light: {},
      main: {},
      dark: {},
    },
    variant: {
      heading: {},
      body: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        color: 'light',
        variant: 'heading',
      },
      style: {
        selectors: {
          '&&&': {
            color: 'color-mix(in srgb, var(--heading-text-color), black 100%)',
          },
        },
      },
    },
    {
      variants: {
        color: 'light',
        variant: 'body',
      },
      style: {
        selectors: {
          '&&&': {
            color: 'color-mix(in srgb, var(--body-text-color), black 100%)',
          },
        },
      },
    },
    {
      variants: {
        color: 'main',
        variant: 'heading',
      },
      style: {
        selectors: {
          '&&&': {
            color: 'var(--heading-text-color)',
          },
        },
      },
    },
    {
      variants: {
        color: 'main',
        variant: 'body',
      },
      style: {
        selectors: {
          '&&&': {
            color: 'var(--body-text-color)',
          },
        },
      },
    },
  ],
});

export const root = style({
  flexDirection: 'column',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 4,
});

export type ActionButtonStyleVariant = RecipeVariants<typeof actionButton>;
