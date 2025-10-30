'use client'

import { useEffect, useState } from 'react'
import { Button } from './button'
import { LoginModal } from './login-modal'
import { UserMenu } from './user-menu'
import { createClient } from '@/lib/supabase/client'

export function AuthButtons() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkUser = async () => {
      try {
        const supabase = createClient()
        
        // Get device/user ID from localStorage
        const deviceId = localStorage.getItem('shoreagents_device_id') || 
                        localStorage.getItem('user_id')
        
        if (!deviceId) {
          setLoading(false)
          return
        }

        // Check if user exists in our users table
        const { data, error } = await supabase
          .from('users')
          .select('*')
          .eq('user_id', deviceId)
          .single()

        if (data && data.user_type && data.user_type !== 'Anonymous') {
          setUser(data)
        }
        
        setLoading(false)
      } catch (error) {
        console.error('Error checking user:', error)
        setLoading(false)
      }
    }

    checkUser()
  }, [])

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

