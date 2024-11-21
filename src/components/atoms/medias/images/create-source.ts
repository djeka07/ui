type SourceInput = {
  source: string;
  width: number;
  height: number;
  fit: string;
  quality: number;
  modify?: boolean;
  rect?: string;
  orientation?: number;
  focalPointY?: number;
  focalPointX?: number;
};

const createSource = ({
  fit,
  height,
  quality,
  source,
  width,
  focalPointX,
  focalPointY,
  orientation,
  modify,
  rect,
}: SourceInput): string => {
  if (!modify) {
    return source;
  }
  let newSource = '';
  if (source.includes('?')) {
    [newSource] = source.split('?');
  }

  newSource = `${source}?auto=compress,format&fit=${fit}&q=${quality}`;
  if (orientation) {
    newSource = `${newSource}&orient=${orientation}`;
  }
  if (rect) {
    newSource = `${newSource}&rect=${rect}`;
  }

  if (focalPointX !== null && focalPointX !== undefined) {
    newSource = `${newSource}&fp-x=${focalPointX}`;
  }

  if (focalPointY !== null && focalPointY !== undefined) {
    newSource = `${newSource}&fp-y=${focalPointY}`;
  }

  return `${newSource}&w=${width}&h=${height}`;
};

export default createSource;
