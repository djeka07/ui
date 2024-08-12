import { PanelProps } from './panel.type';

export type ExtendedPanelProps = PanelProps & {
  removePanelFromContext: () => void;
  lastInStack?: boolean;
  zIndex: number;
};