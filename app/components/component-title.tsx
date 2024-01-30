import React from "react";

type ComponentTitleProps = {
  number: string;
  title: string;
};

const ComponentTitle: React.FC<ComponentTitleProps> = ({ number, title }) => {
  return (
    <>
      <h1 className="mb-10 text-lg font-grotesk text-[#282828]">
        {number}.<span className="text-2xl text-gray-500">{title}</span>
      </h1>
    </>
  );
};

export default ComponentTitle;
