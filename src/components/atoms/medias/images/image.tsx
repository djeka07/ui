'use client';

import { useState, JSX } from 'react';
import { LazyLoad } from '../../lazies';
import { InternalImage } from './components/internal-image';
import { ImageProps } from './image.props';

const Image = ({
  rect = 'center,center,10000,10000',
  fit = 'crop',
  lazy = true,
  width,
  ratio,
  quality = 80,
  modify = true,
  ...rest
}: ImageProps): JSX.Element => {
  const [loaded, setLoaded] = useState(process?.env?.NODE_ENV !== undefined);
  const onLoad = () => setLoaded(true);

  if (lazy) {
    return (
      <LazyLoad triggerOnce height={width / ratio}>
        <InternalImage
          {...rest}
          loaded={loaded}
          onLoad={onLoad}
          rect={rect}
          fit={fit}
          modify={modify}
          width={width}
          ratio={ratio}
          quality={quality}
        />
      </LazyLoad>
    );
  }
  return (
    <InternalImage
      {...rest}
      loaded={loaded}
      onLoad={onLoad}
      rect={rect}
      fit={fit}
      modify={modify}
      width={width}
      ratio={ratio}
      quality={quality}
    />
  );
};

export default Image;
