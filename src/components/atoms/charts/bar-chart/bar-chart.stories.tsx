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
    height: 200,
    items: [
      { label: 'Label', value: 300, color: '#3498db', renderValue: (value) => `${value}` },
      { label: 'Second', value: 50, color: '#3498db', renderValue: (value) => `${value}` },
      { label: 'Second', value: 200, color: '#3498db', renderValue: (value) => `${value}` },
      { label: 'Second', value: 100, color: '#3498db', renderValue: (value) => `${value}` },
      { label: 'Second', value: 10, color: '#3498db', renderValue: (value) => `${value}` },
      { label: 'Second', value: 150, color: '#3498db', renderValue: (value) => `${value}` },
    ],
  },
};
