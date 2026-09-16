import {createClient} from 'next-sanity'

export const sanityClient = createClient({
  projectId: 'j7w1zrr6',
  dataset: 'production',
  apiVersion: '2026-09-16',
  useCdn: true,
})