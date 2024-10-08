'use client';
import { useDidMount } from '@djeka07/hooks';
import { useId } from 'react';
import { PanelProps } from './panel.type';
import { usePanels } from './use-panels';

const PanelContainer = ({
  afterPanelClosed,
  children,
  initialFocusOnElement,
  overlayElementProps,
  panelElementProps,
  putFocusOnCloseRef,
}: Omit<PanelProps, 'id'>): null => {
  const id = useId();
  const [, { pushPanelToContext }] = usePanels();

  useDidMount(() => {
    pushPanelToContext({
      id,
      afterPanelClosed,
      initialFocusOnElement,
      children,
      overlayElementProps,
      panelElementProps,
      putFocusOnCloseRef,
    });
    return () => {
      afterPanelClosed();
    };
  });

  return null;
};

export default PanelContainer;
