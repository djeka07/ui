import { style } from '@vanilla-extract/css';
import media from '../../../../styles/media.css';
import { recipe } from '@vanilla-extract/recipes';

export const root = recipe({
  base: {
    display: 'grid',

    padding: '10px 0px',
    gap: 8,
    fontWeight: 'var(--bold-font-weight)',
    color: 'var(--main-text-color)',
    [media.base]: {
      [media.small.up]: {
        padding: '20px 0px',
      },
    },
  },
});

export const text = style({
  overflowX: 'hidden',
  textOverflow: 'ellipsis',
});

export const wrapper = recipe({
  base: {
    display: 'grid',
    gridTemplateColumns: '1fr 8px',
    alignItems: 'center',
  },
  variants: {
    shouldRenderFloatingFilter: {
      true: {
        gridTemplateColumns: '1fr 24px 8px',
      },
    },
  },
});

export const resize = style({
  height: '100%',
  width: 2,
  backgroundColor: 'var(--grid-border-fg-color)',
  cursor: 'col-resize',
});
