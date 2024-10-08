import { Meta, StoryObj } from '@storybook/react';
import LineChart from './line-chart';

const meta: Meta<typeof LineChart> = {
  title: 'Atoms/Charts/LineChart',
  component: LineChart,
};

export default meta;
type Story = StoryObj<typeof LineChart>;

export const Main: Story = {
  args: {
    height: 500,
  },
};
