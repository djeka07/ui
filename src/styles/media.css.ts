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

export type Media = {
  down: string;
  up: string;
};

export type MediaXs = {
  up: string;
};

const media = {
  base: '@media',
  [BreakPoint.xs]: {
    up: 'screen and (min-width: 0)',
  },
  [BreakPoint.xsx]: {
    down: 'screen and (max-width: 424px)',
    up: 'screen and (min-width: 425px)',
  },
  [BreakPoint.xsm]: {
    down: 'screen and (max-width: 599px)',
    up: 'screen and (min-width: 600px)',
  },
  [BreakPoint.sm]: {
    down: 'screen and (max-width: 767px)',
    up: 'screen and (min-width: 768px)',
  },
  [BreakPoint.md]: {
    down: 'screen and (max-width: 959px)',
    up: 'screen and (min-width: 960px)',
  },
  [BreakPoint.lg]: {
    down: 'screen and (max-width: 1279px)',
    up: 'screen and (min-width: 1280px)',
  },
  [BreakPoint.lgx]: {
    down: 'screen and (max-width: 1699px)',
    up: 'screen and (min-width: 1700px)',
  },
  [BreakPoint.xl]: {
    down: 'screen and (max-width: 1919px)',
    up: 'screen and (min-width: 1920px)',
  },
};

export default media;
