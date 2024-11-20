import type { Meta, StoryObj } from '@storybook/react';
import ActionButton from './action-button';

const meta: Meta<typeof ActionButton> = {
  title: 'Atoms/Inputs/ActionButton',
  component: ActionButton,
};

export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Light: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 8 }}>
      <div>
        <ActionButton iconName="AlertCircleOctagon" color="light" label="Primary" description="This is a description">
          Primary
        </ActionButton>
      </div>
    </div>
  ),
};

export const Main: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 8 }}>
      <div>
        <ActionButton iconName="AlertCircleOctagon" color="main" label="Primary" description="This is a description">
          Primary
        </ActionButton>
      </div>
    </div>
  ),
};

export const Dark: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 8 }}>
      <div>
        <ActionButton iconName="AlertCircleOctagon" color="dark" label="Primary" description="This is a description">
          Primary
        </ActionButton>
      </div>
    </div>
  ),
};
