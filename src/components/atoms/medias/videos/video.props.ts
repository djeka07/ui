import { ImageType } from '../images/image.props';

export type VideoType = 'youtube' | 'internal' | 'unknown';

export type VideoProps = {
  id?: string;
  src?: string;
  autoPlay?: boolean;
  muted?: boolean;
  image?: ImageType;
  className?: string;
  priority?: boolean;
  noDownload?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  type: VideoType;
};
