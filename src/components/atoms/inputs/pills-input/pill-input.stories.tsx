import { Meta, StoryObj } from '@storybook/react';
import PillInput from './pill-input';

const meta: Meta<typeof PillInput> = {
  title: 'Atoms/Inputs/PillInput',
  component: PillInput,
};

export default meta;
type Story = StoryObj<typeof PillInput>;

export const Main: Story = {
  args: {
    label: 'Email',
    pills: [],
  },
};

export const WithPills: Story = {
  args: {
    label: 'Email',
    pills: [
      { id: '1', label: 'Text' },
      { id: '2', label: 'Label' },
    ],
  },
};
