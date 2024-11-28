'use client';
import { createContext, ReactNode, useCallback, useState } from 'react';
import { PanelProps } from './panel.type';

enum PanelsActionTypes {
  PUSH_PANEL_TO_CONTEXT = 'PUSH_PANEL_TO_CONTEXT',
  REMOVE_PANEL_BY_POSITION = 'REMOVE_PANEL_BY_POSITION',
  CLEAR_ALL_PANELS = 'CLEAR_ALL_PANELS',
}
export type PushPanelToContext = {
  type: PanelsActionTypes.PUSH_PANEL_TO_CONTEXT;
  payload: PanelProps;
};
export type RemovePanelByPosition = {
  type: PanelsActionTypes.REMOVE_PANEL_BY_POSITION;
  position: number;
};
export type ClearAllPanels = {
  type: PanelsActionTypes.CLEAR_ALL_PANELS;
};

type PanelState = {
  panels: PanelProps[];
  hasPanels: boolean;
};

type PanelsContextActions = {
  pushPanelToContext: (panel: PanelProps) => void;
  removePanelByPosition: (position: number) => void;
  clearAllPanels: () => void;
};

type PanelContext = [PanelState, PanelsContextActions];

const initialPanelsContext: PanelContext = [
  {
    panels: [],
    hasPanels: false,
  },
  {
    pushPanelToContext: () => {
      throw Error('panels provider pushPanelToContext was not assigned');
    },
    removePanelByPosition: () => {
      throw Error('panels provider removePanelByPosition was not assigned');
    },
    clearAllPanels: () => {
      throw Error('panels provider clearAllPanels was not assigned');
    },
  },
];

type PanelProviderProps = { children: ReactNode | ReactNode[] };

export const PanelsContext = createContext<PanelContext>(initialPanelsContext);

export const PanelsProvider = (props: PanelProviderProps) => {
  const [state, setState] = useState<PanelState>(initialPanelsContext[0]);

  const pushPanelToContext = useCallback((panel: PanelProps) => {
    setState((prev) => {
      if (prev.panels.some((p) => p.id === panel.id)) {
        return prev;
      }
      const panels = [...prev.panels, panel];
      return { hasPanels: true, panels };
    });
  }, []);

  const clearAllPanels = useCallback(() => {
    setState(initialPanelsContext[0]);
  }, []);

  const removePanelByPosition = useCallback((position: number) => {
    setState((prev) => {
      const index = prev.panels.map((_, i) => i).indexOf(position);
      let panels = prev.panels;
      if (index > -1) {
        panels = panels.toSpliced(index, 1);
      }

      return {
        panels,
        hasPanels: panels.length > 0,
      };
    });
  }, []);

  const context: PanelContext = [
    state,
    {
      pushPanelToContext,
      removePanelByPosition,
      clearAllPanels,
    },
  ];

  return <PanelsContext.Provider value={context}>{props.children}</PanelsContext.Provider>;
};
