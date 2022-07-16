import Eyes from "./Eyes";
import FaceContainer from "./FaceContainer";
import BackgroundCircle from "./BackgroundCircle";
import Mouth from "./Mouth";

const Face = ({
  width,
  height,
  strokeWidth,
  eyeOffsetX,
  eyeOffsetY,
  eyeRadius,
  mouthWidth,
  mouthRadius,
}) => {
  return (
    <FaceContainer width={width} height={height}>
      <BackgroundCircle
        radius={height / 2 - strokeWidth / 2}
        strokeWidth={strokeWidth}
      />
      <Eyes offsetX={eyeOffsetX} offsetY={eyeOffsetY} radius={eyeRadius} />
      <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
    </FaceContainer>
  );
};

export default Face;
