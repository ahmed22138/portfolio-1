import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId : "wa67j2n4",
  dataset : "production",
  apiVersion: "2025-06-25", // Use a UTC date string
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
