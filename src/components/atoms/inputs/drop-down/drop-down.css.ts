import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const dropDown = recipe({
  base: {
    border: 0,
    appearance: 'none',
    outline: 0,
    height: 48,
    padding: '0px 24px 0px 12px',
    backgroundColor: 'var(--input-bg-color)',
    color: 'var(--input-fg-color)',
    zIndex: 1,
    width: '100%',
  },

  variants: {
    size: {
      small: {
        height: 30,
      },
      normal: {
        height: 48,
      },
    },
  },
});

export const iconWrapper = style({
  position: 'absolute',
  right: 8,
  top: 0,
  bottom: 0,
  display: 'grid',
  alignItems: 'center',
  zIndex: 0,
});
