import { style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

export const root = style({
  position: 'relative',
  maxWidth: '100%',
});

export const input = recipe({
  base: {
    cursor: 'pointer',
    width: 20,
    height: 20,
    appearance: 'none',
    WebkitAppearance: 'none',
    border: 'solid 1px #cccccc',
    position: 'relative',
    selectors: {
      '&:checked::before': {
        content: '',
        width: 14,
        height: 14,
        backgroundColor: 'var(--main-primary-color)',
        position: 'absolute',
        top: 2,
        left: 2,
      },
    },
  },
  variants: {
    error: {
      true: {
        selectors: {},
      },
    },
    radius: {
      small: {
        borderRadius: '4px',
        selectors: {
          '&:checked::before': {
            borderRadius: '4px',
          },
        },
      },
      medium: {
        borderRadius: '8px',
        selectors: {
          '&:checked::before': {
            borderRadius: '4px',
          },
        },
      },
      large: {
        borderRadius: '12px',
        selectors: {
          '&:checked::before': {
            borderRadius: '4px',
          },
        },
      },
      xlarge: {
        borderRadius: '16px',
        selectors: {
          '&:checked::before': {
            borderRadius: '4px',
          },
        },
      },
      xxlarge: {
        borderRadius: '20px',
        selectors: {
          '&:checked::before': {
            borderRadius: '4px',
          },
        },
      },
    },
  },
  defaultVariants: {
    error: undefined,
    radius: 'small',
  },
});

export const labelClass = style({
  fontSize: 'var(--small-font-size)',
  color: 'var(--main-input-color)',
  textOverflow: 'ellipsis',
});

export const childrenClass = recipe({
  base: {
    paddingLeft: '10px',
    color: 'var(--main-input-color)',
    fontSize: 'var(--small-font-size)',
  },
  variants: {
    paddingLeft: {
      true: {
        paddingLeft: '25px',
      },
    },
  },
});

export const errorSvg = style({
  fill: 'var(--dark-error-color)',
  marginRight: 5,
});

export const wrapper = recipe({
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    alignItems: 'center',
    position: 'relative',
    marginBottom: 10,
    cursor: 'pointer',
    WebkitUserSelect: 'none',
    userSelect: 'none',
  },
  variants: {
    disabled: {
      true: {
        cursor: 'not-allowed',
      },
    },
  },
});
export const errorClass = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgb(248, 215, 218)',
    color: 'var(--dark-error-color)',
    overflow: 'hidden',
    fontSize: '0.875rem',
    padding: '8px',
  },
  variants: {
    radius: {
      small: {
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
      },
      medium: {
        borderBottomLeftRadius: '8px',
        borderBottomRightRadius: '8px',
      },
      large: {
        borderBottomLeftRadius: '12px',
        borderBottomRightRadius: '12px',
      },
      xlarge: {
        borderBottomLeftRadius: '16px',
        borderBottomRightRadius: '16px',
      },
      xxlarge: {
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
      },
    },
  },
  defaultVariants: {
    radius: 'small',
  },
});

export type InputVariants = RecipeVariants<typeof errorClass>;
