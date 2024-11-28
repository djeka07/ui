import { useCallback, useEffect, useRef } from 'react';
import { video } from '../../video.css';

type YoutubeVideoProps = {
  id: string;
  isPlaying: boolean;
  playsInline?: boolean;
  muted?: boolean;
  loop?: boolean;
  autoPlay?: boolean;
  controls?: boolean;
  onPlay: (playing: boolean) => void;
};

const PlayerStateEnded = 0;
const PlayerStateCued = 5;

interface PlayerInterface {
  new (
    id: string,
    props: {
      videoId: string;
      playerVars: { playsinline?: number; loop?: number; autoplay?: number; playlist?: string; controls?: number };
      events: { onStateChange: (event: Event) => void; onReady: (event: Event) => void };
    },
  ): YoutubePlayerElement;
}

type YoutubePlayerElement = {
  playVideo: () => void;
  stopVideo: () => void;
  destroy: () => void;
  mute: () => void;
};

type Event = { data: number; target: YoutubePlayerElement };

type YoutubeType = {
  Player: PlayerInterface;
  PlayerState: { ENDED: string; CUED: string };
};

type ExtendedWindow = Window &
  typeof globalThis & {
    onYouTubeIframeAPIReady: () => void;
    YT: YoutubeType;
  };

const apiSrc = 'https://www.youtube.com/iframe_api';

const YoutubeVideo = ({
  id,
  isPlaying,
  onPlay,
  autoPlay,
  loop,
  muted,
  playsInline = true,
  controls = true,
}: YoutubeVideoProps): JSX.Element => {
  const ref = useRef<YoutubePlayerElement>(null);

  const onPlayerReady = useCallback(
    (event: Event) => {
      console.log(event);
      if (isPlaying || autoPlay) {
        if (muted) {
          event.target.mute();
        }

        event.target.playVideo();
      }
    },
    [isPlaying, autoPlay, muted],
  );

  const onPlayerStateChange = useCallback(
    (event: Event) => {
      if (event.data === PlayerStateEnded) {
        onPlay(false);
      }
      if (event.data === PlayerStateCued) {
        onPlay(false);
      }
    },
    [onPlay],
  );

  const loadVideo = useCallback(() => {
    ref.current = new (window as ExtendedWindow).YT.Player(id, {
      videoId: id,
      playerVars: {
        playsinline: playsInline ? 1 : 0,
        loop: loop ? 1 : 0,
        autoplay: autoPlay ? 1 : 0,
        playlist: loop ? id : undefined,
        controls: controls ? 1 : 0,
      },
      events: { onStateChange: onPlayerStateChange, onReady: onPlayerReady },
    });
  }, [autoPlay, id, loop, onPlayerReady, onPlayerStateChange, playsInline]);

  const addScriptOrLoadVideo = useCallback(() => {
    window.addEventListener('YoutubePlayerLoaded', () => {
      loadVideo();
    });

    if (!(window as ExtendedWindow).YT) {
      const tag = document.createElement('script');
      tag.src = apiSrc;

      (window as ExtendedWindow).onYouTubeIframeAPIReady = () => {
        window.dispatchEvent(new Event('YoutubePlayerLoaded'));
      };
      const [firstScriptTag] = document.getElementsByTagName('script');
      if (firstScriptTag?.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }
    } else {
      loadVideo();
    }
  }, [loadVideo]);

  useEffect(() => {
    addScriptOrLoadVideo();
  }, [addScriptOrLoadVideo, id]);

  return (
    <div>
      <div className={video} id={id} />
    </div>
  );
};

export default YoutubeVideo;
