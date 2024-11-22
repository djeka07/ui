import { style } from '@vanilla-extract/css';
import { media } from '../../../../styles';

export const root = style({
  position: 'relative',
  paddingBottom: '56.25%',
  backgroundColor: 'color-mix(in srgb, var(--background-color), black 10%)',
  height: 0,
});

export const video = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  maxWidth: '100%',
  height: '100%',
  border: 0,
});

export const play = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  border: 'none',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(200, 200, 200, 0.5)',
  boxShadow: 'var(--box-shadow)',
  padding: 16,
  borderRadius: '50%',
  cursor: 'pointer',
  [media.base]: {
    [media.sm.up.query]: {
      transition: 'all ease-in-out 0.3s',
      selectors: {
        '&:hover': {
          transform: 'translate(-50%, -50%) scale(1.2)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        },
      },
    },
  },
});

export const icon = style({
  width: 40,
  height: 40,
  [media.base]: {
    [media.sm.up.query]: {
      height: 60,
      width: 60,
    },
  },
});
