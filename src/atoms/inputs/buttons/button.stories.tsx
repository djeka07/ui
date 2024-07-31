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
};

export const Success: Story = {
  args: {
    children: 'Button',
    isLoading: true,
  },
  render: (args) => (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        <div>Light</div>
        <div>Main</div>
        <div>Dark</div>
      </div>
      <div style={{ display: 'grid', gap: 8 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <Button success light>
              {args.children}
            </Button>
          </div>
          <div>
            <Button success>{args.children}</Button>
          </div>
          <div>
            <Button success dark>
              {args.children}
            </Button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <Button success light isLoading>
              {args.children}
            </Button>
          </div>
          <div>
            <Button success isLoading>
              {args.children}
            </Button>
          </div>
          <div>
            <Button success isLoading dark>
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
        <div>Light</div>
        <div>Main</div>
        <div>Dark</div>
      </div>
      <div style={{ display: 'grid', gap: 8 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <Button error light>
              {args.children}
            </Button>
          </div>
          <div>
            <Button error>{args.children}</Button>
          </div>
          <div>
            <Button error dark>
              {args.children}
            </Button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <Button error light isLoading>
              {args.children}
            </Button>
          </div>
          <div>
            <Button error isLoading>
              {args.children}
            </Button>
          </div>
          <div>
            <Button error isLoading dark>
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
        <div>Light</div>
        <div>Main</div>
        <div>Dark</div>
      </div>
      <div style={{ display: 'grid', gap: 8 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <Button warning light>
              {args.children}
            </Button>
          </div>
          <div>
            <Button warning>{args.children}</Button>
          </div>
          <div>
            <Button warning dark>
              {args.children}
            </Button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <Button warning light isLoading>
              {args.children}
            </Button>
          </div>
          <div>
            <Button warning isLoading>
              {args.children}
            </Button>
          </div>
          <div>
            <Button warning isLoading dark>
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
        <div>Light</div>
        <div>Main</div>
        <div>Dark</div>
      </div>
      <div style={{ display: 'grid', gap: 8 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <Button info light>
              {args.children}
            </Button>
          </div>
          <div>
            <Button info>{args.children}</Button>
          </div>
          <div>
            <Button info dark>
              {args.children}
            </Button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <Button info light isLoading>
              {args.children}
            </Button>
          </div>
          <div>
            <Button info isLoading>
              {args.children}
            </Button>
          </div>
          <div>
            <Button info isLoading dark>
              {args.children}
            </Button>
          </div>
        </div>
      </div>
    </>
  ),
};
