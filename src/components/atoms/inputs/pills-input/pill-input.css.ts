import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import media from '../../../../styles/media.css';

export const wrapper = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  variants: {
    width: {
      full: { width: '100%' },
    },
  },
  defaultVariants: { width: undefined },
});

export type WrapperVariants = RecipeVariants<typeof wrapper>;

export const label = style({
  color: 'var(--common-white-color)',
  fontSize: 'var(--small-font-size)',
  marginBottom: 4,
  transition: 'all 0.3s ease-in-out',
});

export const error = style({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'rgb(248, 215, 218)',
  color: 'var(--dark-error-color)',
  overflow: 'hidden',
  fontSize: '0.875rem',
  padding: '5px',
});

export const errorSvg = style({
  fill: 'var(--dark-error-color)',
  marginRight: 5,
});

export const inputWrapper = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    flexWrap: 'wrap',
    backgroundColor: 'var(--input-bg-color)',
    width: '100%',
    padding: 8,
    minHeight: 48,
  },
  variants: {
    radius: {
      small: { borderRadius: 4 },
      medium: { borderRadius: 8 },
      large: { borderRadius: 12 },
      xlarge: { borderRadius: 16 },
      xxlarge: { borderRadius: 20 },
    },
  },
  defaultVariants: {
    radius: 'small',
  },
});

export const pill = style({
  display: 'flex',
  alignItems: 'center',
  gap: 2,
  cursor: 'pointer',
  backgroundColor: 'var(--300-grey-color)',
  color: 'var(--700-grey-color)',
  borderRadius: 20,
  padding: '4px 8px',
});

export const input = style({
  cursor: 'auto',
  position: 'relative',
  color: 'var(--common-white-color)',
  backgroundColor: 'transparent',
  flexGrow: 1,
  padding: 4,
  border: 0,
  fontSize: 16,
  transition: 'all 0.3s ease-in-out',
  appearance: 'none',
  outline: 'none',
  [media.base]: {
    [media.sm.up.query]: {
      fontSize: 14,
    },
  },
});

export type InputVariants = RecipeVariants<typeof inputWrapper>;
