import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Graphic Design Virtual Assistant | ShoreAgents',
  description: 'Creative virtual assistants for graphic design and visual content creation.',
}

export default function GraphicDesignVirtualAssistant() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Graphic Design Virtual Assistant</h1>
        <p className="text-lg text-gray-600">
          Expert virtual assistants specialized in graphic design and creative services.
        </p>
      </div>
    </div>
  )
}

