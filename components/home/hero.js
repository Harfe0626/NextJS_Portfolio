import Animation from "./animation"
import Link from "next/link"

export default function Hero() {
    return (
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Animation />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className=" title-font 
                            sm:text-4xl 
                            text-3xl 
                            mb-8
                            font-medium 
                            text-gray-900 
                            tracking-wider
                            ">
              성장하기 위해 노력하는<br />
              주니어 프론트엔드 개발자, 신정엽입니다.
            </h1>
            <p className="mb-8 leading-loose">
              계명대학교 게임소프트웨어공학과에 재학중이며 프론트엔드 개발자를 꿈꾸고 있습니다. <br />
            </p>
            <div className="flex justify-center">
              <Link href="/projects" legacyBehavior>
                <a className="btnProject">
                    프로젝트 보러가기
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
}