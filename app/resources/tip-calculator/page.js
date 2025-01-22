import TipCalculator from '../../components/TipCalculator'
import Link from 'next/link'
import SeoMeta from "@layouts/partials/SeoMeta"

const TipCalculatorPage = () => {
  return (
    <>
      <SeoMeta
        title="Tip Calculator - Easy Bill Splitting"
        description="A simple and intuitive tip calculator that helps you calculate tips and split bills among friends. Support multiple currencies and custom tip percentages."
        url="/resources/tip-calculator"
        canonical="https://www.tip-screen.com/resources/tip-calculator"
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
                <Link href="/resources" className="text-gray-700 hover:text-primary">
                  Resources
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2.5 text-gray-400">/</span>
                <span className="text-primary">Tip Calculator</span>
              </div>
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-center mb-12">Tip Calculator</h1>
        <TipCalculator />
        <div className="max-w-3xl mx-auto mb-12 text-gray-700">
          <p className="mb-4">
            A tip calculator is an essential tool that helps you calculate appropriate gratuity for various services. In many countries, particularly in the United States, tipping is an important part of service workers&apos; compensation, with 15% of the pre-tax amount being typically expected at restaurants.
          </p>
          <p className="mb-4">
            This calculator helps you:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Calculate tip amounts for different percentages</li>
            <li>Split bills easily among multiple people</li>
            <li>Determine the total amount including the tip</li>
            <li>Support multiple currencies for international use</li>
          </ul>
          <p>
            Whether you&apos;re dining out with friends, taking a taxi, or receiving any other service where tipping is customary, this calculator makes it easy to determine the appropriate tip amount.
          </p>
        </div>
      </div>
    </>
  )
}

export default TipCalculatorPage 