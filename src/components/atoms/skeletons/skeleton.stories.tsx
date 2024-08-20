import { Meta, StoryObj } from '@storybook/react/*';
import Skeleton from './skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Atoms/Skeletons/Skeleton',
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const One: Story = {
  args: { amount: 1 },
};

export const Multiple: Story = {
  args: { amount: 10 },
};
