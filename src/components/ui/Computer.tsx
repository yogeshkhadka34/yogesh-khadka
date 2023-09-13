import React from "react";
import Lottie from "lottie-react";
import computer from "../../assets/lottie/computer.json";

const Computer = () => {
  return (
    <div>
      <Lottie animationData={computer} loop={true} />
    </div>
  );
};

export default Computer;
