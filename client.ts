import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.PROJECT_ID, // you can find this in sanity.json
  dataset: process.env.DATASET, // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: process.env.API_VERSION,
});

export default client;
