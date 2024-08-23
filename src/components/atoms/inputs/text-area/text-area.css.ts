import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import media from '../../../../styles/media.css';

export const wrapper = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
  variants: {
    width: {
      full: { width: '100%' },
    },
  },
  defaultVariants: { width: undefined },
});

export type WrapperVariants = RecipeVariants<typeof wrapper>;

export const label = style({
  color: 'rgb(97, 97, 97)',
  fontSize: '0.875rem',
  marginBottom: 4,
});

export const error = style({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'rgb(248, 215, 218)',
  color: 'var(--dark-error-color)',
  overflow: 'hidden',
  fontSize: '0.875rem',
});

export const errorSvg = style({
  fill: 'var(--dark-error-color)',
  marginRight: 5,
});

export const input = recipe({
  base: {
    cursor: 'auto',
    position: 'relative',
    width: '100%',
    padding: '12px 12px',
    fontFamily: 'var(--main-font-family)',
    color: 'rgb(66, 66, 66)',
    borderRadius: 3,
    border: 0,
    transition: '0.3s height ease-in-out',
    resize: 'none',
    minHeight: 43,
    overflow: 'auto',
    fontSize: 16,
    boxShadow: 'rgb(0 0 0 / 10%) 0px 1px 5px 0px, rgb(224 224 224) 0px 0px 0px 2px inset',
    appearance: 'none',
    outline: 'none',
    [media.base]: {
      [media.small.up]: {
        fontSize: 14,
      },
    },
  },
  variants: {
    radius: {
      none: { borderRadius: 0 },
      small: { borderRadius: 'var(--small-border-radius)' },
      medium: { borderRadius: 'var(--medium-border-radius)' },
      large: { borderRadius: 'var(--large-border-radius)'},
      xlarge: { borderRadius: 'var(--xlarge-border-radius)'},
      xxlarge: { borderRadius: 'var(--xxlarge-border-radius)' },
    },
    boxShadow: {
      true: {
        ':focus': {
          boxShadow: `rgb(0 0 0 / 10%) 0px 1px 5px 0px, var(--main-primary-color) 0px 0px 0px 2px inset`,
        },
      },
    },
    errored: {
      true: {
        border: '2px solid var(--dark-error-color)',
      },
    },
  },
  defaultVariants: {
    radius: 'small',
    boxShadow: true,
  },
});

export type InputVariants = RecipeVariants<typeof input>;
