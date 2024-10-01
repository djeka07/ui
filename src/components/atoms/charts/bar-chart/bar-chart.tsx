import { useDidMount } from '@djeka07/hooks';
import { css, isEmpty } from '@djeka07/utils';
import { useRef } from 'react';
import { root } from './bar-chart.css';

interface BarChartData {
  label: string;
  value: number;
}

interface BarChartProps {
  width?: number;
  height?: number;
  className?: string;
  data?: BarChartData[];
}

const BarChart = ({ width = 100, height = 100, className, data }: BarChartProps): JSX.Element => {
  const ref = useRef<HTMLCanvasElement>(null);

  const createBars = (context: CanvasRenderingContext2D) => {
    const padding = 50;
    const barWidth = 40;
    const gap = 15;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const yAxisLabelPadding = 10;
    let x = padding * 1.5;
    const maxValue = Math.max(...(data?.map((d) => d.value) || []));
    context.beginPath();
    context.moveTo(padding, padding);
    context.lineTo(padding, height - padding);
    context.strokeStyle = '#000';
    context.stroke();

    context.beginPath();
    context.moveTo(padding, height - padding);
    context.lineTo(width - padding, height - padding);
    context.stroke();

    data?.forEach((chartData) => {
      context.fillStyle = '#3498db';
      const barHeight = (chartData.value / maxValue) * (height - padding * 2); // Calculate bar height based on value
      context.fillRect(x, height - padding - barHeight, barWidth, barHeight); // Draw the bar

      // Set the fill color for the text (X-axis labels)
      context.fillStyle = '#000';
      context.font = '14px Arial';
      // Draw the X-axis label below the bar
      context.fillText(
        chartData.label,
        x + barWidth / 2 - context.measureText(chartData.label).width / 2,
        height - padding + 20,
      );

      x += barWidth + gap;
    });

    return context;
  };

  const clearContext = (context: CanvasRenderingContext2D): CanvasRenderingContext2D => {
    context.clearRect(0, 0, width, height);
    return context;
  };

  useDidMount(() => {
    const context = ref.current?.getContext('2d');
    if (!context) {
      return;
    }
    if (!isEmpty(data)) {
      createBars(clearContext(context));
    }
    return;
  });

  return <canvas className={css(root, className)} ref={ref} width={width} height={height}></canvas>;
};

export default BarChart;
