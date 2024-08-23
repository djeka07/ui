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
      [media.small.up]: {
        width: 'auto',
      },
    },
  },
  variants: {
    primary: {
      true: {
        backgroundColor: 'var(--main-primary-color)',
        border: '2px solid var(--main-primary-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--main-primary-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--dark-primary-color)',
            border: '2px solid var(--dark-primary-color)',
            opacity: 0.9,
          },
        },
      },
    },
    success: {
      true: {
        backgroundColor: 'var(--main-success-color)',
        border: '2px solid var(--main-success-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--main-success-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--dark-success-color)',
            border: '2px solid var(--dark-success-color)',
            opacity: 0.9,
          },
        },
      },
    },
    error: {
      true: {
        backgroundColor: 'var(--main-error-color)',
        border: '2px solid var(--main-error-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--main-error-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--dark-error-color)',
            border: '2px solid var(--dark-error-color)',
            opacity: 0.9,
          },
        },
      },
    },
    warning: {
      true: {
        backgroundColor: 'var(--main-warning-color)',
        border: '2px solid var(--main-warning-color)',
        color: 'var(--black-common-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--main-warning-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--dark-warning-color)',
            border: '2px solid var(--dark-warning-color)',
            color: 'var(--white-common-color)',
            opacity: 0.9,
          },
        },
      },
    },
    info: {
      true: {
        backgroundColor: 'var(--main-info-color)',
        color: 'var(--black-common-color)',
        border: '2px solid var(--main-info-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--main-info-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--dark-info-color)',
            border: '2px solid var(--dark-info-color)',
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
        color: 'var(--main-input-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--main-info-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--100-grey-color)',
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
        primary: true,
        outlined: true,
      },
      style: {
        border: '2px solid var(--main-primary-color)',
        backgroundColor: 'transparent',
        color: 'var(--main-primary-color)',
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
        error: true,
        outlined: true,
      },
      style: {
        border: '2px solid var(--main-error-color)',
        backgroundColor: 'transparent',
        color: 'var(--main-error-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--main-error-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--main-error-color)',
            borderColor: 'var(--main-error-color)',
            color: 'var(--white-common-color)',
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
        border: '2px solid var(--main-success-color)',
        backgroundColor: 'transparent',
        color: 'var(--main-success-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--main-success-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--main-success-color)',
            borderColor: 'var(--main-success-color)',
            color: 'var(--white-common-color)',
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
        border: '2px solid var(--main-warning-color)',
        backgroundColor: 'transparent',
        color: 'var(--main-warning-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--main-warning-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--main-warning-color)',
            borderColor: 'var(--main-warning-color)',
            color: 'var(--white-common-color)',
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
        border: '2px solid var(--main-info-color)',
        backgroundColor: 'transparent',
        color: 'var(--main-info-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--main-info-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--main-info-color)',
            borderColor: 'var(--main-info-color)',
            color: 'var(--white-common-color)',
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
        border: '2px solid var(--main-info-color)',
        backgroundColor: 'transparent',
        color: 'var(--main-info-color)',
        selectors: {
          '&:focus': {
            boxShadow: `0 0 0 1px #ffffff, 0 0 0px 3px var(--main-info-color)`,
          },
          '&:hover': {
            backgroundColor: 'var(--main-info-color)',
            borderColor: 'var(--main-info-color)',
            color: 'var(--white-common-color)',
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
            backgroundColor: 'var(--main-primary-color)',
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
        error: true,
        disabled: true,
      },
      style: {
        selectors: {
          '&:hover': {
            backgroundColor: 'var(--main-error-color)',
            borderColor: 'var(--main-error-color)',
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
            borderColor: 'var(--main-error-color)',
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
            backgroundColor: 'var(--main-success-color)',
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
            backgroundColor: 'var(--main-info-color)',
            borderColor: 'var(--main-info-color)',
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
            backgroundColor: 'var(--main-warning-color)',
            borderColor: 'var(--main-warning-color)',
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
            borderColor: 'var(--main-warning-color)',
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
    primary: { true: {} },
    error: { true: {} },
    success: { true: {} },
    warning: {
      true: {
        borderColor: 'var(--black-common-color) transparent transparent transparent',
      },
    },
    info: {
      true: {
        borderColor: 'var(--black-common-color) transparent transparent transparent',
      },
    },
    transparent: {
      true: {
        borderColor: 'var(--700-grey-color) transparent transparent transparent',
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
        borderColor: 'var(--main-primary-color) transparent transparent transparent',
      },
    },
    {
      variants: {
        error: true,
        outlined: true,
      },
      style: {
        borderColor: 'var(--main-error-color) transparent transparent transparent',
      },
    },
    {
      variants: {
        success: true,
        outlined: true,
      },
      style: {
        borderColor: 'var(--main-success-color) transparent transparent transparent',
      },
    },
    {
      variants: {
        warning: true,
        outlined: true,
      },
      style: {
        borderColor: 'var(--main-warning-color) transparent transparent transparent',
      },
    },
    {
      variants: {
        info: true,
        outlined: true,
      },
      style: {
        borderColor: 'var(--main-info-color) transparent transparent transparent',
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
