import { EffectCallback, useEffect } from 'react';

export const useDidMount = (callback: EffectCallback): void => {
  useEffect(() => {
    return callback();
  }, []);
};
