import  React, { useContext } from 'react';
import { PanelsContext } from './panel.context';

export const usePanels = () => useContext(PanelsContext);
