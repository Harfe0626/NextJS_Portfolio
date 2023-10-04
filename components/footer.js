import Link from "next/link"

export default function Footer() {
    return (
        <footer className="text-gray-600 bg-gray-100 body-font">
            <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                <Link href="/" legacyBehavior>
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <span className="ml-3 text-xl">JeongYeob&apos;s Portfolio</span>
                    </a>
                </Link>
                <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2023 JeongYeob&apos;s Portfolio
                    <a rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank"></a>
                </p>
            </div>
        </footer>
    )
}