import { Meta, StoryObj } from '@storybook/react/*';
import TextInput from './text-input';
import { label } from './text-input.css';

const meta: Meta<typeof TextInput> = {
  title: 'Atoms/Inputs/TextInput',
  component: TextInput,
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Main: Story = {
  args: {
    label: 'Email',
  },
};
