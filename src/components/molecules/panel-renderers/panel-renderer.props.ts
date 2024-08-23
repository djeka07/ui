import { PanelProps } from '../panels';

export type PanelRendererProps = {
  hasPanels: boolean;
  panels: PanelProps[];
  removePanelByPosition: (index: number) => void;
};
