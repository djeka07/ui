'use client';

import { lazy, Suspense, useState } from 'react';
import { VideoProps } from './video.props';
import { AnimatePresence, m } from 'framer-motion';
import { Image } from '../images';
import { Icon } from '../../icons';
import { icon, play, root } from './video.css';
import { css } from '@djeka07/utils';

const LazyYoutubeVideo = lazy(() => import('./components/youtube/youtube-video'));
const LazyInternalVideo = lazy(() => import('./components/internal/internal-video'));

const Video = ({ type, src, id, className, autoPlay, image, ...rest }: VideoProps) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const onPlay = (isPlaying: boolean) => {
    setIsPlaying(isPlaying);
  };

  return (
    <div className={css(root, className)}>
      <Suspense>
        {(isPlaying || !image) && (
          <>
            {type === 'internal' && !!src && (
              <LazyInternalVideo
                src={src}
                hasImage={!!image}
                isPlaying={isPlaying}
                onPlay={onPlay}
                autoPlay={autoPlay}
                {...rest}
              />
            )}
            {type === 'youtube' && !!id && (
              <LazyYoutubeVideo isPlaying={isPlaying} id={id} onPlay={onPlay} autoPlay={autoPlay} {...rest} />
            )}
          </>
        )}
      </Suspense>
      <AnimatePresence initial={true}>
        {image && !isPlaying && (
          <m.div initial={{ opacity: 0, zIndex: 0 }} animate={{ opacity: 1, zIndex: 1 }} exit={{ opacity: 0 }}>
            <Image src={image.src} alt={image?.alt} width={640} height={360} lazy />
            {(id || src) && (
              <button onClick={() => onPlay(true)} className={play}>
                <Icon name="Play" className={icon} />
              </button>
            )}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Video;
