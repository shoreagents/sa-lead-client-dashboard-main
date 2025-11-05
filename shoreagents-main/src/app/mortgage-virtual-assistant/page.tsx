import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mortgage Virtual Assistant | ShoreAgents',
  description: 'Specialized virtual assistants for mortgage brokers and lenders.',
}

export default function MortgageVirtualAssistant() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Mortgage Virtual Assistant</h1>
        <p className="text-lg text-gray-600">
          Expert virtual assistants trained in mortgage processing and support.
        </p>
      </div>
    </div>
  )
}

