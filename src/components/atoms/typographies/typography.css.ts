import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import media from '../../../styles/media.css';

export const typography = recipe({
  base: {
    fontFamily: 'Campton, arial',
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },

  variants: {
    color: {
      grey100: { color: 'var(--100-grey-color)' },
      grey200: { color: 'var(--200-grey-color)' },
      grey300: { color: 'var(--300-grey-color)' },
      grey400: { color: 'var(--400-grey-color)' },
      grey500: { color: 'var(--500-grey-color)' },
      grey600: { color: 'var(--600-grey-color)' },
      grey700: { color: 'var(--700-grey-color)' },
      grey800: { color: 'var(--800-grey-color)' },
      grey900: { color: 'var(--900-grey-color)' },
      'success-light': { color: 'var(--light-success-color)' },
      success: { color: 'var(--main-success-color)' },
      'success-dark': { color: 'var(--dark-success-color)' },
      menu: { color: '#afafaf' },
      'heading-light': { color: 'var(--light-heading-color)' },
      heading: { color: 'var(--heading-color)' },
      'heading-dark': { color: 'var(--dark-heading-color)' },
      'error-light': { color: 'var(--light-error-color)' },
      error: { color: 'var(--main-error-color)' },
      'error-dark': { color: 'var(--dark-error-color)' },
      'link-light': { color: 'var(--light-link-color)' },
      link: { color: 'var(--main-link-color)' },
      'link-dark': { color: 'var(--main-link-color)' },
      'text-light': { color: 'var(--light-text-color)' },
      text: { color: 'var(--main-text-color)' },
      'text-dark': { color: 'var(--dark-text-color)' },
      inherit: { color: 'inherit' },
    },
    element: {
      h1: { color: 'var(--main-heading-color)', fontSize: 'var(--h1-font-size)' },
      h2: { color: 'var(--main-heading-color)' },
      h3: { color: 'var(--main-heading-color)' },
      h4: { color: 'var(--main-heading-color)' },
      h5: { color: 'var(--main-heading-color)' },
      h6: { color: 'var(--main-heading-color)' },
      body: { color: 'var(--main-text-color)' },
      caption: { color: 'var(--main-text-color)' },
      label: { color: 'var(--main-text-color)' },
      p: { color: 'var(--main-text-color)' },
      span: { color: 'var(--main-text-color)' },
      div: { color: 'var(--main-text-color)' },
    },
    size: {
      xsmall: { fontSize: 'var(--xsmall-font-size)' },
      small: { fontSize: 'var(--small-font-size)' },
      normal: { fontSize: 'var(--normal-font-size)' },
      medium: { fontSize: 'var(--medium-font-size)' },
      large: { fontSize: 'var(--large-font-size)' },
      xlarge: { fontSize: 'var(--xlarge-font-size)' },
      xxlarge: { fontSize: 'var(--xxlarge-font-size)' },
      xxxlarge: { fontSize: 'var(--xxxlarge-font-size)' },
      hero: { fontSize: 'var(--hero-font-size)' },
    },
    marginTop: {
      small: {
        marginTop: 5,
        [media.base]: {
          [media.small.up]: {
            marginTop: 10,
          },
        },
      },
      medium: {
        marginTop: 10,
        [media.base]: {
          [media.small.up]: {
            marginTop: 20,
          },
        },
      },
      large: {
        marginTop: 20,
        [media.base]: {
          [media.small.up]: {
            marginTop: 40,
          },
        },
      },
    },
    marginRight: {
      small: {
        marginRight: 5,
        [media.base]: {
          [media.small.up]: {
            marginRight: 10,
          },
        },
      },
      medium: {
        marginRight: 10,
        [media.base]: {
          [media.small.up]: {
            marginRight: 20,
          },
        },
      },
      large: {
        marginRight: 20,
        [media.base]: {
          [media.small.up]: {
            marginRight: 40,
          },
        },
      },
    },
    marginBottom: {
      small: {
        marginBottom: 5,
        [media.base]: {
          [media.small.up]: {
            marginBottom: 10,
          },
        },
      },
      medium: {
        marginBottom: 10,
        [media.base]: {
          [media.small.up]: {
            marginBottom: 20,
          },
        },
      },
      large: {
        marginBottom: 20,
        [media.base]: {
          [media.small.up]: {
            marginBottom: 40,
          },
        },
      },
    },
    marginLeft: {
      small: {
        marginLeft: 5,
        [media.base]: {
          [media.small.up]: {
            marginLeft: 10,
          },
        },
      },
      medium: {
        marginLeft: 10,
        [media.base]: {
          [media.small.up]: {
            marginLeft: 20,
          },
        },
      },
      large: {
        marginLeft: 20,
        [media.base]: {
          [media.small.up]: {
            marginLeft: 40,
          },
        },
      },
    },
    weight: {
      light: { fontWeight: 'var(--light-font-weight)' },
      regular: { fontWeight: 'var(--regular-font-weight)' },
      bold: { fontWeight: 'var(--bold-font-weight)' },
    },
    align: {
      right: { textAlign: 'right' },
      center: { textAlign: 'center' },
    },
    fontStyle: {
      italic: { fontStyle: 'italic' },
      oblique: { fontStyle: 'oblique' },
    },
    transform: {
      inherit: { textTransform: 'inherit' },
      capitalize: { textTransform: 'capitalize' },
      lowercase: { textTransform: 'lowercase' },
      uppercase: { textTransform: 'uppercase' },
    },
    wordBreak: {
      breakAll: { wordBreak: 'break-all' },
      breakWord: { wordBreak: 'break-word' },
      normal: { wordBreak: 'normal' },
    },
    whiteSpace: {
      breakSpaces: { whiteSpace: 'break-spaces' },
      wrap: { whiteSpace: 'wrap' },
      noWrap: { whiteSpace: 'nowrap' },
      preWrap: { whiteSpace: 'pre-wrap' },
    },
    overflow: {
      clip: { textOverflow: 'clip', overflow: 'hidden' },
      ellipsis: { textOverflow: 'ellipsis', overflow: 'hidden' },
      initial: { textOverflow: 'initial', overflow: 'hidden' },
    },
    cursor: {
      pointer: { cursor: 'pointer' },
    },
  },
  defaultVariants: {
    marginTop: undefined,
    marginRight: undefined,
    marginBottom: undefined,
    marginLeft: undefined,
    color: undefined,
    element: undefined,
    align: undefined,
    size: undefined,
    weight: undefined,
    fontStyle: undefined,
    transform: undefined,
    wordBreak: undefined,
    cursor: undefined,
  },
});

export type TypographyVariants = Omit<NonNullable<RecipeVariants<typeof typography>>, 'element'>;
