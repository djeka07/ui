import { CSSProperties } from 'react';
import { BreakPoint } from '../../../../styles/media.css';

export type SrcSet = {
  rect?: string;
  quality?: number;
  width: number;
  maxBreakPoint: Exclude<BreakPoint, BreakPoint.xs>;
  orientation?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
};

export type Orientation = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type ImageType = {
  src: string;
  alt?: string;
  width: number;
  height: number;
  lazy?: boolean;
  rect?: string;
  srcSet?: SrcSet[];
};

export type ImageProps = ImageType & {
  style?: CSSProperties;
  placeholder?: string;
  className?: string;
  onClick?: () => void;
  focalPointX?: number;
  focalPointY?: number;
  modify?: boolean;
  fit?: string;
  quality?: number;
  orientation?: Orientation;
  pdis?: number[];
};
