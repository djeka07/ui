import { Meta, StoryObj } from '@storybook/react';
import Typography from './typography';

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typographies/Typography',
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const All: Story = {
  render: () => (
    <div>
      <Typography variant="hero">Hero</Typography>
      <Typography variant="h1">H1</Typography>
      <Typography variant="h2">H2</Typography>
      <Typography variant="h3">H3</Typography>
      <Typography variant="h4">H4</Typography>
      <Typography variant="h5">H5</Typography>
      <Typography variant="h6">H6</Typography>
      <Typography variant="body">Body</Typography>
      <Typography variant="caption">Caption</Typography>
      <Typography variant="label">Label</Typography>
      <Typography variant="p">P</Typography>
      <Typography variant="span">Span</Typography>
    </div>
  ),
};
