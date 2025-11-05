import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insurance Outsourcing | ShoreAgents',
  description: 'Comprehensive insurance outsourcing services to optimize your insurance operations.',
}

export default function InsuranceOutsourcing() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Insurance Outsourcing</h1>
        <p className="text-lg text-gray-600">
          Streamline your insurance operations with our expert outsourcing services.
        </p>
      </div>
    </div>
  )
}

