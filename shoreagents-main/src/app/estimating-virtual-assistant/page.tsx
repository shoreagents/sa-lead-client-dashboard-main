import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Estimating Virtual Assistant | ShoreAgents',
  description: 'Professional virtual assistants for cost estimating and quantity takeoff.',
}

export default function EstimatingVirtualAssistant() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Estimating Virtual Assistant</h1>
        <p className="text-lg text-gray-600">
          Dedicated virtual assistants specialized in construction estimating and takeoffs.
        </p>
      </div>
    </div>
  )
}

