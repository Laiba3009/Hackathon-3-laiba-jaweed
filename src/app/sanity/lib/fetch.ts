import { createClient } from "next-sanity";

// Sanity client configuration
const client = createClient({
  projectId: "mtdp6tzk",  // Replace with your Sanity project ID
  dataset: "production",  // Replace with your Sanity dataset name
  useCdn: true,  // Use CDN for faster data fetching
  apiVersion: "2023-10-10", // Make sure to use the correct API version
});

// Define the expected type for params
interface SanityFetchParams {
  [key: string]: string | number | boolean; // Adjust based on the types of parameters you expect
}

// Fetch function definition
export async function sanityFetch({ query, params = {} }: { query: string, params?: SanityFetchParams }) {
  try {
    const data = await client.fetch(query, params);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
