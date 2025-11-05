import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bookkeeping Outsourcing | ShoreAgents',
  description: 'Professional bookkeeping outsourcing services to manage your financial records.',
}

export default function BookkeepingOutsourcing() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Bookkeeping Outsourcing</h1>
        <p className="text-lg text-gray-600">
          Expert bookkeeping services to keep your financial records accurate and up-to-date.
        </p>
      </div>
    </div>
  )
}

