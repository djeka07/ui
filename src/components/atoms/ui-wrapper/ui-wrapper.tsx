import { FeatureBundle, LazyFeatureBundle, LazyMotion } from 'framer-motion';
import { ReactNode } from 'react';

export const UiWrapper = ({
  children,
  features,
}: {
  children: ReactNode | ReactNode[];
  features: FeatureBundle | LazyFeatureBundle;
}) => <LazyMotion features={features}>{children}</LazyMotion>;
