import React from "react";

type SectionTitleTextProps = {
  title: string;
};

const SectionTitleText: React.FC<SectionTitleTextProps> = ({ title }) => {
  return (
    <h1 className="font-tthoves text-5xl font-bold tracking-tighter text-[#282828] dark:text-[#e9e9e9] md:text-9xl">
      {title}
    </h1>
  );
};

export default SectionTitleText;
