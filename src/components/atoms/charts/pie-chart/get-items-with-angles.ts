import { PieChartItem, PieChartItemWitAngles } from './pie-chart.props';

const createItemsWithAngles = (items: PieChartItem[], totalDegrees: number): PieChartItemWitAngles[] => {
  const total = items.reduce((amount: number, curr: PieChartItem) => amount + curr.value, 0);

  return items.reduce((amount, item, index) => {
    const startAngle = index === 0 ? 0 : amount[index - 1].endAngle;
    const endAngle = startAngle + (item.value / total) * totalDegrees;
    return [...amount, { ...item, startAngle, endAngle }];
  }, [] as PieChartItemWitAngles[]);
};

export default createItemsWithAngles;
