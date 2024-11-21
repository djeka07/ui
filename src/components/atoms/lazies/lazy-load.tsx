'use client';

import { ReactNode, RefObject, Suspense, useEffect, useRef, useState } from 'react';

const useFirstInViewport = (
  ref: RefObject<HTMLElement | null>,
  { triggerOnce, ...rest }: IntersectionObserverInit & { triggerOnce?: boolean } = { triggerOnce: true },
) => {
  const [entered, setEntered] = useState(false);
  const observerRef = useRef(
    new IntersectionObserver(([entry]) => {
      if (entry) {
        console.log(entry);
        setEntered(entry.isIntersecting);
      }
    }, rest),
  );

  useEffect(() => {
    const currentRef = ref.current;
    const currentObserver = observerRef.current;

    if (entered && triggerOnce) {
      currentObserver.disconnect();
      return;
    }
    if (currentRef && !entered) {
      currentObserver.observe(currentRef);
      return;
    }

    return () => currentObserver.disconnect();
  }, [entered, triggerOnce, ref]);

  return entered;
};

type LazyLoadProps = {
  children: ReactNode;
  placeholder?: ReactNode;
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
  triggerOnce?: boolean;
  height?: number | string;
};

const LazyLoad = ({
  children,
  threshold = 0,
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
      {entered && <Suspense fallback={placeholder}>{children}</Suspense>}
    </div>
  );
};

export default LazyLoad;
