import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const message = recipe({
  base: {
    fontSize: 'var(--small-font-size)',
    borderRadius: 'var(--small-border-radius)',
    overflow: 'hidden',
  },
  variants: {
    primary: {
      true: {
        backgroundColor: 'var(--panel-primary-bg-color)',
        color: 'var(--panel-primary-fg-color)',
        border: '1px solid var(--panel-primary-bg-color)',
      },
    },
    secondary: {
      true: {
        backgroundColor: 'var(--panel-secondary-bg-color)',
        color: 'var(--panel-secondary-fg-color)',
        border: '1px solid var(--panel-secondary-bg-color)',
      },
    },
    error: {
      true: {
        backgroundColor: 'var(--panel-error-bg-color)',
        color: 'var(--panel-error-fg-color)',
        border: '1px solid var(--panel-error-bg-color)',
      },
    },
    success: {
      true: {
        backgroundColor: 'var(--panel-success-bg-color)',
        color: 'var(--panel-success-fg-color)',
        border: '1px solid var(--panel-success-bg-color)',
      },
    },
    warning: {
      true: {
        backgroundColor: 'var(--panel-warning-bg-color)',
        color: 'var(--panel-warning-fg-color)',
        border: '1px solid var(--panel-warning-bg-color)',
      },
    },
    info: {
      true: {
        backgroundColor: 'var(--panel-info-bg-color)',
        color: 'var(--panel-info-fg-color)',
        border: '1px solid var(--panel-info-bg-color)',
      },
    },
    border: {
      false: {
        border: 'none',
      },
    },
  },
});

export const icon = recipe({
  base: {
    flexShrink: 0,
  },
  variants: {
    primary: {
      true: {
        fill: 'var(--panel-primary-fg-color)',
      },
    },
    secondary: {
      true: {
        fill: 'var(--panel-secondary-fg-color)',
      },
    },
    error: {
      true: {
        fill: 'var(--panel-error-fg-color)',
      },
    },
    success: {
      true: {
        fill: 'var(--panel-success-fg-color)',
      },
    },
    warning: {
      true: {
        fill: 'var(--panel-warning-fg-color)',
      },
    },
    info: {
      true: {
        fill: 'var(--panel-info-fg-color)',
      },
    },
  },
});

export const innerMessage = recipe({
  base: {
    padding: '10px 10px',
  },
  variants: {
    icon: {
      true: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      },
    },
    direction: {
      column: {
        flexDirection: 'column',
      },
      row: {
        flexDirection: 'row',
      },
    },
  },
});

export type MessageVariants = NonNullable<RecipeVariants<typeof message>>;
