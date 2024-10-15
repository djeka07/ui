import { style } from '@vanilla-extract/css';
import media from '../../../../styles/media.css';

export const root = style({
  display: 'flex',
  position: 'sticky',
  top: 0,
  padding: '0px 10px',
  backgroundColor: 'var(--grid-header-bg-color)',
  borderBottom: '1px solid var(--grid-header-fg-color)',
  gap: 4,
  [media.base]: {
    [media.small.up]: {
      padding: '0px 20px',
    },
  },
});

export const gridColumnHeaderWrapper = style({
  padding: '4px 0',
});
