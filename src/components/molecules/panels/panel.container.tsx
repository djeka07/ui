'use client';
import { useEffect, useId } from 'react';
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
  useEffect(() => {
    console.log(id);
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
  }, []);

  return null;
};

export default PanelContainer;
