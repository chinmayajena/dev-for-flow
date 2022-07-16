import Face from "../components/FaceComponents";

const width = 1260;
const height = 800;
const strokeWidth = 10;
const eyeOffsetX = 170;
const eyeOffsetY = 140;
const eyeRadius = 55;
const mouthWidth = 20;
const mouthRadius = 230;

const FacePage = () => {
  return (
    <Face
      width={width}
      height={height}
      strokeWidth={strokeWidth}
      eyeOffsetX={eyeOffsetX}
      eyeOffsetY={eyeOffsetY}
      eyeRadius={eyeRadius}
      mouthWidth={mouthWidth}
      mouthRadius={mouthRadius}
    />
  );
};

export default FacePage;
