import React from "react";

interface IProps {
  heading: string;
}

const SectionHeading: React.FC<IProps> = ({ heading }) => {
  return (
    <h1
      className="text-[45px] textShadow font-[700] bg-gradient-to-r from-[#00ffff] to-[#3b5cff] bg-clip-text mx-auto text-center"
      style={{ color: "transparent !important" }}
    >
      {heading}
    </h1>
  );
};

export default SectionHeading;
