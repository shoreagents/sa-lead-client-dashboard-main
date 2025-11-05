import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accounting Virtual Assistant | ShoreAgents',
  description: 'Specialized virtual assistants for accounting and financial management.',
}

export default function AccountingVirtualAssistant() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Accounting Virtual Assistant</h1>
        <p className="text-lg text-gray-600">
          Professional virtual assistants trained in accounting and financial services.
        </p>
      </div>
    </div>
  )
}

