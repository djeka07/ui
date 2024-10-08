import { Dimension, useElementSize } from '@djeka07/hooks';
import { ReactNode, useEffect, useState } from 'react';

interface ElementSizeAwareRenderParams {
  size: Dimension | null;
  setElement: (element: HTMLElement | null) => void;
}

interface Props {
  render: (params: ElementSizeAwareRenderParams) => ReactNode;
  onChange?: (size: Dimension | null) => void;
}

const ElementSize = ({ render, onChange }: Props) => {
  const [element, setElement] = useState<HTMLElement | null>(null);

  const size = useElementSize(element);

  useEffect(() => {
    onChange?.(size);
  }, [size, onChange]);

  return <>{render({ setElement, size })}</>;
};

export default ElementSize;
