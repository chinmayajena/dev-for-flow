import { arc } from "d3";

const Mouth = ({ mouthRadius, mouthWidth }) => {
  const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthWidth + mouthRadius)
    .endAngle(Math.PI / 2)
    .startAngle((Math.PI * 3) / 2);

  return <path d={mouthArc()}></path>;
};

export default Mouth;
