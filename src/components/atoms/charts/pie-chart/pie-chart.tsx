import { isEmpty } from '@djeka07/utils';
import { Fragment, useMemo } from 'react';
import createItemsWithAngles from './get-items-with-angles';
import { PieChartItemWitAngles, PieChartProps } from './pie-chart.props';
import polarToCartesian from './polar-to-cartesian';
import { SvgArc } from './svg-arc';

const PieChart = ({
  items,
  viewBoxSize = 100,
  labelSize = 20,
  cutoutRadiusShare = 0.4,
  totalDegrees = 360,
  spaceBetweenInDegrees = 0.8,
}: PieChartProps) => {
  const memoedItemsWithAngles = useMemo(() => {
    const filtered = createItemsWithAngles(items?.filter((i) => i.value > 0) || [], totalDegrees);
    if (!isEmpty(filtered)) {
      return filtered;
    }

    return [
      {
        value: 1,
        color: '#000',
        startAngle: 0,
        endAngle: totalDegrees,
      } as PieChartItemWitAngles,
    ];
  }, [items, totalDegrees]);
  const radius = viewBoxSize / 2;
  const cutoutRadius = radius * cutoutRadiusShare;
  const total = useMemo(() => items?.reduce((amount, item) => amount + item.value, 0) || 0, [items]);
  return (
    <svg viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
      {memoedItemsWithAngles.map(({ color, endAngle, label, startAngle, value, labelColor }) => {
        const labelAngle = startAngle + (endAngle - startAngle) / 2;
        const labelPosition = polarToCartesian(radius, cutoutRadius + (radius - cutoutRadius) / 2, labelAngle);
        labelPosition.x -= labelSize / 2;
        labelPosition.y -= labelSize / 2;

        const percentage = Math.round((value * 100) / total);
        return (
          <Fragment key={`${value}-${startAngle}-${endAngle}-${label}`}>
            <SvgArc
              color={color}
              radius={radius}
              cutoutRadius={cutoutRadius}
              startAngle={startAngle}
              endAngle={endAngle - spaceBetweenInDegrees}
            />
            <SvgArc
              color={color}
              radius={radius}
              cutoutRadius={radius * 0.96}
              startAngle={startAngle}
              endAngle={endAngle - spaceBetweenInDegrees}
            />
            {percentage > 5 && memoedItemsWithAngles.length > 1 && (
              <g>
                <rect fill="transparent" {...labelPosition} width={labelSize} height={labelSize} />
                <text
                  x={labelPosition.x + labelSize / 2}
                  y={labelPosition.y + labelSize / 2}
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill={labelColor}
                >
                  {percentage}
                  <tspan fill={labelColor} fontSize={7}>
                    {' '}
                    %
                  </tspan>
                </text>
              </g>
            )}
          </Fragment>
        );
      })}
    </svg>
  );
};

export default PieChart;
