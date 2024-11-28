export enum BreakPoint {
  xs = 'xs',
  xsx = 'xsx',
  xsm = 'xsm',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  lgx = 'lgx',
  xl = 'xl',
}

export type BreakPointEnumKeys = keyof typeof BreakPoint;

export type MediaQueryAndValue = { query: string; value: number };

export type Media = {
  down: MediaQueryAndValue;
  up: MediaQueryAndValue;
};

export type MediaXs = {
  up: MediaQueryAndValue;
};

const media = {
  base: '@media',
  [BreakPoint.xs]: {
    up: { query: 'screen and (min-width: 0)', value: 0 },
  },
  [BreakPoint.xsx]: {
    down: { query: 'screen and (max-width: 424px)', value: 424 },
    up: { query: 'screen and (min-width: 425px)', value: 425 },
  },
  [BreakPoint.xsm]: {
    down: { query: 'screen and (max-width: 599px)', value: 599 },
    up: { query: 'screen and (min-width: 600px)', value: 600 },
  },
  [BreakPoint.sm]: {
    down: { query: 'screen and (max-width: 767px)', value: 767 },
    up: { query: 'screen and (min-width: 768px)', value: 768 },
  },
  [BreakPoint.md]: {
    down: { query: 'screen and (max-width: 959px)', value: 959 },
    up: { query: 'screen and (min-width: 960px)', value: 960 },
  },
  [BreakPoint.lg]: {
    down: { query: 'screen and (max-width: 1279px)', value: 1279 },
    up: { query: 'screen and (min-width: 1280px)', value: 1280 },
  },
  [BreakPoint.lgx]: {
    down: { query: 'screen and (max-width: 1699px)', value: 1699 },
    up: { query: 'screen and (min-width: 1700px)', value: 1700 },
  },
  [BreakPoint.xl]: {
    down: { query: 'screen and (max-width: 1919px)', value: 1919 },
    up: { query: 'screen and (min-width: 1920px)', value: 1920 },
  },
};

export default media;
