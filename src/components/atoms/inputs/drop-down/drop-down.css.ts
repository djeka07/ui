import { style } from '@vanilla-extract/css';

export const dropDown = style({
  border: 0,
  appearance: 'none',
  outline: 0,
  height: 48,
  padding: '0px 24px 0px 12px',
  backgroundColor: 'transparent',
  color: 'var(--main-input-color)',
  zIndex: 1,
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
