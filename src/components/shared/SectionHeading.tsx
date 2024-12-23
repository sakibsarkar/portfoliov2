import React from "react";

interface IProps {
  heading: string;
}

const SectionHeading: React.FC<IProps> = ({ heading }) => {
  return (
    <h1 className="text-[45px] textShadow font-[700] text-mainTxt mx-auto text-center">
      {heading}
    </h1>
  );
};

export default SectionHeading;
