import { useMemo } from 'react';
import media, { BreakPoint } from '../../../../../../styles/media.css';
import createSource from '../../create-source';
import sortSources from '../../sort-sources';
import { ImageProps } from '../../image.props';

type SrcSetsProps = Pick<ImageProps, 'src' | 'srcSet' | 'height' | 'focalPointY' | 'focalPointX' | 'pdis' | 'rect'> & {
  fit: string;
  quality: number;
  modify: boolean;
};

const SrcSets = ({
  src: source,
  srcSet,
  fit,
  modify,
  quality,
  height,
  rect,
  focalPointX,
  focalPointY,
  pdis,
}: SrcSetsProps) => {
  const sources = useMemo(() => sortSources(srcSet), [srcSet]);

  const createMedia = (breakPoint: BreakPoint): string => {
    const width = media[breakPoint]?.up?.value as number;
    return `(max-width: ${width - 8 / 100}px)`;
  };

  return (
    <>
      {sources?.map((set) => {
        let newSource = createSource({
          source,
          width: set.width,
          height: height,
          fit,
          quality,
          modify,
          rect: set.rect || rect,
          orientation: set.orientation || orientation,
          focalPointY,
          focalPointX,
        });
        if (pdis) {
          const setPdisSources = pdis.map(
            (pdi) =>
              `${createSource({ source, width: set.width * pdi, height: height * pdi, fit, quality, modify, rect: set.rect, orientation: set.orientation, focalPointY, focalPointX })} ${pdi}x`,
          );
          newSource = `${source}, ${setPdisSources.join(', ')}`;
        }

        return (
          <source key={`${newSource}-${set.maxBreakPoint}`} media={createMedia(set.maxBreakPoint)} srcSet={newSource} />
        );
      })}
    </>
  );
};

export default SrcSets;
