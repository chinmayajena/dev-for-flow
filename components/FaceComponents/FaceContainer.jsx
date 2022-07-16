const FaceContainer = ({ children, width, height }) => {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${width / 2 + 50},${height / 2})`}>{children}</g>
    </svg>
  );
};

export default FaceContainer;
