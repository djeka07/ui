import { Ref, ReactNode } from 'react';

export type PanelElementProps = {
  maxWidth?: PanelSize;
  maxHeight?: PanelSize;
  panelPosition?: PanelPosition;
  showCloseButton?: boolean;
  closeOnEscape?: boolean;
};

export type OverlayElementProps = {
  shouldCloseOnClick?: boolean;
};

export type PanelChildrenReturn = {
  closePanel: () => void;
};

export type PanelProps = {
  id: string;
  children: ((params: PanelChildrenReturn) => ReactNode) | ReactNode;
  putFocusOnCloseRef?: Ref<undefined>;
  initialFocusOnElement?: HTMLElement | null;
  panelElementProps?: PanelElementProps;
  overlayElementProps?: OverlayElementProps;
  afterPanelClosed: () => void;
};

export type PanelAnimationDuration = {
  overlay: {
    in: number;
    out: number;
  };
  panel: {
    in: number;
    out: number;
  };
};

export enum PanelSize {
  Xxsmall = '250px',
  Xsmall = '350px',
  Small = '500px',
  Medium = '700px',
  Large = '850px',
  Xlarge = '1024px',
  Xxlarge = '1280px',
  Max = '100%',
}

export enum PanelPosition {
  Right = 'Right',
  Left = 'Left',
  Center = 'Center',
  Top = 'Top',
  Bottom = 'Bottom',
  Screen = 'Screen',
}

export enum PanelDelayDuration {
  Quicker = 500,
  Quick = 700,
  Short = 1000,
  Medium = 1500,
  Long = 2000,
  Longer = 3000,
  Longest = 5000,
}
