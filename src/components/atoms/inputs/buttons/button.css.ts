import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import media from '../../../../styles/media.css';

export const button = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: 'var(--normal-font-size)',
    padding: 0,
    fontWeight: 'var(--bold-font-weight)',
    fontFamily: 'var(--base-font-family)',
    transition: '0.3s all ease-in-out',
    outline: 'none',
    border: 0,
    color: 'rgb(255, 255, 255)',
    borderRadius: 'var(--small-border-radius)',
    backgroundColor: 'var(--primary-main-color)',
    width: '100%',
    [media.base]: {
      [media.sm.up]: {
        width: 'auto',
      },
    },
  },
  variants: {
    primary: {
      true: {
        backgroundColor: 'var(--button-primary-bg-color)',
        color: 'var(--button-primary-fg-color)',
        border: '2px solid var(--button-primary-bg-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--button-primary-bg-color)`,
          },
          '&:hover': {
            backgroundColor: 'color-mix(in srgb, var(--button-primary-bg-color), black 25%)',
            border: '2px solid color-mix(in srgb, var(--button-primary-bg-color), black 25%)',
            opacity: 0.9,
          },
        },
      },
    },
    secondary: {
      true: {
        backgroundColor: 'var(--button-secondary-bg-color)',
        color: 'var(--button-secondary-fg-color)',
        border: '2px solid var(--button-secondary-bg-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--button-secondary-bg-color)`,
          },
          '&:hover': {
            backgroundColor: 'color-mix(in srgb, var(--button-secondary-bg-color), black 25%)',
            border: '2px solid color-mix(in srgb, var(--button-secondary-bg-color), black 25%)',
            opacity: 0.9,
          },
        },
      },
    },
    success: {
      true: {
        backgroundColor: 'var(--button-success-bg-color)',
        color: 'var(--button-success-fg-color)',
        border: '2px solid var(--button-success-bg-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--button-success-bg-color)`,
          },
          '&:hover': {
            backgroundColor: 'color-mix(in srgb, var(--button-success-bg-color), black 25%)',
            border: '2px solid color-mix(in srgb, var(--button-success-bg-color), black 25%)',
            opacity: 0.9,
          },
        },
      },
    },
    error: {
      true: {
        backgroundColor: 'var(--button-error-bg-color)',
        color: 'var(--button-success-fg-color)',
        border: '2px solid var(--button-error-bg-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--button-error-bg-color)`,
          },
          '&:hover': {
            backgroundColor: 'color-mix(in srgb, var(--button-error-bg-color), black 25%)',
            border: '2px solid color-mix(in srgb, var(--button-error-bg-color), black 25%)',
            opacity: 0.9,
          },
        },
      },
    },
    warning: {
      true: {
        backgroundColor: 'var(--button-warning-bg-color)',
        color: 'var(--button-warning-fg-color)',
        border: '2px solid var(--button-warning-bg-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--button-warning-bg-color)`,
          },
          '&:hover': {
            backgroundColor: 'color-mix(in srgb, var(--button-warning-bg-color), black 25%)',
            border: '2px solid color-mix(in srgb, var(--button-warning-bg-color), black 25%)',
            opacity: 0.9,
          },
        },
      },
    },
    info: {
      true: {
        backgroundColor: 'var(--button-info-bg-color)',
        color: 'var(--button-info-fg-color)',
        border: '2px solid var(--button-info-bg-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--button-info-bg-color)`,
          },
          '&:hover': {
            backgroundColor: 'color-mix(in srgb, var(--button-info-bg-color), black 25%)',
            border: '2px solid color-mix(in srgb, var(--button-info-bg-color), black 25%)',
            color: 'var(--white-common-color)',
            opacity: 0.9,
          },
        },
      },
    },
    transparent: {
      true: {
        backgroundColor: 'transparent',
        border: '2px solid transparent',
        color: 'var(--button-transparent-fg-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px transparent, 0 0 0px 2px var(--button-transparent-fg-color)`,
          },
          '&:hover': {
            backgroundColor: 'color-mix(in srgb, transparent, black 10%)',
            opacity: 0.9,
          },
        },
      },
    },
    outlined: {
      true: {},
    },
    fullWidthMobile: {
      false: {
        width: 'auto',
      },
      true: {
        width: '100%',
      },
    },
    round: {
      true: {
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        overflow: 'hidden',
        [media.base]: {
          [media.sm.up]: {
            width: '40px',
            height: '40px',
          },
        },
      },
    },
    wide: {
      true: {
        width: '100%',
        [media.base]: {
          [media.sm.up]: {
            width: '100%',
          },
        },
      },
    },
    disabled: {
      true: {
        filter: 'opacity(0.5)',
        cursor: 'not-allowed',
        selectors: {
          '&:focus': {
            boxShadow: 'none',
          },
        },
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        primary: true,
        outlined: true,
      },
      style: {
        border: '2px solid var(--button-primary-bg-color)',
        backgroundColor: 'transparent',
        color: 'var(--button-primary-bg-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--button-primary-bg-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--button-primary-bg-color)',
            borderColor: 'var(--button-primary-bg-color)',
            color: 'var(--button-primary-fg-color)',
          },
        },
      },
    },
    {
      variants: {
        secondary: true,
        outlined: true,
      },
      style: {
        border: '2px solid var(--button-secondary-bg-color)',
        backgroundColor: 'transparent',
        color: 'var(--button-secondary-bg-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--button-secondary-bg-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--button-secondary-bg-color)',
            borderColor: 'var(--button-secondary-bg-color)',
            color: 'var(--button-secondary-fg-color)',
          },
        },
      },
    },
    {
      variants: {
        error: true,
        outlined: true,
      },
      style: {
        border: '2px solid var(--button-error-bg-color)',
        backgroundColor: 'transparent',
        color: 'var(--button-error-bg-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--button-error-bg-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--button-error-bg-color)',
            borderColor: 'var(--button-error-bg-color)',
            color: 'var(--button-error-fg-color)',
          },
        },
      },
    },
    {
      variants: {
        success: true,
        outlined: true,
      },
      style: {
        border: '2px solid color-mix(in srgb, var(--button-success-bg-color), black 25%)',
        backgroundColor: 'transparent',
        color: 'color-mix(in srgb, var(--button-success-bg-color), black 25%)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--button-success-bg-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--button-success-bg-color)',
            borderColor: 'var(--button-success-bg-color)',
            color: 'var(--button-success-fg-color)',
          },
        },
      },
    },
    {
      variants: {
        warning: true,
        outlined: true,
      },
      style: {
        border: '2px solid color-mix(in srgb, var(--button-warning-bg-color), black 25%)',
        backgroundColor: 'transparent',
        color: 'color-mix(in srgb, var(--button-warning-bg-color), black 25%)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--button-warning-bg-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--button-warning-bg-color)',
            borderColor: 'var(--button-warning-bg-color)',
            color: 'var(--button-warning-fg-color)',
          },
        },
      },
    },
    {
      variants: {
        info: true,
        outlined: true,
      },
      style: {
        border: '2px solid color-mix(in srgb, var(--button-info-bg-color), black 25%)',
        backgroundColor: 'transparent',
        color: 'color-mix(in srgb, var(--button-info-bg-color), black 25%)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--button-info-bg-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--button-info-bg-color)',
            borderColor: 'var(--button-info-bg-color)',
            color: 'var(--button-info-fg-color)',
          },
        },
      },
    },
    {
      variants: {
        primary: true,
        disabled: true,
      },
      style: {
        selectors: {
          '&:hover': {
            backgroundColor: 'var(--button-primary-bg-color)',
            borderColor: 'var(--button-primary-bg-color)',
            opacity: 1,
          },
        },
      },
    },
    {
      variants: {
        primary: true,
        disabled: true,
        outlined: true,
      },
      style: {
        selectors: {
          '&:hover': {
            backgroundColor: 'initial',
            opacity: 1,
          },
        },
      },
    },
    {
      variants: {
        secondary: true,
        disabled: true,
      },
      style: {
        selectors: {
          '&:hover': {
            backgroundColor: 'var(--button-secondary-bg-color)',
            borderColor: 'var(--button-secondary-bg-color)',
            opacity: 1,
          },
        },
      },
    },
    {
      variants: {
        secondary: true,
        disabled: true,
        outlined: true,
      },
      style: {
        selectors: {
          '&:hover': {
            backgroundColor: 'initial',
            opacity: 1,
          },
        },
      },
    },
    {
      variants: {
        error: true,
        disabled: true,
      },
      style: {
        selectors: {
          '&:hover': {
            backgroundColor: 'var(--button-error-bg-color)',
            borderColor: 'var(--button-error-bg-color)',
            opacity: 1,
          },
        },
      },
    },
    {
      variants: {
        error: true,
        disabled: true,
        outlined: true,
      },
      style: {
        selectors: {
          '&:hover': {
            backgroundColor: 'initial',
            borderColor: 'var(--button-error-bg-color)',
            opacity: 1,
          },
        },
      },
    },
    {
      variants: {
        success: true,
        disabled: true,
      },
      style: {
        selectors: {
          '&:hover': {
            backgroundColor: 'var(--button-success-bg-color)',
            borderColor: 'var(--button-success-bg-color)',
            opacity: 1,
          },
        },
      },
    },
    {
      variants: {
        success: true,
        disabled: true,
        outlined: true,
      },
      style: {
        selectors: {
          '&:hover': {
            backgroundColor: 'initial',
            borderColor: 'color-mix(in srgb, var(--button-success-bg-color), black 25%)',
            opacity: 1,
          },
        },
      },
    },
    {
      variants: {
        transparent: true,
        disabled: true,
      },
      style: {
        selectors: {
          '&:hover': {
            backgroundColor: 'initial',
            opacity: 1,
          },
        },
      },
    },
    {
      variants: {
        info: true,
        disabled: true,
      },
      style: {
        selectors: {
          '&:hover': {
            backgroundColor: 'var(--button-info-bg-color)',
            borderColor: 'var(--button-info-bg-color)',
            opacity: 1,
          },
        },
      },
    },
    {
      variants: {
        info: true,
        disabled: true,
        outlined: true,
      },
      style: {
        selectors: {
          '&:hover': {
            backgroundColor: 'initial',
            borderColor: 'color-mix(in srgb, var(--button-info-bg-color), black 25%)',
            opacity: 1,
          },
        },
      },
    },
    {
      variants: {
        warning: true,
        disabled: true,
      },
      style: {
        selectors: {
          '&:hover': {
            backgroundColor: 'var(--button-warning-bg-color)',
            borderColor: 'var(--button-warning-bg-color)',
            opacity: 1,
          },
        },
      },
    },
    {
      variants: {
        warning: true,
        disabled: true,
        outlined: true,
      },
      style: {
        selectors: {
          '&:hover': {
            backgroundColor: 'inherit',
            borderColor: 'color-mix(in srgb, var(--button-warning-bg-color), black 25%)',
            opacity: 1,
          },
        },
      },
    },
  ],
  defaultVariants: {
    round: undefined,
    primary: true,
    fullWidthMobile: true,
    disabled: undefined,
  },
});

export const spinner = recipe({
  variants: {
    primary: { true: { borderColor: 'var(--button-primary-fg-color) transparent transparent transparent' } },
    secondary: { true: { borderColor: 'var(--button-secondary-fg-color) transparent transparent transparent' } },
    error: { true: { borderColor: 'var(--button-error-fg-color) transparent transparent transparent' } },
    success: { true: { borderColor: 'var(--button-success-fg-color) transparent transparent transparent' } },
    warning: {
      true: {
        borderColor: 'var(--button-warning-fg-color) transparent transparent transparent',
      },
    },
    info: {
      true: {
        borderColor: 'var(--button-info-fg-color) transparent transparent transparent',
      },
    },
    transparent: {
      true: {
        borderColor: 'var(--button-transparent-fg-color) transparent transparent transparent',
      },
    },
    outlined: { true: {} },
  },
  compoundVariants: [
    {
      variants: {
        primary: true,
        outlined: true,
      },
      style: {
        borderColor: 'var(--button-primary-bg-color) transparent transparent transparent',
      },
    },
    {
      variants: {
        secondary: true,
        outlined: true,
      },
      style: {
        borderColor: 'var(--button-secondary-bg-color) transparent transparent transparent',
      },
    },
    {
      variants: {
        error: true,
        outlined: true,
      },
      style: {
        borderColor: 'var(--button-error-bg-color) transparent transparent transparent',
      },
    },
    {
      variants: {
        success: true,
        outlined: true,
      },
      style: {
        borderColor:
          'color-mix(in srgb, var(--button-success-bg-color), black 25%) transparent transparent transparent',
      },
    },
    {
      variants: {
        warning: true,
        outlined: true,
      },
      style: {
        borderColor:
          'color-mix(in srgb, var(--button-warning-bg-color), black 25%) transparent transparent transparent',
      },
    },
    {
      variants: {
        info: true,
        outlined: true,
      },
      style: {
        borderColor: 'color-mix(in srgb,var(--button-info-bg-color), black 25%) transparent transparent transparent',
      },
    },
  ],
});

export const childrenRecipe = recipe({
  base: {
    width: '100%',
    outline: 'none',
    display: 'flex',
  },
  variants: {
    outlined: { true: { borderColor: 'var(--light-text-color) transparent transparent transparent' } },
    primary: { true: { borderColor: 'var(--common-white-color) transparent transparent transparent' } },
    secondary: { true: { borderColor: 'var(--common-white-color) transparent transparent transparent' } },
    success: { true: { borderColor: 'var(--common-white-color) transparent transparent transparent' } },
    error: { true: { borderColor: 'var(--common-white-color) transparent transparent transparent' } },
    warning: { true: { borderColor: 'var(--common-white-color) transparent transparent transparent' } },
    info: { true: { borderColor: 'var(--common-white-color) transparent transparent transparent' } },
    transparent: { true: {} },
    size: {
      xsmall: { padding: '2px 4px', fontSize: 'var(--xsmall-font-size)' },
      small: { padding: '6.4px 16px', fontSize: 'var(--small-font-size)' },
      normal: { padding: '9.4px 16px' },
      large: { padding: '13.4px 24px' },
    },
    direction: {
      row: {
        flexDirection: 'row',
      },
      'row-reverse': {
        flexDirection: 'row-reverse',
      },
      column: {
        flexDirection: 'column',
      },
      'column-reverse': {
        flexDirection: 'column-reverse',
      },
    },
    align: {
      'flex-start': {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
    },
    justify: {
      'flex-start': {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        outlined: true,
        size: 'small',
      },
      style: {
        padding: '4.4px 15px',
      },
    },
    {
      variants: {
        outlined: true,
        size: 'normal',
      },
      style: {
        padding: '7.4px 15px',
      },
    },
    {
      variants: {
        outlined: true,
        size: 'large',
      },
      style: {
        padding: '11.4px 23px',
      },
    },
  ],
  defaultVariants: {
    size: undefined,
    outlined: undefined,
  },
});

export type ButtonVariants = NonNullable<RecipeVariants<typeof button>>;
export type ChildrenVariants = RecipeVariants<typeof childrenRecipe>;
