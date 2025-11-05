import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Virtual Assistant | ShoreAgents',
  description: 'Expert virtual assistants specialized in SEO and digital marketing.',
}

export default function SEOVirtualAssistant() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">SEO Virtual Assistant</h1>
        <p className="text-lg text-gray-600">
          Professional virtual assistants trained in SEO optimization and digital marketing.
        </p>
      </div>
    </div>
  )
}

