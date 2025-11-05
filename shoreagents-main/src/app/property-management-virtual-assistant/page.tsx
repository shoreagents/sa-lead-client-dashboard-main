import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Property Management Virtual Assistant | ShoreAgents',
  description: 'Expert virtual assistants for property management companies.',
}

export default function PropertyManagementVirtualAssistant() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Property Management Virtual Assistant</h1>
        <p className="text-lg text-gray-600">
          Dedicated virtual assistants to streamline your property management operations.
        </p>
      </div>
    </div>
  )
}

