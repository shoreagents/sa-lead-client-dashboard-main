'use client'

import { Button } from './button'
import { LoginModal } from './login-modal'
import { UserMenu } from './user-menu'
import { useUserAuth } from '@/lib/user-auth-context'

export function AuthButtons() {
  const { user, loading } = useUserAuth()

  if (loading) {
    return (
      <div className="flex items-center space-x-2">
        <div className="h-8 w-16 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-8 w-16 bg-gray-200 rounded animate-pulse"></div>
      </div>
    )
  }

  if (user) {
    return <UserMenu />
  }

  return (
    <div className="flex items-center space-x-2">
      <LoginModal />
    </div>
  )
}

