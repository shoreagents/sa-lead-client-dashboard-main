import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing Virtual Assistant | ShoreAgents',
  description: 'Professional virtual assistants for marketing and digital campaigns.',
}

export default function MarketingVirtualAssistant() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Marketing Virtual Assistant</h1>
        <p className="text-lg text-gray-600">
          Expert virtual assistants to support your marketing strategies and campaigns.
        </p>
      </div>
    </div>
  )
}

