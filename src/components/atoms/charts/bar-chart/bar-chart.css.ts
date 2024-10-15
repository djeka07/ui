import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
});

export const wrapper = style({
  display: 'flex',
  gap: 4,
  flex: '1 1 0%',
});

export const item = style({
  height: '100%',
  alignContent: 'end',
  flex: '1 1 0%;',
});

export const bar = style({
  borderRadius: 4,
  width: '100%',
  transition: '0.3s ease-in-out',
});

export const labelValueWrapper = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
});

export const label = style({
  position: 'absolute',
  top: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '100%',
  textAlign: 'center',
});

export const value = style({
  position: 'absolute',
  whiteSpace: 'nowrap',
  bottom: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '100%',
  textAlign: 'center',
});
