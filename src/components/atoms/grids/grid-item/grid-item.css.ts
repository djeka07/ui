import { globalStyle, style } from '@vanilla-extract/css';
import media from '../../../../styles/media.css';

export const root = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  textWrap: 'nowrap',
  padding: '10px 0px',
  [media.base]: {
    [media.small.up]: {
      padding: '20px 0px',
    },
  },
});

globalStyle(`${root} > *:first-child`, {
  display: 'inline',
});
