import { ReactNode } from 'react';
import { ContentVariants, RootVariants, TitleWrapperVariants } from './panel-content.css';

export type PanelContentProps = RootVariants &
  TitleWrapperVariants &
  ContentVariants & {
    children: ReactNode;
    title?: string;
    className?: string;
  };
