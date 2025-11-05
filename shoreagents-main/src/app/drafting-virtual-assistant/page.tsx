import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Drafting Virtual Assistant | ShoreAgents',
  description: 'Specialized virtual assistants for CAD drafting and technical drawing support.',
}

export default function DraftingVirtualAssistant() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Drafting Virtual Assistant</h1>
        <p className="text-lg text-gray-600">
          Expert virtual assistants trained in CAD drafting and technical drawing support.
        </p>
      </div>
    </div>
  )
}

