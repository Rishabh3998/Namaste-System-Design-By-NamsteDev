const Shimmer = ({
  height = "1rem",
  color = "grey",
  width = "100%",
  type = "rectangle",
}) => {
  return (
    <div style={{ width }}>
      <div
        style={{
          height: type === "circle" ? width : height,
          backgroundColor: color,
          width: type === "circle" ? width : "100%",
          borderRadius: type === "circle" ? "50%" : "0.2rem",
          marginBottom: "0.5rem",
          animation: "shimmer-ui 2s ease-in-out infinite",
        }}
      ></div>
    </div>
  );
};

export default Shimmer;
