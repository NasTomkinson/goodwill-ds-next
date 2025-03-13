import React, { JSX } from "react";

interface ReviewProps {
  copy: string;
  author: {
    name: string;
    imageUrl: string;
    details: string;
  };
}

const Review = ({ copy, author }: ReviewProps): JSX.Element => {
  return (
    <div className="flex flex-col rounded bg-gray-100 p-6 gap-4">
      <p className="text-gray-500"> {copy} </p>
      <div className="flex flex-row justify-start items-center gap-4">
        <img
          src={author?.imageUrl}
          className="rounded-full bg-white aspect-square w-12 h-12"
        />
        <div className="flex flex-col">
          <span className="font-semibold"> {author?.name} </span>
          <span className="text-gray-500"> {author?.details}</span>
        </div>
      </div>
    </div>
  );
};

export default Review;
