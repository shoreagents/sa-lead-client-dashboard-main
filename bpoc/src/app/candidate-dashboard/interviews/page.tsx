'use client'

import CandidateLayout from '@/components/layout/CandidateLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function InterviewsPage() {
  return (
    <CandidateLayout 
      title="Interviews" 
      description="View your interview schedule"
    >
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-white">Interviews</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">Interviews content coming soon...</p>
        </CardContent>
      </Card>
    </CandidateLayout>
  )
}

