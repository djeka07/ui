import { Meta, StoryObj } from '@storybook/react';
import Video from './video';
import media, { BreakPoint } from '../../../../styles/media.css';

const meta: Meta<typeof Video> = {
  title: 'Atoms/Medias/Video',
  component: Video,
};

export default meta;
type Story = StoryObj<typeof Video>;

export const Internal: Story = {
  args: {
    type: 'internal',
    src: 'https://testrepoi.cdn.prismic.io/testrepoi/Z0BNn68jQArT1Kwc_11954800_1920_1080_60fps.mp4',
    image: {
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
  },
};

export const Youtube: Story = {
  args: {
    type: 'youtube',
    id: 'dVYl5ImNjow',
    image: {
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
  },
};

export const Empty: Story = {
  args: {
    image: {
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
  },
};

export const InternalNoImage: Story = {
  args: {
    type: 'internal',
    src: 'https://testrepoi.cdn.prismic.io/testrepoi/Z0BNn68jQArT1Kwc_11954800_1920_1080_60fps.mp4',
    autoPlay: true,
    muted: true,
  },
};

export const YoutubeNoImage: Story = {
  args: {
    type: 'youtube',
    id: 'Nl3SGUDn0-Q',
    autoPlay: true,
    muted: true,
  },
};

export const InternalWithLoop: Story = {
  args: {
    type: 'internal',
    src: 'https://testrepoi.cdn.prismic.io/testrepoi/Z0BNn68jQArT1Kwc_11954800_1920_1080_60fps.mp4',
    autoPlay: true,
    muted: true,
    loop: true,
    image: {
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
  },
};

export const YoutubeWithLoop: Story = {
  args: {
    type: 'youtube',
    id: 'Nl3SGUDn0-Q',
    autoPlay: true,
    muted: true,
    loop: true,
    image: {
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
  },
};

export const InternalWithoutControls: Story = {
  args: {
    type: 'internal',
    src: 'https://testrepoi.cdn.prismic.io/testrepoi/Z0BNn68jQArT1Kwc_11954800_1920_1080_60fps.mp4',
    autoPlay: true,
    muted: true,
    loop: true,
    controls: false,
    image: {
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
  },
};

export const YoutubeWithoutControls: Story = {
  args: {
    type: 'youtube',
    id: 'Nl3SGUDn0-Q',
    autoPlay: true,
    controls: false,
    image: {
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
  },
};
