import { draftMode } from "next/headers";
import Page from "../graphql/queries/page.gql?raw";

async function useFetch(query, variables = {}) {
  const draft = await draftMode();
  let gqlArgs = {};

  if (draft.isEnabled) {
    gqlArgs = { ...variables, status: "DRAFT" };
  } else {
    gqlArgs = variables;
  }

  try {
    const request = await fetch(process.env.GRAPHQL_API_URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: gqlArgs,
      }),
    });

    const response = await request.json();
    let success = true;

    if (response.errors) {
      success = false;
    }

    return { success: success, ...response };
  } catch (error) {
    return { success: false, error };
  }
}

async function getPageBySlug(slug: string) {
  const pageData = await useFetch(Page, {
    slug: slug,
  });

  return pageData.data.pages[0];
}

export { useFetch, getPageBySlug };
