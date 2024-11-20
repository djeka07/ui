export type ColorVariants = { light: string; main: string; dark: string };
export type ColorVariantsKeys = keyof ColorVariants;

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
  text: {
    heading: string;
    body: string;
    link: string;
    success: string;
    warning: string;
    error: string;
    info: string;
  };
  input: BackgroundForeground & { focus: string };
  background: string;
  notification: string;
  boxShadow: string;
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
    error: { background: '#f8d7da', foreground: '#6d2e33' },
    info: { background: '#7aa2f4', foreground: '#11254e' },
    warning: { background: '#fff3cd', foreground: '#664d03' },
  },
  input: {
    background: 'transparent',
    foreground: '#ffffff',
    focus: '#93b0ec',
  },
  text: {
    heading: '#bdc9e2',
    body: '#ffffff',
    link: '#cedff6',
    error: '#f0a8a3',
    success: '#2e7d32',
    info: '#2962ff',
    warning: '#fdd835',
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
  background: '#354052',
  notification: '#4A699B',
  boxShadow: 'rgb(0 0 0 / 25%) 0px 1px 5px -1px',
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
    error: { background: '#f7babf', foreground: '#4f0e13' },
    info: { background: '#7aa2f4', foreground: '#11254e' },
    warning: { background: '#fff3cd', foreground: '#664d03' },
  },
  input: {
    background: '#fff',
    foreground: '#616161',
    focus: '#491b6e',
  },
  text: {
    heading: base.grey[700],
    body: '#616161',
    link: '#1e3c68',
    error: '#c0564f',
    success: '#2e7d32',
    info: '#2962ff',
    warning: '#f9a825',
  },
  background: '#e1e0e3',
  notification: '#4A699B',
  boxShadow: 'rgb(0 0 0 / 25%) 0px 1px 5px -1px',
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
