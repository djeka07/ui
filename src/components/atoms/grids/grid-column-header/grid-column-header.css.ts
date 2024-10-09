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
    transition: '0.3s border, 0.3s background-color, 0.5s padding, 0.5s border-radius',
    borderWidth: 2,
    borderRadius: 0,
    borderStyle: 'dashed',
    borderColor: 'transparent',
    [media.base]: {
      [media.small.up]: {
        padding: '20px 0px',
      },
    },
  },
  variants: {
    showDropZone: {
      true: {
        transition: '0.3s border, 0.3s background-color, 0.5s padding, 0.5s border-radius',
        borderColor: 'var(--grid-border-bg-color)',
        padding: '10px 10px',
        backgroundColor: 'color-mix(in srgb, var(--grid-header-bg-color), grey 25%)',
        borderRadius: 6,
        [media.base]: {
          [media.small.up]: {
            padding: '20px 20px',
          },
        },
      },
    },
    showActiveDropZone: {
      true: {
        transition: '0.3s border, 0.3s background-color, 0.5s padding, 0.5s border-radius',
        borderColor: 'var(--main-primary-color)',
        borderStyle: 'solid',
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
