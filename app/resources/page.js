'use client'

import Link from 'next/link'
import SeoMeta from "@layouts/partials/SeoMeta"

const ResourcesPage = () => {
  const tools = [
    {
      title: "Tip Calculator",
      description: "Help you quickly calculate tip amounts and split bills",
      link: "/resources/tip-calculator",
      icon: "💰"
    }
    // 未来可以在这里添加更多工具
  ]

  return (
    <>
      <SeoMeta
        title="Resources - Useful Tools"
        description="A collection of useful tools including tip calculator, and more to come."
        url="/resources"
        canonical="https://www.tip-screen.com/resources"
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
                <span className="text-primary">Resources</span>
              </div>
            </li>
          </ol>
        </nav>
        
        <h1 className="text-3xl font-bold text-center mb-12">Resources</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <Link href={tool.link} key={index}>
              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                <p className="text-gray-600">{tool.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default ResourcesPage 