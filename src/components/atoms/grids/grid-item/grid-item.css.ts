import { globalStyle } from '@vanilla-extract/css';
import media from '../../../../styles/media.css';
import { recipe } from '@vanilla-extract/recipes';

export const root = recipe({
  base: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textWrap: 'nowrap',
    padding: '0px 0px',
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'start',
    height: '100%',
    [media.base]: {
      [media.sm.up.query]: {
        padding: '0px 0px',
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

globalStyle(`${root} > *:first-child`, {
  display: 'inline',
});
