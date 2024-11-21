import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const root = style({
  overflow: 'hidden',
  position: 'relative',
  width: '100%',
  display: 'block',
});

export const image = recipe({
  base: {
    position: 'absolute',
    display: 'block',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 'auto',
    width: '100%',
    objectFit: 'cover',
  },
  variants: {
    loaded: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
      },
    },
  },
});
