'use client';

import { useFirstInViewport } from '@djeka07/hooks';
import { m } from 'framer-motion';
import { ReactNode, Suspense, useRef } from 'react';

type LazyLoadProps = {
  children: ReactNode;
  placeholder?: ReactNode;
  root?: Element | null;
  fadeIn?: boolean;
  rootMargin?: string;
  threshold?: number;
  triggerOnce?: boolean;
  height?: number | string;
};

const ChildrenWrapper = ({ children, fadeIn }: Pick<LazyLoadProps, 'children' | 'fadeIn'>) => {
  if (!fadeIn) {
    return children;
  }

  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {children}
    </m.div>
  );
};

const LazyLoad = ({
  children,
  threshold = 0,
  fadeIn = true,
  placeholder,
  root = null,
  rootMargin = '0px 0px 0px 0px',
  triggerOnce = true,
  height,
}: LazyLoadProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const entered = useFirstInViewport(ref, { threshold, root, rootMargin, triggerOnce });
  return (
    <div style={{ height: !entered ? height : undefined }} ref={ref}>
      {entered && (
        <Suspense fallback={placeholder}>
          <ChildrenWrapper fadeIn={fadeIn}>{children}</ChildrenWrapper>
        </Suspense>
      )}
    </div>
  );
};

export default LazyLoad;
