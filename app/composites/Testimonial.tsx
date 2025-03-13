import React, { JSX } from "react";
import Heading from "../components/heading.tsx";
import Review from "../components/Review";

interface TestimonialProps {
  heading: string;
  subheading: string;
}

const Testimonial = ({ heading, subheading }: TestimonialProps) => {
  return (
    <section className="my-12">
      <div className="container">
        <Heading heading={heading} subheading={subheading} centered={true} />
        <div className="relative">
          <div className="cursor-pointer scroll-smooth mt-12 flex flex-row snap-x snap-proximity overflow-x-scroll gap-8 py-4">
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
