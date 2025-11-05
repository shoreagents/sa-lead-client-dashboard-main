import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Administrative Virtual Assistant | ShoreAgents',
  description: 'Professional virtual assistants for general administrative support and tasks.',
}

export default function AdministrativeVirtualAssistant() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Administrative Virtual Assistant</h1>
        <p className="text-lg text-gray-600">
          Expert virtual assistants to handle your day-to-day administrative tasks.
        </p>
      </div>
    </div>
  )
}

