import { Meta, StoryObj } from '@storybook/react';
import TextInput from './text-input';

const meta: Meta<typeof TextInput> = {
  title: 'Atoms/Inputs/TextInput',
  component: TextInput,
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Main: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter email',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Email',
    disabled: true,
  },
};
