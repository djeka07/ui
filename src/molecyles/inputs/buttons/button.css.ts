import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import media from '../../../styles/media.css';

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
      [media.small.up]: {
        width: 'auto',
      },
    },
  },
  variants: {
    color: {
      light: {
        backgroundColor: 'var(--light-primary-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--light-primary-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--main-primary-color)',
          },
        },
      },
      main: {
        backgroundColor: 'var(--main-primary-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--main-primary-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--dark-primary-color)',
            opacity: 0.9,
          },
        },
      },
      dark: {
        backgroundColor: 'var(--dark-primary-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--dark-primary-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--dark-primary-color)',
            opacity: 0.9,
          },
        },
      },
      'error-light': {
        backgroundColor: 'var(--light-error-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--light-error-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--light-error-color)',
            opacity: 0.9,
          },
        },
      },
      error: {
        backgroundColor: 'var(--main-error-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--main-error-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--dark-error-color)',
            opacity: 0.9,
          },
        },
      },
      'error-dark': {
        backgroundColor: 'var(--dark-error-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--dark-error-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--dark-error-color)',
            opacity: 0.9,
          },
        },
      },
      'success-light': {
        backgroundColor: 'var(--light-success-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--light-success-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--main-success-color)',
            opacity: 0.9,
          },
        },
      },
      success: {
        backgroundColor: 'var(--main-success-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--main-success-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--dark-success-color)',
            opacity: 0.9,
          },
        },
      },
      'success-dark': {
        backgroundColor: 'var(--dark-success-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--dark-success-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--main-success-color)',
            opacity: 0.9,
          },
        },
      },
      'warning-light': {
        backgroundColor: 'var(--light-warning-color)',
        '&:focus': {
          boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--light-warning-color)`,
        },
        '&:hover': {
          backgroundColor: 'var(--main-warning-color)',
          opacity: 0.9,
        },
      },
      warning: {
        backgroundColor: 'var(--main-warning-color)',
        '&:focus': {
          boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--main-warning-color)`,
        },
        '&:hover': {
          backgroundColor: 'var(--dark-warning-color)',
          opacity: 0.9,
        },
      },
      'warning-dark': {
        backgroundColor: 'var(--dark-warning-color)',
        '&:focus': {
          boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--dark-warning-color)`,
        },
        '&:hover': {
          backgroundColor: 'var(--dark-warning-color)',
          opacity: 0.9,
        },
      },
      'info-light': {
        backgroundColor: 'var(--light-info-color)',
        '&:focus': {
          boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--light-info-color)`,
        },
        '&:hover': {
          backgroundColor: 'var(--main-info-color)',
          opacity: 0.9,
        },
      },
      info: {
        backgroundColor: 'var(--main-info-color)',
        '&:focus': {
          boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--main-info-color)`,
        },
        '&:hover': {
          backgroundColor: 'var(--dark-info-color)',
          opacity: 0.9,
        },
      },
      'info-dark': {
        backgroundColor: 'var(--dark-info-color)',
        '&:focus': {
          boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--dark-info-color)`,
        },
        '&:hover': {
          backgroundColor: 'var(--main-info-color)',
          opacity: 0.9,
        },
      },
      outlined: {
        backgroundColor: 'transparent',
        border: `2px solid var(--main-text-color)`,
        color: 'var(--main-text-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--main-primary-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--dark-primary-color)',
            color: 'var(--white-common-color)',
          },
        },
      },
      transparent: {
        backgroundColor: 'transparent',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--main-primary-color)`,
          },
          '&:hover': {
            backgroundColor: 'rgba(50, 50, 50, 0.5)',
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
        [media.base]: {
          [media.small.up]: {
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
          [media.small.up]: {
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
        outlined: true,
        color: 'light',
      },
      style: {
        backgroundColor: 'transparent',
        border: `2px solid var(--light-primary-color)`,
        color: 'var(--light-text-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--light-primary-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--light-primary-color)',
            color: 'var(--white-common-color)',
          },
        },
      },
    },
    {
      variants: {
        outlined: true,
        color: 'main',
      },
      style: {
        backgroundColor: 'transparent',
        border: `2px solid var(--main-primary-color)`,
        color: 'var(--main-text-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--main-primary-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--main-primary-color)',
            color: 'var(--white-common-color)',
          },
        },
      },
    },
    {
      variants: {
        outlined: true,
        color: 'error-light',
      },
      style: {
        backgroundColor: 'transparent',
        border: `2px solid var(--light-error-color)`,
        color: 'var(--light-error-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--light-error-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--light-error-color)',
            color: 'var(--600-grey-color)',
          },
        },
      },
    },
    {
      variants: {
        outlined: true,
        color: 'error',
      },
      style: {
        backgroundColor: 'transparent',
        border: `2px solid var(--main-error-color)`,
        color: 'var(--main-error-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--main-error-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--main-error-color)',
            color: 'var(--white-common-color)',
          },
        },
      },
    },
    {
      variants: {
        outlined: true,
        color: 'error-dark',
      },
      style: {
        backgroundColor: 'transparent',
        border: `2px solid var(--dark-error-color)`,
        color: 'var(--dark-error-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--dark-error-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--dark-error-color)',
            color: 'var(--white-common-color)',
          },
        },
      },
    },
    {
      variants: {
        outlined: true,
        color: 'dark',
      },
      style: {
        backgroundColor: 'transparent',
        border: `2px solid var(--dark-primary-color)`,
        color: 'var(--dark-text-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--dark-primary-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--dark-primary-color)',
            color: 'var(--white-common-color)',
          },
        },
      },
    },
    {
      variants: {
        color: 'light',
        disabled: true,
      },
      style: {
        selectors: {
          '&:hover': {
            backgroundColor: 'var(--light-primary-color)',
          },
        },
      },
    },
    {
      variants: {
        color: 'main',
        disabled: true,
      },
      style: {
        selectors: {
          '&:hover': {
            backgroundColor: 'var(--main-primary-color)',
          },
        },
      },
    },
    {
      variants: {
        color: 'dark',
        disabled: true,
      },
      style: {
        selectors: {
          '&:hover': {
            backgroundColor: 'var(--dark-primary-color)',
          },
        },
      },
    },
    {
      variants: {
        color: 'error',
        disabled: true,
      },
      style: {
        selectors: {
          '&:hover': {
            backgroundColor: 'var(--main-error-color)',
          },
        },
      },
    },
    {
      variants: {
        color: 'success',
        disabled: true,
      },
      style: {
        selectors: {
          '&:hover': {
            backgroundColor: 'var(--main-success-color)',
          },
        },
      },
    },
    {
      variants: {
        color: 'info',
        disabled: true,
      },
      style: {
        selectors: {
          '&:hover': {
            backgroundColor: 'var(--main-info-color)',
          },
        },
      },
    },
    {
      variants: {
        color: 'warning',
        disabled: true,
      },
      style: {
        selectors: {
          '&:hover': {
            backgroundColor: 'var(--main-warning-color)',
          },
        },
      },
    },
  ],
  defaultVariants: {
    round: undefined,
    color: 'main',
    fullWidthMobile: true,
    disabled: undefined,
  },
});

export const childrenRecipe = recipe({
  base: {
    width: '100%',
    outline: 'none',
    display: 'flex',
  },
  variants: {
    outlined: { true: {} },
    color: {
      light: {},
      main: {},
      dark: {},
      'error-light': {},
      error: {},
      'error-dark': {},
      transparent: {},
      'success-light': {},
      success: {},
      'success-dark': {},
      'info-light': {},
      info: {},
      'info-dark': {},
      'warning-light': {},
      warning: {},
      'warning-dark': {},
    },
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

export type ButtonVariants = RecipeVariants<typeof button>;
export type ChildrenVariants = RecipeVariants<typeof childrenRecipe>;
