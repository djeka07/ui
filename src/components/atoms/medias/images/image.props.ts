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

export type ImageProps = {
  src: string;
  style?: CSSProperties;
  srcSet?: SrcSet[];
  placeholder?: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
  width: number;
  ratio: number;
  focalPointX?: number;
  focalPointY?: number;
  modify?: boolean;
  fit?: string;
  quality?: number;
  rect?: string;
  orientation?: Orientation;
  lazy?: boolean;
  pdis?: number[];
};
