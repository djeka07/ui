import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const root = style({
  position: 'absolute',
  right: 0,
  top: 25,
  width: 25,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  bottom: 0,
  backgroundColor: 'var(--grid-header-bg-color)',
  zIndex: 1000,
});

export const text = style({
  writingMode: 'vertical-lr',
});

export const button = recipe({
  base: {
    border: 'none',
    backgroundColor: 'transparent',
    fontFamily: 'var(--base-font-family)',
    display: 'grid',
    gap: 4,
    color: 'var(--main-text-color)',
    borderLeft: '2px solid transparent',
  },
  variants: {
    active: {
      true: {
        borderLeftColor: 'var(--main-primary-bg-color)',
      },
    },
  },
});
