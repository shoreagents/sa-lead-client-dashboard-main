import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bookkeeping Virtual Assistant | ShoreAgents',
  description: 'Specialized virtual assistants for bookkeeping and financial record management.',
}

export default function BookkeepingVirtualAssistant() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Bookkeeping Virtual Assistant</h1>
        <p className="text-lg text-gray-600">
          Professional virtual assistants trained in bookkeeping and financial management.
        </p>
      </div>
    </div>
  )
}

