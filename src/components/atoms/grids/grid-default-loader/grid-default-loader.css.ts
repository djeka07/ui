import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import media from '../../../../styles/media.css';
import { ghostAni } from '../../skeletons/skeleton.css';

export const root = style({
  overflow: 'auto',
});

export const wrapper = recipe({
  base: {
    display: 'flex',
    gap: 4,
    padding: '0px 10px',
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

export const item = style({
  padding: '0px 0px',
  display: 'grid',
  alignItems: 'center',
  [media.base]: {
    [media.small.up]: {
      padding: '0px 0px',
    },
  },
});

export const itemSkeleton = style({
  animationFillMode: 'forwards',
  background: 'linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%) 0% 0% / 900px 104px',
  animation: `${ghostAni} 1s linear infinite`,
  width: '100%',
  height: 20,
  borderRadius: 3,
});

export const text = style({
  opacity: 0,
});
