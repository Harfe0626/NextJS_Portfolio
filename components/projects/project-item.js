import Image from "next/legacy/image";

export default function ProjectItem({data}){

    const projectTitle = data.properties.이름.title[0].plain_text
    const projectTag = data.properties.태그.multi_select
    const projectLink = data.properties.Github.url
    const description = data.properties.Description.rich_text[0].plain_text
    const imgSrc = data.cover.external?.url || data.cover.file.url
    const projectNotion = data.properties.Notion.url

    return (
        <div className="projectCard">

            <Image className="rounded-t-xl"
                src={imgSrc}
                alt="coverImage"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="cover"
                quality={100}
            />
            <div className="p-4 flex flex-col">
                <h1 className="text-2xl font-bold">{projectTitle}</h1>
                <h3 className="mt-4 text-xl">{description}</h3>
                <div className="flex items-start mt-2">
                    {projectTag.map((aTag) => (
                        <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" 
                            key={aTag.id}>{aTag.name}
                        </h1>
                    ))}
                </div>
                <a className="mt-2" href={projectLink}>Github Link</a>
                <a className="mt-2" href={projectNotion}>Notion Link</a>
            </div>
        </div>
    )
}