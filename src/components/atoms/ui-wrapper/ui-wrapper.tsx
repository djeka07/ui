'use client';

import { FeatureBundle, LazyFeatureBundle, LazyMotion } from 'framer-motion';
import { ReactNode } from 'react';

export const UiWrapper = ({
  children,
  features,
  strict = true,
}: {
  children: ReactNode | ReactNode[];
  features: FeatureBundle | LazyFeatureBundle;
  strict?: boolean;
}) => (
  <LazyMotion strict={strict} features={features}>
    {children}
  </LazyMotion>
);
