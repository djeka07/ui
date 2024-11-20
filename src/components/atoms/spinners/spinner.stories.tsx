import { Meta, StoryObj } from '@storybook/react';
import Spinner from './spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Atoms/Spinners/Spinner',
  component: Spinner,
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Light: Story = {
  args: {
    color: 'light',
  },
};
export const Main: Story = {
  args: {
    color: 'main',
  },
};
export const Dark: Story = {
  args: {
    color: 'dark',
  },
};
export const Error: Story = {
  args: {
    color: 'error',
  },
};

export const White: Story = {
  args: {
    color: 'white',
  },
};

export const Success: Story = {
  args: {
    color: 'success',
  },
};
