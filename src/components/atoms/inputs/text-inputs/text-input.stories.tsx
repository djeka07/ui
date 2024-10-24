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
    name: 'Email',
    placeholder: 'Enter email',
  },
};

export const WithNoLabel: Story = {
  args: {
    material: false,
    name: 'Email',
    placeholder: 'Enter email',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Email',
    name: 'Email',
    disabled: true,
  },
};
