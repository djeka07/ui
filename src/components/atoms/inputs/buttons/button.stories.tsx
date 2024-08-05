import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Inputs/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Main: Story = {
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
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        <div>Main</div>
        <div>Dark</div>
      </div>
      <div style={{ display: 'grid', gap: 8 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <Button>{args.children}</Button>
          </div>
          <div>
            <Button outlined>{args.children}</Button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <Button isLoading>{args.children}</Button>
          </div>
          <div>
            <Button isLoading outlined>
              {args.children}
            </Button>
          </div>
        </div>
      </div>
    </>
  ),
};

export const Success: Story = {
  args: {
    children: 'Button',
    isLoading: true,
  },
  render: (args) => (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        <div>Main</div>
        <div>Outlined</div>
      </div>
      <div style={{ display: 'grid', gap: 8 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <Button success>{args.children}</Button>
          </div>
          <div>
            <Button success outlined>
              {args.children}
            </Button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <Button success isLoading>
              {args.children}
            </Button>
          </div>
          <div>
            <Button success isLoading outlined>
              {args.children}
            </Button>
          </div>
        </div>
      </div>
    </>
  ),
};

export const Error: Story = {
  args: {
    children: 'Button',
    isLoading: true,
  },
  render: (args) => (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        <div>Main</div>
        <div>Outlined</div>
      </div>
      <div style={{ display: 'grid', gap: 8 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <Button error>{args.children}</Button>
          </div>
          <div>
            <Button error outlined>
              {args.children}
            </Button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <Button error isLoading>
              {args.children}
            </Button>
          </div>
          <div>
            <Button error isLoading outlined>
              {args.children}
            </Button>
          </div>
        </div>
      </div>
    </>
  ),
};

export const Warning: Story = {
  args: {
    children: 'Button',
    isLoading: true,
  },
  render: (args) => (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        <div>Main</div>
        <div>Outlined</div>
      </div>
      <div style={{ display: 'grid', gap: 8 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <Button warning>{args.children}</Button>
          </div>
          <div>
            <Button warning outlined>
              {args.children}
            </Button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <Button warning isLoading>
              {args.children}
            </Button>
          </div>
          <div>
            <Button warning outlined isLoading>
              {args.children}
            </Button>
          </div>
        </div>
      </div>
    </>
  ),
};

export const Info: Story = {
  args: {
    children: 'Button',
    isLoading: true,
  },
  render: (args) => (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        <div>Main</div>
        <div>Outlined</div>
      </div>
      <div style={{ display: 'grid', gap: 8 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <Button info>{args.children}</Button>
          </div>
          <div>
            <Button info outlined>
              {args.children}
            </Button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <Button info isLoading>
              {args.children}
            </Button>
          </div>
          <div>
            <Button info outlined isLoading>
              {args.children}
            </Button>
          </div>
        </div>
      </div>
    </>
  ),
};

export const Transparent: Story = {
  args: {
    children: 'Button',
    isLoading: true,
  },
  render: (args) => (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        <div>Main</div>
      </div>
      <div style={{ display: 'grid', gap: 8 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <Button transparent>{args.children}</Button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <Button transparent isLoading>
              {args.children}
            </Button>
          </div>
        </div>
      </div>
    </>
  ),
};
