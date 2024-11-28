/* eslint-disable jsx-a11y/media-has-caption */
import { useCallback, useEffect, useRef } from 'react';
import { video as videoClass } from '../../video.css';

type InternalVideoProps = {
  src: string;
  noDownload?: boolean;
  isPlaying: boolean;
  playsInline?: boolean;
  muted?: boolean;
  hasImage: boolean;
  loop?: boolean;
  autoPlay?: boolean;
  controls?: boolean;
  onPlay: (playing: boolean) => void;
};

type VideoElement = HTMLVideoElement & {
  play: () => void;
};

const InternalVideo = ({
  src,
  hasImage,
  noDownload = true,
  loop = false,
  autoPlay = false,
  muted = false,
  playsInline = true,
  controls = true,
  onPlay,
  isPlaying,
}: InternalVideoProps): JSX.Element => {
  const ref = useRef<VideoElement>(null);

  const videoEnded = useCallback(() => {
    onPlay(false);
  }, [onPlay]);

  useEffect(() => {
    const { current } = ref || {};
    if ((isPlaying || autoPlay) && current) {
      current.play();
    }
  }, [isPlaying, onPlay, autoPlay]);

  useEffect(() => {
    const currentVideo = ref.current;
    if (currentVideo) {
      currentVideo.addEventListener('ended', videoEnded);
    }

    return () => {
      if (currentVideo) {
        currentVideo.removeEventListener('ended', videoEnded);
      }
    };
  }, [src, videoEnded]);

  return (
    <video
      className={videoClass}
      src={src}
      loop={loop}
      autoPlay={autoPlay}
      playsInline={playsInline}
      muted={muted}
      ref={ref}
      controls={controls && (isPlaying || !hasImage)}
      controlsList={noDownload ? 'nodownload' : undefined}
    />
  );
};

export default InternalVideo;
