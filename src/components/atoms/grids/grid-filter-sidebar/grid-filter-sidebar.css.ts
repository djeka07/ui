import { globalStyle, style } from '@vanilla-extract/css';

export const filter = style({});

export const button = style({
  border: 'none',
  backgroundColor: 'transparent',
  fontFamily: 'var(--base-font-family)',
  fontWeight: 'var(--bold-font-weight)',
  display: 'grid',
  fontSize: '1rem',
  width: '100%',
  justifyItems: 'start',
  gridTemplateColumns: 'auto 1fr',
  padding: '16px 8px',
  gap: 8,
});

globalStyle(`${filter} + ${filter}`, {
  borderTop: '1px solid var(--grid-border-fg-color)',
});
