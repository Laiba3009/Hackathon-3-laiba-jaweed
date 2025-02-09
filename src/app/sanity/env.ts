export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18';

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

export const token = assertValue(
  'sk7yc0dGCYtV9x43F6YhnIemn50KYlPb0pAPtSFlh2OtYNSjKxgqiQq1wMqA41bm7nR1rs1Mfu9YOaOpkiMWBQQhlDHgkEOJHkd0HJAI4hhQddjWb9IXdBxWncID3IIeAcSW69DQba0rZXj7SKidr0MbSaUMzo0JuY32LVir321QGdoWY2Bw',

  'Missing environment variable: SANITY_API_TOKEN'
);
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
