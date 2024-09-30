import { Meta, StoryObj } from '@storybook/react';
import TextArea from './text-area';

const meta: Meta<typeof TextArea> = {
  title: 'Atoms/Inputs/TextArea',
  component: TextArea,
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Main: Story = {
  args: {
    label: 'Message',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Message',
    disabled: true,
  },
};
