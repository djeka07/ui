import { ImageType } from '../images/image.props';

export type VideoType = 'youtube' | 'internal' | 'unknown';

export type InternalVideoProps = {
  type: 'internal';
  src: string;
  id?: never;
};

export type YoutubeVideoProps = {
  type: 'youtube';
  id: string;
  src?: never;
};

export type WithAutoPlay = {
  autoPlay: true;
  muted: true;
};

export type WithoutAutoPlay = {
  autoPlay: false;
  muted: boolean;
};

export type VideoProps = {
  image?: ImageType;
  className?: string;
  priority?: boolean;
  noDownload?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  type: VideoType;
} & ((InternalVideoProps | YoutubeVideoProps) & (WithAutoPlay | WithoutAutoPlay));
