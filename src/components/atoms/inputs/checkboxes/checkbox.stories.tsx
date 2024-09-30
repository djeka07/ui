import { Meta, StoryObj } from '@storybook/react';
import Checkbox from './checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Inputs/Checkbox',
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Main: Story = {
  args: {
    label: 'Label',
  },
};
