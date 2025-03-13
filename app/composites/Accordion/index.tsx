import React from "react";

import Details from "../../components/Details";
import Heading from "../../components/heading.tsx";

interface AccordionProps {
  heading: string;
  subheading: string;
  accordion: Array<{
    heading: string;
    copy: string;
    id?: string;
  }>;
}

const Accordion = ({ heading, subheading, accordion }: AccordionProps): any => {
  return (
    <section className="my-12">
      <div className="container max-w-screen-md">
        <Heading heading={heading} subheading={subheading} />

        {accordion.length && (
          <div className="flex flex-col justify-start mt-12 divide-y divide-neutral-200 ">
            {accordion.map((accordion, index) => (
              <Details
                heading={accordion.heading}
                copy={accordion.copy}
                id={`${accordion?.id ?? index}`}
                key={`details-${accordion?.id ?? index}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Accordion;
