import React from 'react';
import { For } from '../../atoms';
import Panel from '../panels/panel';
import { PanelRendererProps } from './panel-renderer.props';

const PanelRenderer = ({ hasPanels, panels, removePanelByPosition }: PanelRendererProps) => (
  <div id="panel-renderer">
    {hasPanels && (
      <For each={panels} keyed={(_item, index) => `panel_${index}`}>
        {(item, index) => (
          <Panel
            afterPanelClosed={item.afterPanelClosed}
            removePanelFromContext={() => {
              removePanelByPosition(index);
            }}
            overlayElementProps={item.overlayElementProps}
            panelElementProps={item.panelElementProps}
            putFocusOnCloseRef={item.putFocusOnCloseRef}
            zIndex={50 + index}
            lastInStack={index === panels.length - 1}
            data-index={index}
          >
            {item.children}
          </Panel>
        )}
      </For>
    )}
  </div>
);

export default PanelRenderer;
