import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Estimating Outsourcing | ShoreAgents',
  description: 'Accurate cost estimating and quantity takeoff outsourcing services.',
}

export default function EstimatingOutsourcing() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Estimating Outsourcing</h1>
        <p className="text-lg text-gray-600">
          Professional cost estimating and quantity takeoff services for construction projects.
        </p>
      </div>
    </div>
  )
}

