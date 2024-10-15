import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import media from '../../../../styles/media.css';

export const root = style({
  overflow: 'visible',
});

export const wrapper = recipe({
  base: {
    display: 'flex',
    overflow: 'hidden',
    gap: 4,
    padding: '0px 10px',
    borderBottom: '1px solid var(--grid-border-fg-color)',
    [media.base]: {
      [media.small.up]: {
        padding: '0px 20px',
      },
    },
  },
  variants: {
    odd: {
      true: {
        backgroundColor: 'var(--grid-row-odd-bg-color)',
        color: 'var(--grid-row-odd-fg-color)',
      },
      false: {
        backgroundColor: 'var(--grid-row-even-bg-color)',
        color: 'var(--grid-row-even-fg-color)',
      },
    },
  },
});
