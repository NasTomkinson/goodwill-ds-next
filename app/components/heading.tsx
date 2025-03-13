import React, { JSX } from "react";

interface HeadingProps {
  heading: string;
  subheading: string;
  centered?: boolean;
}

const Heading = ({
  heading,
  subheading,
  centered = false,
}: HeadingProps): JSX.Element => {
  return (
    <div
      className={`flex flex-col justify-center ${
        centered ? "items-center text-center" : "items-start text-left"
      } gap-2`}
    >
      {heading && (
        <h2 className="text-3xl lg:text-4xl font-bold"> {heading} </h2>
      )}
      {subheading && (
        <p className="text-base lg:text-lg text-neutral-700"> {subheading} </p>
      )}
    </div>
  );
};

export default Heading;
