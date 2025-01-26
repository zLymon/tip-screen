'use client'

import Link from 'next/link'
import SeoMeta from "@layouts/partials/SeoMeta"
import Image from "next/image";

const ResourcesPage = () => {
  const tools = [
    {
      title: "Tip Screen image",
      description: "Tip Screen image",
      link: "/images/tip-screen",
      icon: "💰"
    }
  ]

  return (
    <>
      <SeoMeta
        title="Tip Screen Images"
        description="There are some tip screen images for you to use"
        url="/images"
        canonical="https://www.tip-screen.com/images"
      />
      
      <div className="container mx-auto px-4 py-12">
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-gray-700 hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2.5 text-gray-400">/</span>
                <span className="text-primary">Images</span>
              </div>
            </li>
          </ol>
        </nav>
        
        <h1 className="text-3xl font-bold text-center mb-12">Images</h1>
        <h2 className="text-2xl font-bold text-center mb-12">There are some images about tip screen or leave a tip screen.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Image src="/images/resources/AddATip.png" alt="tip screen image" width={1000} height={1000} />
          <Image src="/images/resources/LeaveATip.png" alt="leave a tip screen image" width={1000} height={1000} />
        </div>
      </div>
    </>
  )
}

export default ResourcesPage 