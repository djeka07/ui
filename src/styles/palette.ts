export type ColorVariants = { light: string; main: string; dark: string };
export type ColorVariantsKeys = keyof ColorVariants;
type ColorMain = Pick<ColorVariants, 'main'>;

export type GreyKeys = keyof Grey;

export type Grey = {
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
};

type BackgroundForeground = { background: string; foreground: string };

export type GridPalette = {
  border: string;
  row: { odd: BackgroundForeground; even: BackgroundForeground };
  header: BackgroundForeground;
  main: BackgroundForeground;
  footer: BackgroundForeground;
};

export type Palette = {
  common: { white: string; black: string };
  grey: Grey;
  button: {
    primary: BackgroundForeground;
    secondary: BackgroundForeground;
    success: BackgroundForeground;
    error: BackgroundForeground;
    info: BackgroundForeground;
    warning: BackgroundForeground;
    transparent: { foreground: string };
  };
  panel: {
    primary: BackgroundForeground;
    secondary: BackgroundForeground;
    success: BackgroundForeground;
    error: BackgroundForeground;
    info: BackgroundForeground;
    warning: BackgroundForeground;
  };
  input: BackgroundForeground;
  focus: ColorVariants;
  heading: ColorVariants;
  text: ColorVariants;
  link: ColorVariants;
  background: ColorVariants;
  notification: ColorMain;
  boxShadow: ColorMain;
  grid: GridPalette;
};

export type PaletteKeys = keyof Palette;

const base = {
  common: {
    white: '#ffffff',
    black: '#000000',
  },

  grey: {
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#515151',
    800: '#424242',
    900: '#212121',
  },
};

const createDarkPalette = (): Palette => ({
  ...base,
  button: {
    primary: { background: '#3D71DC', foreground: '#ffffff' },
    secondary: { background: '#616161', foreground: '#c4c4c4' },
    success: { background: '#198754', foreground: '#ffffff' },
    error: { background: '#dc3545', foreground: '#ffffff' },
    info: { background: '#17a2b8', foreground: '#ffffff' },
    warning: { background: '#ffc107', foreground: '#000000' },
    transparent: { foreground: '#ffffff' },
  },
  panel: {
    primary: { background: '#7aa2f4', foreground: '#11254e' },
    secondary: { background: '#616161', foreground: '#ffffff' },
    success: { background: '#d1e7dd', foreground: '#0f5132' },
    error: { background: '#f8d7da', foreground: '#842029' },
    info: { background: '#7aa2f4', foreground: '#11254e' },
    warning: { background: '#fff3cd', foreground: '#664d03' },
  },
  link: {
    light: 'color-mix(in srgb, #cedff6, white 25%)',
    main: '#cedff6',
    dark: 'color-mix(in srgb, #cedff6, #000000 25%)',
  },
  input: {
    background: 'transparent',
    foreground: '#ffffff',
  },
  focus: {
    light: 'color-mix(in srgb, #93b0ec, white 25%)',
    main: '#93b0ec',
    dark: 'color-mix(in srgb, #93b0ec, #000000 25%)',
  },
  heading: {
    light: 'color-mix(in srgb, #bdc9e2, #000000 25%)',
    main: '#bdc9e2',
    dark: 'color-mix(in srgb, #bdc9e2, #000000 25%)',
  },
  text: {
    light: '#ffffff',
    main: '#ffffff',
    dark: 'color-mix(in srgb, #ffffff, #000000 25%)',
  },
  grid: {
    border: 'color-mix(in srgb, transparent, #fff 50%)',
    row: {
      odd: { background: 'color-mix(in srgb, #354052, #ffffff 25%)', foreground: '#ffffff' },
      even: { background: '#354052', foreground: '#ffffff' },
    },
    header: {
      background: '#354052',
      foreground: '#ffffff',
    },
    footer: {
      background: '#354052',
      foreground: '#ffffff',
    },
    main: {
      background: '#354052',
      foreground: '#ffffff',
    },
  },

  background: {
    light: 'color-mix(in srgb, #354052, #ffffff 25%)',
    main: '#354052',
    dark: 'color-mix(in srgb, #354052, #000000 25%)',
  },
  notification: { main: '#4A699B' },
  boxShadow: {
    main: 'rgb(0 0 0 / 25%) 0px 1px 5px -1px',
  },
});

const createLightPalette = (): Palette => ({
  ...base,
  button: {
    primary: { background: '#491b6e', foreground: '#ffffff' },
    secondary: { background: '#616161', foreground: '#ffffff' },
    success: { background: '#198754', foreground: '#ffffff' },
    error: { background: '#dc3545', foreground: '#ffffff' },
    info: { background: '#17a2b8', foreground: '#ffffff' },
    warning: { background: '#ffc107', foreground: '#000000' },
    transparent: { foreground: '#2f2c2c' },
  },
  panel: {
    primary: { background: '#a98bc1', foreground: '#3b105e' },
    secondary: { background: '#616161', foreground: '#c4c4c4' },
    success: { background: '#d1e7dd', foreground: '#0f5132' },
    error: { background: '#f8d7da', foreground: '#842029' },
    info: { background: '#7aa2f4', foreground: '#11254e' },
    warning: { background: '#fff3cd', foreground: '#664d03' },
  },
  input: {
    background: '#fff',
    foreground: '#616161',
  },
  focus: {
    light: 'color-mix(in srgb, #491b6e, #ffffff 25%)',
    main: '#491b6e',
    dark: 'color-mix(in srgb, #491b6e, #000000 25%)',
  },
  heading: {
    light: base.grey[500],
    main: base.grey[700],
    dark: base.grey[900],
  },
  text: {
    light: 'color-mix(in srgb, #616161, #ffffff 25%)',
    main: '#616161',
    dark: 'color-mix(in srgb, #616161, #000000 25%)',
  },
  link: {
    light: '#ffffff',
    main: '#1e3c68',
    dark: '#1e3c68',
  },
  background: {
    light: 'color-mix(in srgb, #e1e0e3, #ffffff 25%)',
    main: '#e1e0e3',
    dark: 'color-mix(in srgb, #e1e0e3, #000000 25%)',
  },
  notification: { main: '#4A699B' },
  boxShadow: {
    main: 'rgb(0 0 0 / 25%) 0px 1px 5px -1px',
  },
  grid: {
    border: 'color-mix(in srgb, transparent, #181d1f 15%)',
    row: {
      odd: { background: 'color-mix(in srgb, #e1e0e3, white 25%)', foreground: '#616161' },
      even: { background: '#e1e0e3', foreground: '#616161' },
    },
    header: {
      background: 'color-mix(in srgb, #e1e0e3, #ffffff 25%)',
      foreground: '#616161',
    },
    footer: {
      background: '#e1e0e3',
      foreground: '#616161',
    },
    main: {
      background: '#e1e0e3',
      foreground: '#616161',
    },
  },
});

export default (theme: 'dark' | 'light'): Palette => (theme === 'dark' ? createDarkPalette() : createLightPalette());
