import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Development Outsourcing | ShoreAgents',
  description: 'Professional website development and design outsourcing services.',
}

export default function WebsiteOutsourcing() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Website Development Outsourcing</h1>
        <p className="text-lg text-gray-600">
          Expert website development and design services for your business.
        </p>
      </div>
    </div>
  )
}

