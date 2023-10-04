import Layout from "@/components/layout";
import Head from 'next/head'
import { TOKEN, DATABASE_ID } from "@/config";
import ProjectItem from "@/components/projects/project-item";

export default function Projects({projects}){

    // console.log(projects);

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
                <Head>
                    <title>JeongYeob&apos;s Portfolio</title>
                    <meta name="description" content="ShinJeongYeob&apos;s Portfolio" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1 className="text-4xl font-bold sm:text-6xl">
                    Total Projects : 
                    <span className="pl-4 text-blue-500">{projects.results.length}</span>
                </h1>

                <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
                    {projects.results.map((aProject) => (
                        <ProjectItem key={aProject.id} data={aProject}/>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const options = {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Notion-Version': '2022-06-28',
            'content-type': 'application/json',
            'authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            sorts: [
                {
                    "property": "이름",
                    "direction": "ascending"
                }
            ],
            page_size: 100
        })
      };
      
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

    const projects = await res.json()

    const projectNames = projects.results.map((aProject) =>(
        aProject.properties.이름.title[0].plain_text
    ))

    // console.log(`projectNames : ${projectNames}`);

    return {
        props: {projects},
        revalidate: 1
    }
}