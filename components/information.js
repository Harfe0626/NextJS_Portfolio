import Link from "next/link"
import Image
 from "next/image"
export default function Information() {
    return (
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                <div className="flex flex-col sm:flex-row mt-10">
                    <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                    <div className="w-40 h-40 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                        {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                        </svg> */}
                        <Image src="/profile.png" width="200" height="200"/>
                    </div>
                    <div className="flex flex-col items-center text-center justify-center">
                        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">신정엽</h2>
                        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                        <p className="text-base leading-loose">
                            계명대학교<br/>
                            게임소프트웨어공학
                        </p>
                    </div>
                    </div>
                    <div className="sm:w-2/3 
                        sm:pl-8 
                        sm:py-8 
                        sm:border-l 
                        border-gray-200 
                        sm:border-t-0 
                        border-t 
                        mt-4 pt-4 
                        sm:mt-0 
                        text-center 
                        sm:text-center">
                    <p className="leading-loose text-lg mb-4">
                        Email : strik241@gmail.com<br/>
                        Phone : 010 - 7127 - 1089<br/>
                        Address : 대구 달서구 월서로<br/>
                    </p>
                    <a className="text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </section>
    )
}