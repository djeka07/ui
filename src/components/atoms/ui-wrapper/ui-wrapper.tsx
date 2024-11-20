'use client';

import { domAnimation, LazyMotion } from 'framer-motion';
import { ReactNode } from 'react';

export const UiWrapper = ({ children }: { children: ReactNode | ReactNode[] }) => (
  <LazyMotion features={domAnimation}>{children}</LazyMotion>
);
