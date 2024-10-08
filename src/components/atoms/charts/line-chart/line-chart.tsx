import { ElementSize } from '../../elements';
import { BarChartProps } from '../bar-chart/bar-chart.props';

type LineChartProps = {
  items: BarChartProps['items'];
};

const LineChart = () => {
  return (
    <div>
      <ElementSize render={({ setElement, size }) => <div ref={setElement}>{size?.width}</div>} />
    </div>
  );
};

export default LineChart;
