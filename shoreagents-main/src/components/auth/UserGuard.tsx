"use client"

import { useUserAuth } from '@/lib/user-auth-context'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface UserGuardProps {
  children: React.ReactNode
  requireVerification?: boolean
  fallback?: React.ReactNode
}

export function UserGuard({ 
  children, 
  requireVerification = false,
  fallback = <div></div> 
}: UserGuardProps) {
  const { user, loading, isAuthenticated, isVerified } = useUserAuth()
  const router = useRouter()

  // Debug logging
  console.log('🔍 UserGuard Debug:', JSON.stringify({
    user: user?.user_id,
    loading,
    isAuthenticated,
    isVerified,
    requireVerification,
    willRedirect: !loading && !isAuthenticated,
    showFallback: loading || !isAuthenticated || (requireVerification && !isVerified)
  }, null, 2))

  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        // Redirect to home page where users can use the login modal
        router.push('/')
        return
      }

      if (requireVerification && !isVerified) {
        // Redirect to verification page
        router.push('/auth/verify')
        return
      }
    }
  }, [loading, isAuthenticated, isVerified, requireVerification, router])

  if (loading) {
    return <>{fallback}</>
  }

  if (!isAuthenticated) {
    return <>{fallback}</>
  }

  if (requireVerification && !isVerified) {
    return <>{fallback}</>
  }

  return <>{children}</>
}
