'use client';
import { EffectCallback, useEffect, useRef } from 'react';

const useDidUpdate = (callback: EffectCallback, dependencies: ReadonlyArray<unknown>): void => {
  const hasMount = useRef<boolean>(false);
  useEffect(() => {
    if (hasMount.current) {
      return callback();
    } else {
      hasMount.current = true;
    }
  }, dependencies);
};

export default useDidUpdate;
