import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Inputs/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  argTypes: {
    size: {
      control: 'select',
      options: ['xsmall', 'small', 'normal', 'large'],
    },
  },
  args: {
    size: 'normal',
    children: 'Button',
  },
  render: (args) => (
    <div style={{ display: 'grid', gap: 8 }}>
      <div>
        <Button label="Primary">{args.children}</Button>
      </div>
      <div>
        <Button label="Primary outline" outlined>
          {args.children}
        </Button>
      </div>
      <div>
        <Button label="Primary loading" isLoading>
          {args.children}
        </Button>
      </div>
      <div>
        <Button label="Primary outline loading" isLoading outlined>
          {args.children}
        </Button>
      </div>
    </div>
  ),
};

export const Secondary: Story = {
  argTypes: {
    size: {
      control: 'select',
      options: ['xsmall', 'small', 'normal', 'large'],
    },
  },
  args: {
    size: 'normal',
    children: 'Button',
  },
  render: (args) => (
    <div style={{ display: 'grid', gap: 8 }}>
      <div>
        <Button secondary label="Secondary">
          {args.children}
        </Button>
      </div>
      <div>
        <Button secondary label="Secondary outline" outlined>
          {args.children}
        </Button>
      </div>
      <div>
        <Button secondary label="Secondary loading" isLoading>
          {args.children}
        </Button>
      </div>
      <div>
        <Button secondary label="Secondary outline loading" isLoading outlined>
          {args.children}
        </Button>
      </div>
    </div>
  ),
};

export const Success: Story = {
  args: {
    children: 'Button',
    isLoading: true,
  },
  render: (args) => (
    <div style={{ display: 'grid', gap: 8 }}>
      <div>
        <Button label="Success" success>
          {args.children}
        </Button>
      </div>
      <div>
        <Button label="Success outline" success outlined>
          {args.children}
        </Button>
      </div>
      <div>
        <Button label="Success loading" success isLoading>
          {args.children}
        </Button>
      </div>
      <div>
        <Button label="Success outline loading" success isLoading outlined>
          {args.children}
        </Button>
      </div>
    </div>
  ),
};

export const Error: Story = {
  args: {
    children: 'Button',
    isLoading: true,
  },
  render: (args) => (
    <div style={{ display: 'grid', gap: 8 }}>
      <div>
        <Button label="Error" error>
          {args.children}
        </Button>
      </div>
      <div>
        <Button label="Error outline" error outlined>
          {args.children}
        </Button>
      </div>
      <div>
        <Button label="Error loading" error isLoading>
          {args.children}
        </Button>
      </div>
      <div>
        <Button label="Error outline loading" error isLoading outlined>
          {args.children}
        </Button>
      </div>
    </div>
  ),
};

export const Warning: Story = {
  args: {
    children: 'Button',
    isLoading: true,
  },
  render: (args) => (
    <div style={{ display: 'grid', gap: 8 }}>
      <div>
        <Button label="Warning" warning>
          {args.children}
        </Button>
      </div>
      <div>
        <Button label="Warning outline" warning outlined>
          {args.children}
        </Button>
      </div>
      <div>
        <Button label="Warning loading" warning isLoading>
          {args.children}
        </Button>
      </div>
      <div>
        <Button label="Warning outline loading" warning outlined isLoading>
          {args.children}
        </Button>
      </div>
    </div>
  ),
};

export const Info: Story = {
  args: {
    children: 'Button',
    isLoading: true,
  },
  render: (args) => (
    <div style={{ display: 'grid', gap: 8 }}>
      <div>
        <Button label="Info" info>
          {args.children}
        </Button>
      </div>
      <div>
        <Button label="Info outline" info outlined>
          {args.children}
        </Button>
      </div>
      <div>
        <Button label="Info loading" info isLoading>
          {args.children}
        </Button>
      </div>
      <div>
        <Button label="Info outline loading" info outlined isLoading>
          {args.children}
        </Button>
      </div>
    </div>
  ),
};

export const Transparent: Story = {
  args: {
    children: 'Button',
    isLoading: true,
  },
  render: (args) => (
    <div style={{ display: 'grid', gap: 8 }}>
      <div>
        <Button label="Transparent" transparent>
          {args.children}
        </Button>
      </div>
      <div>
        <Button label="Transparent loading" transparent isLoading>
          {args.children}
        </Button>
      </div>
    </div>
  ),
};
