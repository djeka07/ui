import { Meta, StoryObj } from '@storybook/react/*';
import PanelContainer from './panel.container';
import { Button } from '../../atoms';
import { useState } from 'react';
import { PanelContent } from '../panel-contents';
import { PanelPosition, PanelSize } from './panel.type';
import { PanelsRendererContainer } from '../panel-renderers';
import { PanelsProvider } from './panel.context';

const meta: Meta<typeof PanelContainer> = {
  title: 'Molecules/Panels/Panel',
  component: PanelContainer,
};

export default meta;
type Story = StoryObj<typeof PanelContainer>;

export const SmallFromRight: Story = {
  render: () => {
    const [show, setShow] = useState(false);
    return (
      <PanelsProvider>
        <div>
          <Button onClick={() => setShow(true)}>Open</Button>
          {show && (
            <PanelContainer
              afterPanelClosed={() => {
                setTimeout(() => {
                  setShow(false);
                }, 300);
              }}
              panelElementProps={{ maxWidth: PanelSize.Small, panelPosition: PanelPosition.Right }}
            >
              <PanelContent>Hej</PanelContent>
            </PanelContainer>
          )}
        </div>
        <PanelsRendererContainer />
      </PanelsProvider>
    );
  },
};

export const SmallFromLeft: Story = {
  render: () => {
    const [show, setShow] = useState(false);
    return (
      <PanelsProvider>
        <div>
          <Button onClick={() => setShow(true)}>Open</Button>
          {show && (
            <PanelContainer
              afterPanelClosed={() => {
                setTimeout(() => {
                  setShow(false);
                }, 300);
              }}
              panelElementProps={{ maxWidth: PanelSize.Small, panelPosition: PanelPosition.Left }}
            >
              <PanelContent>Hej</PanelContent>
            </PanelContainer>
          )}
        </div>
        <PanelsRendererContainer />
      </PanelsProvider>
    );
  },
};

export const SmallFromTop: Story = {
  render: () => {
    const [show, setShow] = useState(false);
    return (
      <PanelsProvider>
        <div>
          <Button onClick={() => setShow(true)}>Open</Button>
          {show && (
            <PanelContainer
              afterPanelClosed={() => {
                setTimeout(() => {
                  setShow(false);
                }, 300);
              }}
              panelElementProps={{ maxWidth: PanelSize.Small, panelPosition: PanelPosition.Top }}
            >
              <PanelContent>Hej</PanelContent>
            </PanelContainer>
          )}
        </div>
        <PanelsRendererContainer />
      </PanelsProvider>
    );
  },
};

export const SmallFromBottom: Story = {
  render: () => {
    const [show, setShow] = useState(false);
    return (
      <PanelsProvider>
        <div>
          <Button onClick={() => setShow(true)}>Open</Button>
          {show && (
            <PanelContainer
              afterPanelClosed={() => {
                setTimeout(() => {
                  setShow(false);
                }, 300);
              }}
              panelElementProps={{ maxWidth: PanelSize.Small, panelPosition: PanelPosition.Bottom }}
            >
              <PanelContent>Hej</PanelContent>
            </PanelContainer>
          )}
        </div>
        <PanelsRendererContainer />
      </PanelsProvider>
    );
  },
};

export const SmallFromCenter: Story = {
  render: () => {
    const [show, setShow] = useState(false);
    return (
      <PanelsProvider>
        <div>
          <Button onClick={() => setShow(true)}>Open</Button>
          {show && (
            <PanelContainer
              afterPanelClosed={() => {
                setTimeout(() => {
                  setShow(false);
                }, 300);
              }}
              panelElementProps={{ maxWidth: PanelSize.Small, panelPosition: PanelPosition.Center }}
            >
              <PanelContent>Hej</PanelContent>
            </PanelContainer>
          )}
        </div>
        <PanelsRendererContainer />
      </PanelsProvider>
    );
  },
};