import { Meta, StoryObj } from '@storybook/react/*';
import Spinner from './spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Atoms/Spinners/Spinner',
  component: Spinner,
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Main: Story = {
  args: {
    color: 'success',
  },
};
