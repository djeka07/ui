import { Meta, StoryObj } from '@storybook/react';
import UserBadges from './user-badges';

const meta: Meta<typeof UserBadges> = {
  title: 'Atoms/Badges/UserBadges',
  component: UserBadges,
};

export default meta;
type Story = StoryObj<typeof UserBadges>;

export const Main: Story = {
  args: {
    items: [
      { firstName: 'Test', lastName: 'Test' },
      { firstName: 'First', lastName: 'Last' },
      { firstName: 'Hej', lastName: 'Hej' },
      { firstName: 'User', lastName: 'Badge' },
    ],
  },
};
