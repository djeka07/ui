import { ContentVariants, RootVariants, TitleWrapperVariants } from './panel-content.css';

export type PanelContentProps = RootVariants &
  TitleWrapperVariants &
  ContentVariants & {
    children: JSX.Element;
    title?: string;
    className?: string;
  };