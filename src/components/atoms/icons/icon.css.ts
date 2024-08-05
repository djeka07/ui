import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { SizeKeys } from '~/styles/typography';

export const wrapper = recipe({
  variants: {
    padding: {
      none: { padding: 0 },
      small: {
        padding: 4,
      },
      medium: {
        padding: 8,
      },
      large: {
        padding: 12,
      },
      xlarge: {
        padding: 16,
      },
    },
    boxShadow: {
      true: {
        boxShadow: 'var(--main-box-shadow)',
      },
    },
    background: {
      light: {
        backgroundColor: 'var(--light-background-color)',
      },
      main: {
        backgroundColor: 'var(--main-background-color)',
      },
      dark: {
        backgroundColor: 'var(--dark-background-color)',
      },
    },
    radius: {
      none: {
        borderRadius: '0px',
      },
      small: {
        borderRadius: 'var(--small-border-radius)',
      },
      medium: {
        borderRadius: 'var(--medium-border-radius)',
      },
      large: {
        borderRadius: 'var(--large-border-radius)',
      },
      xlarge: {
        borderRadius: 'var(--xlarge-border-radius)',
      },
      xxlarge: {
        borderRadius: 'var(--xxlarge-border-radius)',
      },
      round: {
        borderRadius: 'var(--round-border-radius)',
      },
    },
  },
});

export type SizeStyleVariant = { size?: SizeKeys; width?: never; height?: never };
export type WidthHeightStyleVariant = { width: number; height: number; size?: never };

export const svg = recipe({
  base: {
    display: 'block',
    width: 20,
    height: 20,
  },
  variants: {
    size: {
      xxxsmall: { width: 8, height: 8 },
      xxsmall: { width: 10, height: 10 },
      xsmall: { width: 12, height: 12 },
      small: { width: 14, height: 14 },
      normal: { width: 16, height: 16 },
      medium: { width: 18, height: 18 },
      large: { width: 20, height: 20 },
      xlarge: { width: 25, height: 25 },
      xxlarge: { width: 30, height: 30 },
      xxxlarge: { width: 35, height: 35 },
    },
    color: {
      menu: { fill: '#afafaf' },
      input: { fill: 'var(--main-input-color)' },
      white: { fill: 'var(--white-common-color)' },
      grey100: { fill: 'var(--100-grey-color)' },
      grey200: { fill: 'var(--200-grey-color)' },
      grey300: { fill: 'var(--300-grey-color)' },
      grey400: { fill: 'var(--400-grey-color)' },
      grey500: { fill: 'var(--500-grey-color)' },
      grey600: { fill: 'var(--600-grey-color)' },
      grey700: { fill: 'var(--700-grey-color)' },
      grey800: { fill: 'var(--800-grey-color)' },
      grey900: { fill: 'var(--900-grey-color)' },
      black: { fill: 'var(--common-black-color)' },
      heading: { fill: 'var(--main-heading-color)' },
      'success-light': { fill: 'var(--light-success-color)' },
      success: { fill: 'var(--main-success-color)' },
      'success-dark': { fill: 'var(--dark-success-color)' },
      'error-light': { fill: 'var(--light-error-color)' },
      error: { fill: 'var(--main-error-color)' },
      'error-dark': { fill: 'var(--dark-error-color)' },
    },
    cursor: {
      pointer: { cursor: 'pointer' },
    },
  },
  defaultVariants: {
    size: 'normal',
    color: undefined,
  },
});

export type WrapperStyleVariants = RecipeVariants<typeof wrapper>;
export type SvgStyleVariants = RecipeVariants<typeof svg>;
