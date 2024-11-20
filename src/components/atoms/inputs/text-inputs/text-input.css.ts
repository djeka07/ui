import { style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';
import media from '../../../../styles/media.css';

export const root = recipe({
  base: {
    position: 'relative',
  },
  variants: {
    width: {
      full: { width: '100%' },
    },
    opacicy: {
      true: {
        opacity: 0.6,
      },
    },
  },
  defaultVariants: { width: 'full' },
});

export const wrapper = recipe({
  base: {
    position: 'relative',
  },
  variants: {
    width: {
      full: { width: '100%' },
    },
  },
  defaultVariants: { width: undefined },
});

export type WrapperVariants = RecipeVariants<typeof wrapper>;

export const label = recipe({
  base: {
    color: 'var(--input-fg-color)',
    fontSize: 'var(--small-font-size)',
    marginBottom: 4,
    position: 'absolute',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    width: 'calc(100% - 24px)',
    overflow: 'hidden',
    zIndex: 1,
    top: 0,
    left: 0,
    transformOrigin: 'top left',
    transition: 'color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
    pointerEvents: 'none',
  },
  variants: {
    size: {
      small: {
        transform: 'translate(14px, 7px) scale(1)',
      },
      normal: {
        transform: 'translate(14px, 16px) scale(1)',
      },
    },
    float: {
      true: {
        fontSize: '0.925rem',
        transform: 'translate(14px, -7px) scale(0.75)',
        width: '100%',
      },
    },
    focus: {
      true: {
        color: 'var(--input-focus-color)',
      },
    },
    hide: {
      true: {
        opacity: 0,
      },
    },
    errored: {
      true: {
        color: 'var(--panel-error-bg-color)',
        fontSize: '0.925rem',
      },
    },
  },
  defaultVariants: {
    focus: false,
    float: false,
    errored: false,
  },
});

export const fieldset = recipe({
  base: {
    top: ' -5px',
    left: 0,
    right: 0,
    bottom: 0,
    margin: 0,
    padding: '0 8px',
    overflow: 'hidden',
    position: 'absolute',
    borderStyle: 'solid',
    pointerEvents: 'none',
    borderColor: 'var(--input-fg-color)',
    borderWidth: '1px',
  },
  variants: {
    focus: {
      true: {
        borderWidth: '2px',
        borderColor: 'var(--input-focus-color)',
      },
    },
    errorFocus: {
      true: {
        borderWidth: '2px',
        borderColor: 'var(--panel-error-bg-color)',
      },
    },
    radius: {
      none: {
        borderRadius: 0,
        '+ div > div': {
          borderBottomLeftRadius: '0px',
          borderBottomRightRadius: '0px',
        },
      },
      small: {
        borderRadius: 4,
        '+ div > div': {
          borderBottomLeftRadius: '4px',
          borderBottomRightRadius: '4px',
        },
      },
      medium: {
        borderRadius: 8,
        '+ div > div': {
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
        },
      },
      large: {
        borderRadius: 12,
        '+ div > div': {
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
        },
      },
      xlarge: {
        borderRadius: 16,
        '+ div > div': {
          borderBottomLeftRadius: '16px',
          borderBottomRightRadius: '16px',
        },
      },
      xxlarge: {
        borderRadius: 20,
        '+ div > div': {
          borderBottomLeftRadius: '20px',
          borderBottomRightRadius: '20px',
        },
      },
      round: {
        borderRadius: '50%',
        '+ div > div': {
          borderBottomLeftRadius: '50%',
          borderBottomRightRadius: '50%',
        },
      },
    },
    errored: {
      true: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
  },
  defaultVariants: {
    radius: 'small',
    focus: undefined,
    errored: undefined,
    errorFocus: undefined,
  },
});

export const iconWrapper = style({
  position: 'absolute',
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const legend = recipe({
  base: {
    width: 'auto',
    height: '11px',
    display: 'block',
    padding: 0,
    fontSize: '0.65rem',
    maxWidth: '0.01px',
    textAlign: 'left',
    transition: 'max-width 50ms cubic-bezier(0, 0, 0.2, 1) 0ms',
    visibility: 'hidden',
  },
  variants: {
    focus: {
      true: {
        maxWidth: '1000px',
      },
    },
  },
  defaultVariants: {
    focus: undefined,
  },
});

export const legentSpan = style({
  paddingLeft: '5px',
  paddingRight: '5px',
});

export const error = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'var(--panel-error-bg-color)',
    color: 'var(--panel-error-fg-color)',
    overflow: 'hidden',
    fontSize: '0.875rem',
    padding: '8px',
  },
  variants: {
    radius: {
      none: {
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
      },
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
      round: {
        borderBottomLeftRadius: '50%',
        borderBottomRightRadius: '50%',
      },
    },
  },
  defaultVariants: {
    radius: 'small',
  },
});

export const errorSvg = style({
  fill: 'var(--panel-error-fg-color)',
  marginRight: 5,
  flexShrink: 0,
});

export const inputBackgroundColor = 'rgb(255, 255, 255)';

export const input = recipe({
  base: {
    cursor: 'auto',
    position: 'relative',
    width: '100%',
    padding: '0px 12px',
    borderRadius: 0,
    color: 'var(--input-fg-color)',
    backgroundColor: 'var(--input-bg-color)',
    border: 0,
    fontSize: 16,
    appearance: 'none',
    outline: 'none',
    ['-webkit-text-fill-color' as string]: 'var(--input-fg-color) !important',
    [media.base]: {
      [media.sm.up]: {
        fontSize: 14,
      },
    },
    selectors: {
      '&:-webkit-autofill': {
        transition: 'background-color 5000000s ease-in-out 0s',
        color: 'var(--input-fg-color)!important',
        ['-webkit-text-fill-color' as string]: 'var(--input-fg-color) !important',
      },
      '&::placeholder': {
        color: 'var(--input-fg-color)',
        opacity: 0.6,
      },
      '&:disabled': {
        cursor: 'not-allowed',
      },
    },
  },
  variants: {
    size: {
      small: {
        height: 30,
      },
      normal: {
        height: 48,
      },
    },
    focus: {
      true: {
        color: 'var(--input-focus-color)',
        ['-webkit-text-fill-color' as string]: 'var(--input-focus-color) !important',
        selectors: {
          '&:-webkit-autofill': {
            ['-webkit-text-fill-color' as string]: 'var(--input-focus-color) !important',
          },
        },
      },
    },
    errorFocus: {
      true: {
        color: 'var(--error-text-color)',
        ['-webkit-text-fill-color' as string]: 'var(--error-text-color) !important',
      },
    },
  },
});

export type InputVariants = RecipeVariants<typeof error>;
