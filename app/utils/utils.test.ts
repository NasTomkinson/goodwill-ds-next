import { describe, it, expect, vi } from "vitest";
import { useFetch } from "./index.ts";

import Page from "../graphql/queries/page.gql?raw";
import Collection from "../graphql/queries/collection.gql?raw";

const useFetchResponse = {
  success: true,
  data: {
    page: {
      composites: [
        {
          __typename: "ComponentCompositesTestimonials",
          id: "7",
        },
        {
          __typename: "ComponentCompositesAccordions",
          id: "10",
        },
      ],
    },
  },
};

describe("useFetch function", () => {
  it("should return an object with a KV {success: false} if a we send a bad request (Blank request)", async () => {
    const data = await useFetch("");
    expect(data).toMatchObject({ success: false });
  });

  it("should return an object with KV {success: false} if we send a query with invalid variables", async () => {
    const data = await useFetch(Collection, { invalid: "variable" });
    expect(data).toMatchObject({ success: false });
  });

  it("should return an object with KV {success: true} if we send a query with no variables", async () => {
    const data = await useFetch(Page);
    expect(data).toMatchObject({ success: true });
  });

  it("should return an object with KV {success: true} if we send a query with variables", async () => {
    const data = await useFetch(Collection, {
      documentId: "cib00vrce726wsi95jfaiwnd",
    });
    expect(data).toMatchObject({ success: true });
  });
});
