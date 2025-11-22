"use client"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About ShoreAgents</h1>
        <p className="text-xl text-gray-600 mb-8">
          Building world-class offshore teams for ambitious businesses.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <a href="/our-story" className="block p-6 bg-lime-50 rounded-lg hover:bg-lime-100 transition">
            <h2 className="text-2xl font-bold text-lime-700 mb-4">Our Story</h2>
            <p className="text-gray-700">Learn about how ShoreAgents started and our journey.</p>
          </a>
          
          <a href="/proven-results" className="block p-6 bg-lime-50 rounded-lg hover:bg-lime-100 transition">
            <h2 className="text-2xl font-bold text-lime-700 mb-4">Proven Results</h2>
            <p className="text-gray-700">See the real results we've delivered for our clients.</p>
          </a>
          
          <a href="/resources" className="block p-6 bg-lime-50 rounded-lg hover:bg-lime-100 transition">
            <h2 className="text-2xl font-bold text-lime-700 mb-4">Resources</h2>
            <p className="text-gray-700">Guides, tools, and resources to help you succeed.</p>
          </a>
        </div>
      </div>
    </div>
  )
}

