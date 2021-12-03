import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

function HomeAnimation() {
  const container = useRef();

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./chart2.json"),
    });
  }, []);
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      ref={container}
    ></div>
  );
}

export default HomeAnimation;
