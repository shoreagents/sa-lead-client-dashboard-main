import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Content Writing Outsourcing | ShoreAgents',
  description: 'Professional content writing and copywriting outsourcing services.',
}

export default function ContentWritingOutsourcing() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Content Writing Outsourcing</h1>
        <p className="text-lg text-gray-600">
          Expert content writing and copywriting services for your marketing needs.
        </p>
      </div>
    </div>
  )
}

