export type PieChartItem = {
  label: string;
  value: number;
  color: string;
  labelColor: string;
};

export type PieChartItemWitAngles = PieChartItem & {
  startAngle: number;
  endAngle: number;
};

export type PieChartProps = {
  items?: PieChartItem[];
  viewBoxSize?: number;
  labelSize?: number;
  cutoutRadiusShare?: number;
  totalDegrees?: number;
  spaceBetweenInDegrees?: number;
};
