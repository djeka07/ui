import { Meta, StoryObj } from '@storybook/react';
import Image from './image';
import media, { BreakPoint } from '../../../../styles/media.css';

const meta: Meta<typeof Image> = {
  title: 'Atoms/Medias/Image',
  component: Image,
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Main: Story = {
  args: {
    src: 'https://images.prismic.io/testrepoi/Zz8Vba8jQArT1HJD_markus-winkler-LZ8Q70HR6nw-unsplash.jpg',
    lazy: true,
    width: 1920,
    height: 1080,
    srcSet: [
      { maxBreakPoint: BreakPoint.xsx, width: media[BreakPoint.xsx].up.value },
      { maxBreakPoint: BreakPoint.sm, width: media[BreakPoint.sm].up.value },
      { maxBreakPoint: BreakPoint.md, width: media[BreakPoint.md].up.value },
      { maxBreakPoint: BreakPoint.lg, width: media[BreakPoint.lg].up.value },
    ],
  },
};

export const ModifyFalse: Story = {
  args: {
    src: 'https://images.prismic.io/testrepoi/Zz8Vba8jQArT1HJD_markus-winkler-LZ8Q70HR6nw-unsplash.jpg',
    lazy: true,
    modify: false,
    width: 1920,
    height: 1080,
    srcSet: [
      { maxBreakPoint: BreakPoint.xsx, width: media[BreakPoint.xsx].up.value },
      { maxBreakPoint: BreakPoint.sm, width: media[BreakPoint.sm].up.value },
      { maxBreakPoint: BreakPoint.md, width: media[BreakPoint.md].up.value },
      { maxBreakPoint: BreakPoint.lg, width: media[BreakPoint.lg].up.value },
    ],
  },
};
