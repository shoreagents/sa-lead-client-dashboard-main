import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mortgage Outsourcing | ShoreAgents',
  description: 'Professional mortgage outsourcing services to enhance your mortgage processing efficiency.',
}

export default function MortgageOutsourcing() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Mortgage Outsourcing</h1>
        <p className="text-lg text-gray-600">
          Expert mortgage processing and outsourcing services tailored to your needs.
        </p>
      </div>
    </div>
  )
}

