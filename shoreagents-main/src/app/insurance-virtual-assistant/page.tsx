import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insurance Virtual Assistant | ShoreAgents',
  description: 'Professional virtual assistants for insurance agencies and brokers.',
}

export default function InsuranceVirtualAssistant() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Insurance Virtual Assistant</h1>
        <p className="text-lg text-gray-600">
          Dedicated virtual assistants to support your insurance business operations.
        </p>
      </div>
    </div>
  )
}

