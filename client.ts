import { createClient } from "@sanity/client";

let projectId, dataset, apiVersion;

projectId = process.env.PROJECT_ID ?? process.env.NEXT_PUBLIC_PROJECT_ID;
dataset = process.env.DATASET ?? process.env.NEXT_PUBLIC_DATASET;
apiVersion = process.env.API_VERSION ?? process.env.NEXT_PUBLIC_API_VERSION;

const client = createClient({
  projectId,
  dataset,
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion,
});

export default client;
