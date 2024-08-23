'use client';
import { JSX, useEffect } from 'react';
import { PanelProps } from '../panels/panel.type';
import { usePanels } from '../panels/use-panels';
import PanelRenderer from './panel-renderer';

const PanelsRendererContainer = (): JSX.Element => {
  const [{ hasPanels, panels }, { clearAllPanels, removePanelByPosition }] = usePanels();

  useEffect(() => {
    if (hasPanels && panels.some((panel: PanelProps) => panel !== null) === false) {
      clearAllPanels();
    }
  }, [panels.length, hasPanels]);
  return <PanelRenderer hasPanels={hasPanels} removePanelByPosition={removePanelByPosition} panels={panels} />;
};

export default PanelsRendererContainer;
