import { css } from '@djeka07/utils';
import { toPercents } from '../../../../helpers';
import { bar, item, label as labelClass, labelValueWrapper, root, value as valueClass, wrapper } from './bar-chart.css';
import { BarChartProps } from './bar-chart.props';

const barValueGap = '4px';
const barLabelGap = '4px';
const defaultLabelSize = 12;

const BarChart = ({
  height = 100,
  className,
  items,
  expectedLabelHeight = defaultLabelSize,
  expectedValueHeight = defaultLabelSize,
  minBarWidth,
}: BarChartProps) => {
  const maxValue = Math.max(...(items?.map((item) => item.value) || [0]));
  const hasLabels = items?.some((item) => item.label);
  const hasRenderValue = items?.some((item) => !!item.renderValue);
  return (
    <div className={css(root, className)} style={{ height }}>
      {hasRenderValue && <div style={{ minHeight: `calc(${expectedValueHeight}px + ${barValueGap})` }} />}
      <div className={wrapper}>
        {items?.map(({ value, color, label, renderValue }) => (
          <div
            className={item}
            key={`${label}-${color}-${value}`}
            style={minBarWidth ? { minWidth: minBarWidth } : undefined}
          >
            {!!renderValue && (
              <div className={labelValueWrapper}>
                <label className={valueClass} style={{ fontSize: defaultLabelSize }}>
                  {renderValue(value)}
                </label>
              </div>
            )}
            <div
              className={bar}
              style={{
                backgroundColor: color,
                height: toPercents(value / maxValue),
              }}
            />
            <div className={labelValueWrapper}>
              <label className={labelClass} style={{ fontSize: defaultLabelSize }}>
                {label}
              </label>
            </div>
          </div>
        ))}
      </div>
      {hasLabels && <div style={{ minHeight: `calc(${expectedLabelHeight}px + ${barLabelGap})` }} />}
    </div>
  );
};

export default BarChart;
