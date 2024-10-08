import { degreesToRadians } from './degress-to-radians';

const polarToCartesian = (radius: number, cutoutRadius: number, angleInDegrees: number) => {
  const angleInRadians = degreesToRadians(angleInDegrees - 90);
  return {
    x: radius + cutoutRadius * Math.cos(angleInRadians),
    y: radius + cutoutRadius * Math.sin(angleInRadians),
  };
};

export default polarToCartesian;
