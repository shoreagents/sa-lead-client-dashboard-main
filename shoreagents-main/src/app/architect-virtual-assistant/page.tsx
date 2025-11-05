import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Architect Virtual Assistant | ShoreAgents',
  description: 'Specialized virtual assistants for architecture firms and professionals.',
}

export default function ArchitectVirtualAssistant() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Architect Virtual Assistant</h1>
        <p className="text-lg text-gray-600">
          Expert virtual assistants trained in supporting architecture professionals.
        </p>
      </div>
    </div>
  )
}

