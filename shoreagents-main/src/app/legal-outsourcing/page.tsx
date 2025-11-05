import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal Outsourcing | ShoreAgents',
  description: 'Comprehensive legal outsourcing services to support your legal operations.',
}

export default function LegalOutsourcing() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Legal Outsourcing</h1>
        <p className="text-lg text-gray-600">
          Professional legal support and outsourcing services for law firms and legal departments.
        </p>
      </div>
    </div>
  )
}

