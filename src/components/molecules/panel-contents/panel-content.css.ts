import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

export const root = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    overflow: 'auto',
    margin: '1px',
  },
  variants: {
    radius: {
      small: { borderRadius: 4 },
      medium: { borderRadius: 8 },
      large: { borderRadius: 12 },
      xlarge: { borderRadius: 16 },
      xxlarge: { borderRadius: 20 },
    },
    background: {
      light: {
        backgroundColor: 'color-mix(in srgb, var(--background-color), white 50%)',
      },
      main: {
        backgroundColor: 'var(--main-background-color)',
      },
      dark: {
        backgroundColor: 'var(--dark-background-color)',
      },
    },
    boxShadow: {
      true: {
        boxShadow: 'var(--box-shadow)',
      },
    },
  },
  defaultVariants: {
    background: 'light',
    radius: 'small',
    boxShadow: undefined,
  },
});

export const titleWrapper = recipe({
  base: {
    display: 'flex',
    padding: 20,
  },
  variants: {
    centerTitle: {
      true: {
        justifyContent: 'center',
      },
      false: {
        justifyContent: 'flex-start',
      },
    },
    background: {
      light: {
        borderBottom: '1px solid #cccccc',
      },
      main: {
        borderBottom: '1px solid #e3e3e3',
      },
      dark: {
        borderBottom: `1px solid color-mix(in srgb, var(--background-color), black 50%),`,
      },
    },
  },
  defaultVariants: {
    centerTitle: false,
  },
});

export const content = recipe({
  base: { padding: 20, display: 'flex', flexDirection: 'column' },
  variants: {
    centerContent: {
      true: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      },
      false: {
        justifyContent: 'flex-start',
        alignItems: 'stretch',
      },
    },
  },
  defaultVariants: {
    centerContent: false,
  },
});

export type RootVariants = RecipeVariants<typeof root>;
export type TitleWrapperVariants = RecipeVariants<typeof titleWrapper>;
export type ContentVariants = RecipeVariants<typeof content>;
