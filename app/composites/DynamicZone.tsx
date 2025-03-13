import React, { JSX } from "react";
import { useFetch } from "../utils";
import Accordion from "../composites/Accordion";
import Testimonial from "../composites/Testimonial.tsx";
import Collection from "../graphql/queries/collection.gql";

interface DynamicZoneProps {
  documentId: string;
}

const DynamicZone = async ({
  documentId,
}: DynamicZoneProps): Promise<JSX.Element> => {
  const pageData = await useFetch(Collection, {
    documentId: documentId,
  });

  const composites = pageData?.data?.page?.composites;

  return (
    <>
      {composites &&
        composites.map((widget: any) => {
          if (widget?.__typename === "ComponentCompositesAccordions")
            return <Accordion key={widget.id} {...widget} />;
          if (widget?.__typename === "ComponentCompositesTestimonials")
            return <Testimonial key={widget.id} {...widget} />;
        })}

      {!composites && <p> Page under construction </p>}
    </>
  );
};

export default DynamicZone;
