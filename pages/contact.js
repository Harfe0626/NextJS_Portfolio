import Layout from "@/components/layout";
import Head from 'next/head'
import Information from "@/components/information";
export default function Contact(){
    return (
        <Layout>
            <Head>
                <title>JeongYeob's Portfolio</title>
                <meta name="description" content="ShinJeongYeob's Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Information />
        </Layout>
    );
}
