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
            <Button title="button">{args.children}</Button>
          </div>
          <div>
            <Button title="outlined" outlined>
              {args.children}
            </Button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <Button title="isloading" isLoading>
              {args.children}
            </Button>
          </div>
          <div>
            <Button title="isloading-outlined" isLoading outlined>
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
            <Button title="success" success>
              {args.children}
            </Button>
          </div>
          <div>
            <Button title="success-outlined" success outlined>
              {args.children}
            </Button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <Button title="success-loading" success isLoading>
              {args.children}
            </Button>
          </div>
          <div>
            <Button title="success-outlined-loading" success isLoading outlined>
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
            <Button title="error" error>
              {args.children}
            </Button>
          </div>
          <div>
            <Button title="error-outlined" error outlined>
              {args.children}
            </Button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <Button title="info-outlined" error isLoading>
              {args.children}
            </Button>
          </div>
          <div>
            <Button title="error-outlined-isloading" error isLoading outlined>
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
            <Button title="warning" warning>
              {args.children}
            </Button>
          </div>
          <div>
            <Button title="warning-outlined" warning outlined>
              {args.children}
            </Button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <Button title="warning-outlined-irloasing" warning isLoading>
              {args.children}
            </Button>
          </div>
          <div>
            <Button title="warning-outlined" warning outlined isLoading>
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
            <Button title="info-outlined" info>
              {args.children}
            </Button>
          </div>
          <div>
            <Button title="info-outlined" info outlined>
              {args.children}
            </Button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <Button title="info-outlined-isloading" info isLoading>
              {args.children}
            </Button>
          </div>
          <div>
            <Button title="info-outlined" info outlined isLoading>
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
            <Button title="transparent" transparent>
              {args.children}
            </Button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <Button title="isloading" transparent isLoading>
              {args.children}
            </Button>
          </div>
        </div>
      </div>
    </>
  ),
};
