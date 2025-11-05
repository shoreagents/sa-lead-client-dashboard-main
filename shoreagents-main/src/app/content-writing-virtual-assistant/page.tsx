import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Content Writing Virtual Assistant | ShoreAgents',
  description: 'Expert virtual assistants for content creation and copywriting.',
}

export default function ContentWritingVirtualAssistant() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Content Writing Virtual Assistant</h1>
        <p className="text-lg text-gray-600">
          Professional virtual assistants specialized in content writing and copywriting.
        </p>
      </div>
    </div>
  )
}

