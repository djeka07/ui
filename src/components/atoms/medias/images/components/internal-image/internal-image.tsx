/* eslint-disable jsx-a11y/no-static-element-interactions */
import { css, isEnter } from '@djeka07/utils';
import { ImageProps } from '../../image.props';
import { image, root } from './internal-image.css';
import createSource from '../../create-source';
import { KeyboardEvent } from 'react';
import { SrcSets } from '../src-sets';

type InteralImageProps = Pick<
  ImageProps,
  | 'src'
  | 'width'
  | 'ratio'
  | 'focalPointX'
  | 'focalPointY'
  | 'pdis'
  | 'onClick'
  | 'orientation'
  | 'style'
  | 'className'
  | 'placeholder'
  | 'alt'
> & {
  rect: string;
  fit: string;
  quality: number;
  loaded: boolean;
  onLoad: () => void;
  modify: boolean;
};

const InternalImage = ({
  src: source,
  ratio,
  width,
  fit,
  focalPointX,
  focalPointY,
  modify,
  rect,
  quality,
  pdis,
  orientation,
  onClick,
  style,
  className,
  loaded,
  onLoad,
  placeholder,
  alt,
}: InteralImageProps) => {
  const handleImageLoaded = () => {
    if (!loaded) {
      onLoad();
    }
  };
  const newSource = createSource({
    source,
    width,
    height: width / ratio,
    fit,
    quality,
    modify,
    rect,
    orientation,
    focalPointY,
    focalPointX,
  });

  let pdisSource = '';
  if (pdis && process) {
    const pdisSources = pdis.map(
      (pdi) =>
        `${createSource({ source, width: width * pdi, height: (width / ratio) * pdi, fit, quality, modify, rect, orientation, focalPointY, focalPointX })} ${pdi}x`,
    );
    pdisSource = `, ${pdisSources.join(', ')}`;
  }

  const onKeyDown = (event: KeyboardEvent) => {
    if (isEnter(event)) {
      onClick?.();
    }
  };

  return (
    <>
      <picture
        style={{ ...(style || {}), paddingTop: `${100 / ratio}%` }}
        onClick={onClick}
        className={css(root, className)}
        onKeyDown={onClick ? onKeyDown : undefined}
      >
        <SrcSets
          pdis={pdis}
          fit={fit}
          modify={modify}
          quality={quality}
          ratio={ratio}
          rect={rect}
          src={source}
          focalPointX={focalPointX}
          focalPointY={focalPointY}
        />
        <source srcSet={newSource ? `${newSource}${pdisSource}` : placeholder} />
        <img
          ref={(input) => {
            if (input?.complete) {
              handleImageLoaded();
            }
          }}
          className={image({ loaded })}
          src={newSource || placeholder}
          alt={alt}
          onLoad={handleImageLoaded}
        />
      </picture>
    </>
  );
};

export default InternalImage;
