import { domAnimation, LazyMotion } from 'framer-motion';
import { ReactNode } from 'react';

const UiWrapper = ({ children }: { children: ReactNode | ReactNode[] }) => (
  <LazyMotion features={domAnimation}>{children}</LazyMotion>
);

export default UiWrapper;
