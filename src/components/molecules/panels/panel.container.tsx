'use client';
import { useEffect } from 'react';
import { PanelProps } from './panel.type';
import { usePanels } from './use-panels';

const PanelContainer = ({
  afterPanelClosed,
  children,
  initialFocusOnElement,
  overlayElementProps,
  panelElementProps,
  putFocusOnCloseRef,
}: PanelProps): null => {
  const [, { pushPanelToContext }] = usePanels();
  useEffect(() => {
    pushPanelToContext({
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
  }, []);

  return null;
};

export default PanelContainer;
