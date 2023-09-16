import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/layout'
import Hero from '@/components/home/hero'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>JeongYeob&apos;s Portfolio</title>
        <meta name="description" content="ShinJeongYeob&apos;s Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </Layout>
  )
}
