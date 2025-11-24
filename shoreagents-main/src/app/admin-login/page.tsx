'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Shield, AlertCircle, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'

const supabase = createClient()

export default function AdminLoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  // Check if already logged in as admin
  useEffect(() => {
    const checkAdminAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (user) {
        // Check if user is admin
        const { data: userData, error } = await supabase
          .from('users')
          .select('user_type, is_admin')
          .eq('auth_user_id', user.id)
          .single()

        if (!error && userData?.user_type === 'Admin') {
          // Already logged in as admin, redirect to dashboard
          router.push('/admin-dashboard')
        }
      }
    }

    checkAdminAuth()
  }, [router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Validate inputs
      if (!formData.email || !formData.password) {
        setError('Email and password are required')
        setLoading(false)
        return
      }

      console.log('🔐 Admin login attempt for:', formData.email)

      // Step 1: Sign in with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })

      if (authError) {
        console.error('❌ Auth error:', authError)
        setError('Invalid email or password')
        setLoading(false)
        return
      }

      if (!authData.user) {
        setError('Login failed. Please try again.')
        setLoading(false)
        return
      }

      console.log('✅ Auth successful for user:', authData.user.id)

      // Step 2: Verify user is an admin
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('auth_user_id', authData.user.id)
        .single()

      if (userError) {
        console.error('❌ Error fetching user data:', userError)
        setError('Failed to verify admin privileges')
        
        // Sign out the user
        await supabase.auth.signOut()
        setLoading(false)
        return
      }

      console.log('👤 User data:', userData)
      console.log('🔍 User type:', userData.user_type)
      console.log('🔍 Is admin:', userData.is_admin)

      // Check if user is actually an admin
      if (userData.user_type !== 'Admin') {
        console.warn('⚠️ User is not an admin:', userData.user_type)
        setError('Access denied. This account does not have admin privileges.')
        
        // Sign out the user
        await supabase.auth.signOut()
        setLoading(false)
        return
      }

      console.log('✅ Admin verification successful!')

      // Step 3: Update last login timestamp
      await supabase
        .from('users')
        .update({
          last_login: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .eq('id', userData.id)

      console.log('🚀 Redirecting to admin dashboard...')

      // Redirect to admin dashboard
      router.push('/admin-dashboard')

    } catch (err: any) {
      console.error('❌ Login error:', err)
      setError(err.message || 'Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 to-green-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-lime-600 rounded-full flex items-center justify-center">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </div>
          <div className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-900">Admin Login</CardTitle>
            <CardDescription className="text-base mt-2">
              Sign in to your administrator account
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Error Alert */}
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="admin@shoreagents.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
                autoComplete="email"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  autoComplete="current-password"
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  disabled={loading}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-lime-600 hover:bg-lime-700 text-white font-semibold py-3"
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Signing in...
                </>
              ) : (
                'Sign In as Admin'
              )}
            </Button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Need an account?</span>
              </div>
            </div>

            {/* Signup Link */}
            <div className="text-center">
              <Link 
                href="/admin-signup" 
                className="text-lime-600 hover:text-lime-700 font-semibold text-sm"
              >
                Create Admin Account
              </Link>
            </div>

            {/* Regular User Link */}
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600 mb-2">
                Not an admin?
              </p>
              <Link 
                href="/" 
                className="text-gray-700 hover:text-lime-600 text-sm font-medium"
              >
                ← Back to main site
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

