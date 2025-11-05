import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Drafting Outsourcing | ShoreAgents',
  description: 'Expert CAD drafting and technical drawing outsourcing services.',
}

export default function DraftingOutsourcing() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Drafting Outsourcing</h1>
        <p className="text-lg text-gray-600">
          Professional CAD drafting and technical drawing services for your projects.
        </p>
      </div>
    </div>
  )
}

