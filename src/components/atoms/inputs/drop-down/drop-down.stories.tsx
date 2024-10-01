import { Meta, StoryObj } from '@storybook/react';
import DropDown from './drop-down';

const meta: Meta<typeof DropDown> = {
  title: 'Atoms/Inputs/DropDown',
  component: DropDown,
};

export default meta;
type Story = StoryObj<typeof DropDown>;

export const Main: Story = {
  args: {
    label: 'Email',
    defaultItem: { name: 'Default', value: 'default' },
    items: [{ name: 'a', value: 'd' }],
  },
};

export const Disabled: Story = {
  args: {
    label: 'Email',
    disabled: true,
    defaultItem: { name: 'Default', value: 'default' },
  },
};
