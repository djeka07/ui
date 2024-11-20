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

export const Success: Story = {
  render: () => (
    <div>
      <Typography color="success" variant="hero">
        Hero
      </Typography>
      <Typography color="success" variant="h1">
        H1
      </Typography>
      <Typography color="success" variant="h2">
        H2
      </Typography>
      <Typography color="success" variant="h3">
        H3
      </Typography>
      <Typography color="success" variant="h4">
        H4
      </Typography>
      <Typography color="success" variant="h5">
        H5
      </Typography>
      <Typography color="success" variant="h6">
        H6
      </Typography>
      <Typography color="success" variant="body">
        Body
      </Typography>
      <Typography color="success" variant="caption">
        Caption
      </Typography>
      <Typography color="success" variant="label">
        Label
      </Typography>
      <Typography color="success" variant="p">
        P
      </Typography>
      <Typography color="success" variant="span">
        Span
      </Typography>
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div>
      <Typography color="error" variant="hero">
        Hero
      </Typography>
      <Typography color="error" variant="h1">
        H1
      </Typography>
      <Typography color="error" variant="h2">
        H2
      </Typography>
      <Typography color="error" variant="h3">
        H3
      </Typography>
      <Typography color="error" variant="h4">
        H4
      </Typography>
      <Typography color="error" variant="h5">
        H5
      </Typography>
      <Typography color="error" variant="h6">
        H6
      </Typography>
      <Typography color="error" variant="body">
        Body
      </Typography>
      <Typography color="error" variant="caption">
        Caption
      </Typography>
      <Typography color="error" variant="label">
        Label
      </Typography>
      <Typography color="error" variant="p">
        P
      </Typography>
      <Typography color="error" variant="span">
        Span
      </Typography>
    </div>
  ),
};

export const Info: Story = {
  render: () => (
    <div>
      <Typography color="info" variant="hero">
        Hero
      </Typography>
      <Typography color="info" variant="h1">
        H1
      </Typography>
      <Typography color="info" variant="h2">
        H2
      </Typography>
      <Typography color="info" variant="h3">
        H3
      </Typography>
      <Typography color="info" variant="h4">
        H4
      </Typography>
      <Typography color="info" variant="h5">
        H5
      </Typography>
      <Typography color="info" variant="h6">
        H6
      </Typography>
      <Typography color="info" variant="body">
        Body
      </Typography>
      <Typography color="info" variant="caption">
        Caption
      </Typography>
      <Typography color="info" variant="label">
        Label
      </Typography>
      <Typography color="info" variant="p">
        P
      </Typography>
      <Typography color="info" variant="span">
        Span
      </Typography>
    </div>
  ),
};

export const Warning: Story = {
  render: () => (
    <div>
      <Typography color="warning" variant="hero">
        Hero
      </Typography>
      <Typography color="warning" variant="h1">
        H1
      </Typography>
      <Typography color="warning" variant="h2">
        H2
      </Typography>
      <Typography color="warning" variant="h3">
        H3
      </Typography>
      <Typography color="warning" variant="h4">
        H4
      </Typography>
      <Typography color="warning" variant="h5">
        H5
      </Typography>
      <Typography color="warning" variant="h6">
        H6
      </Typography>
      <Typography color="warning" variant="body">
        Body
      </Typography>
      <Typography color="warning" variant="caption">
        Caption
      </Typography>
      <Typography color="warning" variant="label">
        Label
      </Typography>
      <Typography color="warning" variant="p">
        P
      </Typography>
      <Typography color="warning" variant="span">
        Span
      </Typography>
    </div>
  ),
};
