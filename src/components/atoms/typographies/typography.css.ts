import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import media from '../../../styles/media.css';

export const typography = recipe({
  base: {
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
      success: { color: 'var(--success-text-color)' },
      menu: { color: '#afafaf' },
      heading: { color: 'var(--heading-text-color)' },
      info: { color: 'var(--info-text-color)' },
      error: { color: 'var(--error-text-color)' },
      warning: { color: 'var(--warning-text-color)' },
      link: { color: 'var(--link-text-color)' },
      body: { color: 'var(--body-text-color)' },
      inherit: { color: 'inherit' },
    },
    variant: {
      hero: {
        fontSize: 'var(--hero-font-size, 3rem)',
      },
      h1: {
        fontSize: 'var(--h1-font-size, 2rem)',
      },
      h2: {
        fontSize: 'var(--h2-font-size, 1.5rem)',
      },
      h3: {
        fontSize: 'var(--h3-font-size, 1.17rem)',
      },
      h4: {
        fontSize: 'var(--h4-font-size, 1rem)',
      },
      h5: {
        fontSize: 'var(--h5-font-size, 0.83rem)',
      },
      h6: {
        fontSize: 'var(--h6-font-size, 0.67rem)',
      },
      body: {
        fontSize: 'var(--body-font-size, 1rem)',
      },
      caption: {
        fontSize: 'var(--caption-font-size, 1rem)',
      },
      label: {
        fontSize: 'var(--label-font-size, 1rem)',
      },
      p: {
        fontSize: 'var(--p-font-size, 1rem)',
      },
      span: {
        fontSize: 'var(--span-font-size, 1rem)',
      },
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
          [media.sm.up.query]: {
            marginTop: 10,
          },
        },
      },
      medium: {
        marginTop: 10,
        [media.base]: {
          [media.sm.up.query]: {
            marginTop: 20,
          },
        },
      },
      large: {
        marginTop: 20,
        [media.base]: {
          [media.sm.up.query]: {
            marginTop: 40,
          },
        },
      },
    },
    marginRight: {
      small: {
        marginRight: 5,
        [media.base]: {
          [media.sm.up.query]: {
            marginRight: 10,
          },
        },
      },
      medium: {
        marginRight: 10,
        [media.base]: {
          [media.sm.up.query]: {
            marginRight: 20,
          },
        },
      },
      large: {
        marginRight: 20,
        [media.base]: {
          [media.sm.up.query]: {
            marginRight: 40,
          },
        },
      },
    },
    marginBottom: {
      small: {
        marginBottom: 5,
        [media.base]: {
          [media.sm.up.query]: {
            marginBottom: 10,
          },
        },
      },
      medium: {
        marginBottom: 10,
        [media.base]: {
          [media.sm.up.query]: {
            marginBottom: 20,
          },
        },
      },
      large: {
        marginBottom: 20,
        [media.base]: {
          [media.sm.up.query]: {
            marginBottom: 40,
          },
        },
      },
    },
    marginLeft: {
      small: {
        marginLeft: 5,
        [media.base]: {
          [media.sm.up.query]: {
            marginLeft: 10,
          },
        },
      },
      medium: {
        marginLeft: 10,
        [media.base]: {
          [media.sm.up.query]: {
            marginLeft: 20,
          },
        },
      },
      large: {
        marginLeft: 20,
        [media.base]: {
          [media.sm.up.query]: {
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
    variant: undefined,
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
