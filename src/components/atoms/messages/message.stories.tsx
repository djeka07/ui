import type { Meta, StoryObj } from '@storybook/react';
import Message from './message';

const meta: Meta<typeof Message> = {
  title: 'Atoms/Messages/Message',
  component: Message,
};

export default meta;
type Story = StoryObj<typeof Message>;

export const Primary: Story = {
  args: {
    primary: true,
    icon: 'Message',
    children: `loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum 
    loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum 
    loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum `,
  },
};

export const Secondary: Story = {
  args: {
    secondary: true,
    icon: 'Message',
    children: `loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum 
    loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum 
    loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum `,
  },
};

export const Warning: Story = {
  args: {
    warning: true,
    children: `loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum 
    loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum 
    loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum `,
    icon: 'AlertTriangle',
  },
};

export const Info: Story = {
  args: {
    info: true,
    children: `loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum 
    loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum 
    loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum `,
    icon: 'AlertCircle',
  },
};

export const Success: Story = {
  args: {
    success: true,
    children: `loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum 
    loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum 
    loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum `,
    icon: 'AlertCircleOctagon',
  },
};

export const Error: Story = {
  args: {
    error: true,
    children: `loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum 
    loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum 
    loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum loreem ipsuum `,
    icon: 'AlertTriangle',
  },
};

export const Column: Story = {
  args: {
    error: true,
    iconSize: 'xxxlarge',
    children: 'loreem ipsuum loreem ipsuum loreem ipsuum loreem',
    icon: 'AlertTriangle',
    border: false,
    direction: 'column',
  },
};
