import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Outsourcing | ShoreAgents',
  description: 'Expert SEO outsourcing services to improve your online visibility and rankings.',
}

export default function SEOOutsourcing() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">SEO Outsourcing</h1>
        <p className="text-lg text-gray-600">
          Professional SEO services to boost your website rankings and organic traffic.
        </p>
      </div>
    </div>
  )
}

