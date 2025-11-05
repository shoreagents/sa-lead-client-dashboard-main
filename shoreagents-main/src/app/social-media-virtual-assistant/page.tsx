import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Social Media Virtual Assistant | ShoreAgents',
  description: 'Professional virtual assistants for social media management and engagement.',
}

export default function SocialMediaVirtualAssistant() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Social Media Virtual Assistant</h1>
        <p className="text-lg text-gray-600">
          Dedicated virtual assistants to manage and grow your social media presence.
        </p>
      </div>
    </div>
  )
}

