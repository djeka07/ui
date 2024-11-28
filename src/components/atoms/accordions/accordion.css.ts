import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { media } from '../../../styles';

export const root = recipe({
  base: {
    display: 'grid',
  },
  variants: {
    background: {
      light: {
        backgroundColor: 'var(--white-common-color)',
      },
      main: {
        backgroundColor: 'var(--200-grey-color)',
      },
      dark: {
        backgroundColor: 'var(--black-common-color)',
      },
    },
  },
});

export type Variants = RecipeVariants<typeof root>;

export const content = style({
  padding: 8,
  [media.base]: {
    [media.sm.up.query]: {
      padding: 16,
    },
  },
});

export const textWrapper = style({
  overflow: 'hidden',
});

export const text = style({
  lineHeight: '150%',
  marginBottom: 20,
  fontFamily: 'var(--base-font-family)',
});

export const list = style({
  marginBlockStart: 0,
  marginBlockEnd: 0,
  paddingInlineStart: 0,
});

export const headTextWrapper = style({
  padding: 8,
});

export const item = recipe({
  base: {
    listStyle: 'none',
    margin: '8px 0px',
  },
  variants: {
    background: {
      light: {},
      main: {},
      dark: {},
    },
    layout: { none: {}, background: {}, 'border-bottom': {} },
    active: { true: {} },
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
  compoundVariants: [
    {
      variants: {
        background: 'light',
        layout: 'border-bottom',
      },
      style: {
        borderBottom: '1px solid var(--400-grey-color)',
        borderRadius: 0,
      },
    },
    {
      variants: {
        background: 'light',
        layout: 'background',
        active: true,
      },
      style: {
        backgroundColor: 'var(--100-grey-color)',
      },
    },
    {
      variants: {
        background: 'main',
        layout: 'border-bottom',
      },
      style: {
        borderBottom: '1px solid var(--400-grey-color)',
        borderRadius: 0,
      },
    },
    {
      variants: {
        background: 'main',
        layout: 'background',
        active: true,
      },
      style: {
        backgroundColor: 'var(--300-grey-color)',
      },
    },
    {
      variants: {
        background: 'dark',
        layout: 'border-bottom',
      },
      style: {
        borderBottom: '1px solid var(--400-grey-color)',
        borderRadius: 0,
      },
    },
    {
      variants: {
        background: 'dark',
        layout: 'background',
        active: true,
      },
      style: {
        backgroundColor: 'var(--900-grey-color)',
      },
    },
  ],
});

export const textRecipe = recipe({
  variants: {
    background: {
      light: {
        color: 'var(--700-grey-color)',
        fill: 'var(--700-grey-color)',
      },
      main: {
        color: 'var(--900-grey-color)',
        fill: 'var(--900-grey-color)',
      },
      dark: {
        color: 'var(--white-common-color)',
        fill: 'var(--white-common-color)',
      },
    },
  },
});

export const button = recipe({
  base: {
    border: 'none',
    padding: 0,
    textAlign: 'left',
    display: 'grid',
    width: '100%',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  variants: {
    shouldAutoChange: {
      true: {
        gridTemplateColumns: '3px 1fr',
      },
      false: {
        gridTemplateColumns: '1fr',
      },
    },
  },
});

export const header = style({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  padding: '8px 0px',
});

export const progressWrapper = style({
  position: 'relative',
  height: '100%',
  borderRadius: 3,
  overflow: 'hidden',
});

export const progressBar = style({
  position: 'absolute',
  backgroundColor: 'var(--400-grey-color)',
  height: '100%',
  width: '100%',
});
export const progress = style({
  backgroundColor: 'var(--button-primary-bg-color)',
  width: '100%',
  position: 'absolute',
});
