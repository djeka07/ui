import { style } from '@vanilla-extract/css';
import media from '../../../../styles/media.css';

export const root = style({
  display: 'flex',
  overflowX: 'hidden',
  flexShrink: 0,
  padding: '0px 10px',
  backgroundColor: 'var(--grid-header-bg-color)',
  borderBottom: '1px solid var(--grid-header-fg-color)',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  gap: 4,
  selectors: {
    '&::webkit-scrollbar': {
      display: 'none',
    },
  },
  [media.base]: {
    [media.sm.up.query]: {
      padding: '0px 20px',
    },
  },
});

export const gridColumnHeaderWrapper = style({
  padding: '4px 0',
});
