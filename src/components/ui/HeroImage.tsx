import React from "react";
import Lottie from "lottie-react";
import heroImage from "../../assets/lottie/hero.json";

const HeroImage = () => {
  return (
    <div>
      <Lottie animationData={heroImage} loop={true} />
    </div>
  );
};

export default HeroImage;
