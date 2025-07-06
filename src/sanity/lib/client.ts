import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset ,
  apiVersion, // Use a UTC date string
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
