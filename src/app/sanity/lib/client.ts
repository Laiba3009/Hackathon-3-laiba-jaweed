import { createClient } from 'next-sanity';

// This client configuration should be used for both client-side and server-side fetching
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Public project ID for client-side
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Public dataset for client-side
  apiVersion: '2023-01-01', // Sanity API version
  token: process.env.SANITY_API_TOKEN, // Token is necessary only on server-side for write operations
  useCdn: true, // Use CDN for fetching data, set to false for more real-time updates
});
