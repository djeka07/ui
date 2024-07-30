import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from './button';
import { ButtonVariants } from './button.css';

const meta: Meta<typeof Button> = {
  args: {},
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Main: Story = {
  argTypes: {
    color: {
      control: 'select',
      options: ['light', 'main', 'dark', 'normal'],
    },
    size: {
      control: 'select',
      options: ['xsmall', 'small', 'normal', 'large'],
    },
  },
  args: {
    color: 'main',
    size: 'normal',
    children: 'Button',
  },
};
