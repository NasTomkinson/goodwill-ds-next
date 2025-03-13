import React, { JSX } from "react";

interface DetailsProps {
  heading: string;
  copy: string;
  id?: string;
  open?: boolean;
}

const Details = ({ heading, copy, id, open }: DetailsProps): JSX.Element => {
  return (
    <details
      id={`accordion-${id}`}
      className="w-full py-6"
      open={open ?? false}
    >
      <summary className="cursor-pointer flex flex-row justify-between gap-8">
        <span className="text-base md:text-lg font-semibold"> {heading} </span>
        <button className="pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </summary>
      <div className="text-sm md:text-base text-neutral-700 mt-2">
        <p> {copy} </p>
      </div>
    </details>
  );
};

export default Details;
