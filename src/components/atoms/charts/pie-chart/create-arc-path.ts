import polarToCartesian from './polar-to-cartesian';

const createArcPath = (radius: number, cutoutRadius: number, startAngle: number, endAngle: number) => {
  const start = polarToCartesian(radius, radius, endAngle);
  const end = polarToCartesian(radius, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

  const start2 = polarToCartesian(radius, cutoutRadius, endAngle);
  const end2 = polarToCartesian(radius, cutoutRadius, startAngle);

  return [
    'M',
    start.x,
    start.y,
    'A',
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
    'L',
    radius,
    radius,
    'Z',

    'M',
    start2.x,
    start2.y,
    'A',
    cutoutRadius,
    cutoutRadius,
    0,
    largeArcFlag,
    0,
    end2.x,
    end2.y,
    'L',
    radius,
    radius,
    'Z',
  ].join(' ');
};

export default createArcPath;
