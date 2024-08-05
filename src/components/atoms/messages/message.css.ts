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
        backgroundColor: 'var(--light-primary-color)', 
        color: 'var(--dark-primary-color)',
        border: '1px solid var(--main-primary-color)'
      }
    },
    error: { 
      true: {
        backgroundColor: 'var(--light-error-color)', 
        color: 'var(--dark-error-color)',
        border: '1px solid var(--main-error-color)'
    }
  },
    success: {
      true: {
        backgroundColor: 'var(--light-success-color)', 
        color: 'var(--dark-success-color)',
        border: '1px solid var(--main-success-color)'
      }
    },
    warning: {
      true: {
        backgroundColor: 'var(--light-warning-color)', 
        color: 'var(--dark-warning-color)',
        border: '1px solid var(--main-warning-color)'
      }
    },
    info: {
      true: {
        backgroundColor: 'var(--light-info-color)', 
        color: 'var(--dark-info-color)',
        border: '1px solid var(--main-info-color)'
      }
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
        fill: 'var(--dark-primary-color)',
      }
    },
    error: {
      true: {
        fill: 'var(--dark-error-color)',
      }
    },
    success: {
      true: {
        fill: 'var(--dark-success-color)',
      }
    },
    warning: {
      true: {
        fill: 'var(--dark-warning-color)',
      }
    },
    info: {
      true: {
        fill: 'var(--dark-info-color)',
      }
    }
  }
})

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
  },
});

export type MessageVariants = NonNullable<RecipeVariants<typeof message>>;
