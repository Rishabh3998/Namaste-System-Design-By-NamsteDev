import { useEffect, useState } from "react";
import { images } from "../data/data";

const style = {
  background: "lightgrey",
  margin: "1rem",
  height: "50px",
  width: "50px",
  borderRadius: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};

const Carousel = () => {
  const [active, setActive] = useState(0);

  const handleClick = (direction) => {
    if (direction === "right") {
      setActive((prev) => (prev + 1) % images.length);
    } else {
      setActive((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));
    }
  };

  // Auto slide image after 2 seconds
  useEffect(() => {
    let interval = setInterval(() => {
      handleClick("right");
    }, 2000);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={style} onClick={() => handleClick("left")}>
        ←
      </div>
      <img
        src={images[active]}
        alt="img-carousel"
        width="900px"
        height="500px"
      />
      <div style={style} onClick={() => handleClick("right")}>
        →
      </div>
    </div>
  );
};

export default Carousel;
