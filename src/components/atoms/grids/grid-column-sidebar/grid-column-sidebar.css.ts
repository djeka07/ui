import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const root = style({
  position: 'absolute',
  width: 300,
  right: 25,
  backgroundColor: 'var(--grid-header-bg-color)',
  zIndex: 100,
  boxShadow: 'var(--main-box-shadow)',
  top: 0,
  bottom: 0,
});

export const wrapper = recipe({
  base: {
    padding: 12,
    gap: 8,
  },
  variants: {
    overflow: {
      true: {
        overflow: 'auto',
      },
    },
    border: {
      true: {
        borderBottom: '1px solid var(--grid-header-fg-color)',
      },
    },
  },
});

export const definition = recipe({
  base: {
    display: 'grid',
    cursor: 'grab',
    gridTemplateColumns: 'auto auto 1fr',
    alignItems: 'center',
    gap: 8,
    borderBottom: 2,
    borderTop: 2,
    borderTopStyle: 'solid',
    borderBottomStyle: 'solid',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    padding: '8px 4px',
  },
  variants: {
    grabbing: {
      true: {
        cursor: 'grabbing',
      },
    },
    bottom: {
      true: { borderBottomColor: 'var(--main-primary-color)' },
    },
    top: {
      true: { borderTopColor: 'var(--main-primary-color)' },
    },
  },
});
