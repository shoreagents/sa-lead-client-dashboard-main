import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal Virtual Assistant | ShoreAgents',
  description: 'Expert virtual assistants for law firms and legal professionals.',
}

export default function LegalVirtualAssistant() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Legal Virtual Assistant</h1>
        <p className="text-lg text-gray-600">
          Professional virtual assistants specialized in legal support and administration.
        </p>
      </div>
    </div>
  )
}

