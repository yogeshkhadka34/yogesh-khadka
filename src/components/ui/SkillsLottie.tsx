import React from "react";
import Lottie from "lottie-react";
import skills from "../../assets/lottie/skills.json";

const SkillsLottie = () => {
  return (
    <div>
      <Lottie animationData={skills} loop={true} height={800} width={1000} />
    </div>
  );
};

export default SkillsLottie;
