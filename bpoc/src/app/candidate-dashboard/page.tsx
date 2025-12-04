'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '@/contexts/AuthContext'
import CandidateLayout from '@/components/layout/CandidateLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  User, 
  FileText,
  Briefcase,
  MessageSquare,
  ArrowRight
} from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function CandidateDashboardPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [userProfile, setUserProfile] = useState<any>(null)

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        if (user?.id) {
          const response = await fetch(`/api/user/profile?userId=${user.id}`)
          if (response.ok) {
            const data = await response.json()
            setUserProfile(data.user)
          }
        }
      } catch (error) {
        console.error('Error fetching user profile:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUserProfile()
  }, [user?.id])

  const dashboardCards = [
    {
      title: 'Profile',
      description: 'View and edit your profile information',
      icon: User,
      href: '/candidate-dashboard/profile',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Resume',
      description: 'Manage and update your resume',
      icon: FileText,
      href: '/candidate-dashboard/resume',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Applications',
      description: 'Track your job applications',
      icon: Briefcase,
      href: '/candidate-dashboard/applications',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Interviews',
      description: 'View your interview schedule',
      icon: MessageSquare,
      href: '/candidate-dashboard/interviews',
      color: 'from-purple-500 to-pink-600'
    }
  ]

  return (
    <CandidateLayout 
      title="Candidate Dashboard" 
      description="Manage your profile, resume, applications, and interviews"
    >
      <div className="space-y-6">
        {/* Welcome Section */}
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarImage 
                  src={userProfile?.avatar_url || user?.user_metadata?.avatar_url} 
                  alt={userProfile?.full_name || user?.email || 'User'}
                />
                <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-purple-600 text-white">
                  {userProfile?.full_name?.[0] || user?.email?.[0] || 'U'}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Welcome back, {userProfile?.full_name || user?.user_metadata?.full_name || user?.email || 'User'}!
                </h2>
                <p className="text-gray-400 mt-1">
                  Manage your profile, applications, and career journey
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dashboardCards.map((card, index) => {
            const IconComponent = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className="glass-card hover:bg-white/5 transition-all duration-200 cursor-pointer group"
                  onClick={() => router.push(card.href)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-white mb-2">{card.title}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {card.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Resumes</p>
                  <p className="text-2xl font-bold text-white">
                    {loading ? '...' : '1'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Applications</p>
                  <p className="text-2xl font-bold text-white">
                    {loading ? '...' : '0'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Interviews</p>
                  <p className="text-2xl font-bold text-white">
                    {loading ? '...' : '0'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </CandidateLayout>
  )
}

