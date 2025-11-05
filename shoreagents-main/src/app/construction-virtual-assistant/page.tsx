import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Construction Virtual Assistant | ShoreAgents',
  description: 'Professional virtual assistants for construction companies and contractors.',
}

export default function ConstructionVirtualAssistant() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Construction Virtual Assistant</h1>
        <p className="text-lg text-gray-600">
          Dedicated virtual assistants to support your construction business operations.
        </p>
      </div>
    </div>
  )
}

