import type {Metadata} from 'next'
import {sanityClient} from '@/lib/sanity'
import {PORTFOLIO_QUERY, SEO_QUERY} from '@/lib/queries'
import PortfolioClient from './portfolio-client'

export const revalidate = 30

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityClient.fetch(SEO_QUERY)

  return {
    title:
      settings?.seoTitle ??
      'John Melquizedek Mayoral | Developer Portfolio',

    description:
      settings?.seoDescription ??
      'Portfolio of John Melquizedek Mayoral, ECT.',
  }
}

export default async function Home() {
  const data = await sanityClient.fetch(
    PORTFOLIO_QUERY,
    {},
    {
      next: {
        revalidate: 30,
      },
    },
  )

  return <PortfolioClient data={data} />
}