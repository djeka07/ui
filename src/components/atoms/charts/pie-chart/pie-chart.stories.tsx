import { Meta, StoryObj } from '@storybook/react';
import PieChart from './pie-chart';

const meta: Meta<typeof PieChart> = {
  title: 'Atoms/Charts/PieChart',
  component: PieChart,
};

export default meta;
type Story = StoryObj<typeof PieChart>;

export const Main: Story = {
  args: {
    items: [
      { label: 'First', labelColor: '#FFF', value: 300, color: '#b0006a' },
      { label: 'Second', labelColor: '#FFF', value: 100, color: '#8b00dc' },
      { label: 'Third', labelColor: '#000', value: 200, color: '#abac00' },
    ],
  },
};

export const One: Story = {
  args: {
    items: [{ label: 'First', labelColor: '#FFF', value: 300, color: '#b0006a' }],
  },
};
