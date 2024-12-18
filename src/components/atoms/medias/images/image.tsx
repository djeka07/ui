'use client';

import { useState, JSX } from 'react';
import { LazyLoad } from '../../lazies';
import { InternalImage } from './components/internal-image';
import { ImageProps } from './image.props';

const Image = ({
  rect,
  fit = 'crop',
  lazy = true,
  width,
  height,
  quality = 80,
  modify = true,
  ...rest
}: ImageProps): JSX.Element => {
  const [loaded, setLoaded] = useState(!lazy);
  const onLoad = () => setLoaded(true);

  if (lazy) {
    return (
      <LazyLoad triggerOnce height={height}>
        <InternalImage
          {...rest}
          loaded={loaded}
          onLoad={onLoad}
          rect={rect}
          fit={fit}
          modify={modify}
          width={width}
          height={height}
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
      height={height}
      quality={quality}
    />
  );
};

export default Image;
