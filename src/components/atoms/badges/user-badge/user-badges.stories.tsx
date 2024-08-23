import { Meta, StoryObj } from '@storybook/react';
import UserBadge from './user-badge';

const meta: Meta<typeof UserBadge> = {
  title: 'Atoms/Badges/UserBadge',
  component: UserBadge,
};

export default meta;
type Story = StoryObj<typeof UserBadge>;

export const Main: Story = {
  args: {
    user: { firstName: 'Test', lastName: 'Test' },
  },
};
