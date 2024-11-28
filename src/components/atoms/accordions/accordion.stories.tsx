import { Meta, StoryObj } from '@storybook/react';
import Accordion from './accordion';
import { Image } from '../medias';

const meta: Meta<typeof Accordion> = {
  title: 'Atoms/Accordions/Accordion',
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Light: Story = {
  args: {
    autoChangeMs: 5000,
    title: 'Test',
    icon: 'lock',
    background: 'light',
    iconSize: 'large',
    items: [
      {
        title: 'Test',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
      {
        title: 'Test again',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
      {
        title: 'Testing on last time',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
    ],
  },
};

export const Main: Story = {
  args: {
    autoChangeMs: 5000,
    title: 'Test',
    icon: 'lock',
    background: 'main',
    iconSize: 'large',
    items: [
      {
        title: 'Test',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
      {
        title: 'Test again',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
      {
        title: 'Testing on last time',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
    ],
  },
};

export const Dark: Story = {
  args: {
    autoChangeMs: 5000,
    title: 'Test',
    icon: 'lock',
    background: 'dark',
    iconSize: 'large',
    items: [
      {
        title: 'Test',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
      {
        title: 'Test again',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
      {
        title: 'Testing on last time',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
    ],
  },
};

export const LightWithBackground: Story = {
  args: {
    autoChangeMs: 5000,
    title: 'Test',
    icon: 'lock',
    background: 'light',
    layout: 'background',
    iconSize: 'large',
    items: [
      {
        title: 'Test',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
      {
        title: 'Test again',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
      {
        title: 'Testing on last time',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
    ],
  },
};

export const LightWithBorder: Story = {
  args: {
    autoChangeMs: 5000,
    title: 'Test',
    icon: 'lock',
    background: 'light',
    layout: 'border-bottom',
    iconSize: 'large',
    items: [
      {
        title: 'Test',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
      {
        title: 'Test again',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
      {
        title: 'Testing on last time',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
    ],
  },
};

export const MainWithBackground: Story = {
  args: {
    autoChangeMs: 5000,
    title: 'Test',
    icon: 'lock',
    background: 'main',
    layout: 'background',
    iconSize: 'large',
    items: [
      {
        title: 'Test',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
      {
        title: 'Test again',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
      {
        title: 'Testing on last time',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
    ],
  },
};

export const MainWithBorder: Story = {
  args: {
    autoChangeMs: 5000,
    title: 'Test',
    icon: 'lock',
    background: 'main',
    layout: 'border-bottom',
    iconSize: 'large',
    items: [
      {
        title: 'Test',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
      {
        title: 'Test again',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
      {
        title: 'Testing on last time',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
    ],
  },
};

export const DarkWithBackground: Story = {
  args: {
    autoChangeMs: 5000,
    initial: null,
    title: 'Test',
    icon: 'lock',
    background: 'dark',
    layout: 'background',
    iconSize: 'large',
    items: [
      {
        title: 'Test',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
      {
        title: 'Test again',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
      {
        title: 'Testing on last time',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
    ],
  },
};

export const DarkWithBorder: Story = {
  args: {
    autoChangeMs: 0,
    initial: null,
    title: 'Test',
    icon: 'lock',
    background: 'dark',
    layout: 'border-bottom',
    iconSize: 'large',
    items: [
      {
        title: 'Test',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
      {
        title: 'Test again',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
      {
        title: 'Testing on last time',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
    ],
  },
};

export const WithChild: Story = {
  args: {
    autoChangeMs: 5000,
    initial: null,
    title: 'Test',
    icon: 'lock',
    background: 'dark',
    iconSize: 'large',
    items: [
      {
        title: 'Test',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
      {
        title: 'Test again',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
      {
        title: 'Testing on last time',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
    ],
    children: (
      <Image
        src="https://images.prismic.io/testrepoi/Zz8Vba8jQArT1HJD_markus-winkler-LZ8Q70HR6nw-unsplash.jpg"
        alt="hejsn"
        width={1920}
        height={1080}
      />
    ),
  },
};

export const WithMultipleChildren: Story = {
  args: {
    autoChangeMs: 5000,
    title: 'Test',
    icon: 'lock',
    background: 'dark',
    iconSize: 'large',
    items: [
      {
        title: 'Test',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
      {
        title: 'Test again',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
      {
        title: 'Testing on last time',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum laoreet porttitor. Donec posuere, sapien porttitor egestas iaculis, nunc tortor rutrum mi, vel euismod enim est eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      },
    ],
    children: (props) => {
      switch (props.index) {
        case 0:
          return (
            <Image
              src="https://images.prismic.io/testrepoi/Zz8Vba8jQArT1HJD_markus-winkler-LZ8Q70HR6nw-unsplash.jpg"
              alt="hejsn"
              width={1920}
              height={1080}
            />
          );
        case 1:
          return (
            <Image
              src="https://images.prismic.io/testrepoi/Z0hXPpbqstJ973Ef_wolfgang-hasselmann-zMC_-44l_oo-unsplash.jpg"
              alt="hejsn"
              width={1920}
              height={1080}
            />
          );
        case 2:
          return (
            <Image
              src="https://images.prismic.io/testrepoi/Z0hXPpbqstJ973Eg_martin-masson-BkAEKU26osY-unsplash.jpg"
              alt="hejsn"
              width={1920}
              height={1080}
            />
          );
        default:
          return (
            <Image
              src="https://images.prismic.io/testrepoi/Z0hXspbqstJ973E1_j-balla-photography-PxQ_jfrBvq4-unsplash.jpg"
              alt="hejsn"
              width={1920}
              height={1080}
            />
          );
      }
    },
  },
};
