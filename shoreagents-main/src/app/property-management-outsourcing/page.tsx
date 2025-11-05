import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Property Management Outsourcing | ShoreAgents',
  description: 'Expert property management outsourcing services to streamline your operations and maximize efficiency.',
}

export default function PropertyManagementOutsourcing() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Property Management Outsourcing</h1>
        <p className="text-lg text-gray-600">
          Professional property management outsourcing services to help you manage properties efficiently.
        </p>
      </div>
    </div>
  )
}

