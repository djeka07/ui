import { Meta, StoryObj } from '@storybook/react';
import BarChart from './bar-chart';

const meta: Meta<typeof BarChart> = {
  title: 'Atoms/Charts/BarChart',
  component: BarChart,
};

export default meta;
type Story = StoryObj<typeof BarChart>;

export const Main: Story = {
  args: {
    height: 500,
    width: 500,
    data: [
      { label: 'Label', value: 300 },
      { label: 'Second', value: 50 },
      { label: 'Second', value: 200 },
      { label: 'Second', value: 100 },
      { label: 'Second', value: 10 },
      { label: 'Second', value: 150 },
    ],
  },
};
