/* eslint-disable react-hooks/rules-of-hooks */
import { Meta, StoryObj } from '@storybook/react';
import Switch, { Match } from './switch';
import { useState } from 'react';
import { Button } from '../inputs';

const meta: Meta<typeof Switch> = {
  title: 'Atoms/Switchs/Switch',
  component: Switch,
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const All: Story = {
  render: () => {
    const [state, setState] = useState('initial');

    const runState = () => {
      setState('loading');
      setTimeout(() => {
        setState('done');
      }, 500);
    };

    return (
      <div>
        <Switch expression={state}>
          <Match when="initial">Initial</Match>
          <Match when="loading">Loading</Match>
          <Match when="done">Done</Match>
        </Switch>
        <Button title="Start" onClick={runState}>
          Start
        </Button>
      </div>
    );
  },
};
