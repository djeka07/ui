import { Meta, StoryObj } from '@storybook/react';
import Icon from './icon';
import * as Svgs from './svgs';
import { IconProps } from './icon.props';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icons/Icon',
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Icons: Story = {
  render: (args: Partial<IconProps>) => (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Object.keys(Svgs).map((icon) => (
        <div key={icon} style={{ padding: 10 }}>
          <Icon name={icon as Svgs.IconNames} {...args} />
        </div>
      ))}
    </div>
  ),
};

export const WithLightBackground: Story = {
  render: (args: Partial<IconProps>) => (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Object.keys(Svgs).map((icon) => (
        <div key={icon} style={{ padding: 10 }}>
          <Icon name={icon as Svgs.IconNames} {...args} background="light" />
        </div>
      ))}
    </div>
  ),
};
export const WithBackground: Story = {
  render: (args: Partial<IconProps>) => (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Object.keys(Svgs).map((icon) => (
        <div key={icon} style={{ padding: 10 }}>
          <Icon name={icon as Svgs.IconNames} {...args} background="main" />
        </div>
      ))}
    </div>
  ),
};
export const WithDarkBackground: Story = {
  render: (args: Partial<IconProps>) => (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Object.keys(Svgs).map((icon) => (
        <div key={icon} style={{ padding: 10 }}>
          <Icon name={icon as Svgs.IconNames} {...args} background="dark" />
        </div>
      ))}
    </div>
  ),
};
