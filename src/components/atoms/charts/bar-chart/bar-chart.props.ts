import { CSSProperties } from 'react';

export type BarChartItem = {
  label: string;
  value: number;
  color: string;
  renderValue?: (value: number) => string;
};

export type BarChartProps = {
  expectedValueHeight?: CSSProperties['height'];
  expectedLabelHeight?: CSSProperties['height'];
  height?: CSSProperties['height'];
  className?: string;
  items?: BarChartItem[];
  minBarWidth?: number;
};
