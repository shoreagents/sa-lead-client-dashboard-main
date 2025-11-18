'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Shield, AlertCircle, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const supabase = createClient()

// Secret invite code (change this to something secure)
const ADMIN_INVITE_CODE = process.env.NEXT_PUBLIC_ADMIN_INVITE_CODE || 'SHOREAGENTS_ADMIN_2025'

export default function AdminSignupPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    inviteCode: ''
  })

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
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
        setError('All fields are required')
        setLoading(false)
        return
      }

      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match')
        setLoading(false)
        return
      }

      if (formData.password.length < 8) {
        setError('Password must be at least 8 characters')
        setLoading(false)
        return
      }

      // Verify invite code (DISABLED FOR TESTING - ENABLE IN PRODUCTION!)
      // if (formData.inviteCode !== ADMIN_INVITE_CODE) {
      //   setError('Invalid admin invite code. Contact your system administrator.')
      //   setLoading(false)
      //   return
      // }

      console.log('📝 Creating admin account...')

      // IMPORTANT: Sign out first to prevent UserAuthProvider race condition
      await supabase.auth.signOut()

      // Step 1: Create Supabase Auth user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          // Skip email confirmation for admin accounts
          emailRedirectTo: undefined,
        }
      })

      if (authError) {
        console.error('❌ Auth signup error:', authError)
        setError(authError.message)
        setLoading(false)
        return
      }

      if (!authData.user) {
        setError('Failed to create user account')
        setLoading(false)
        return
      }

      console.log('✅ Auth user created:', authData.user.id)

      // IMPORTANT: Sign out immediately to prevent auth state listener from firing
      await supabase.auth.signOut()

      // Small delay to ensure auth system has fully processed
      await new Promise(resolve => setTimeout(resolve, 500))

      // Step 2: Create admin user in users table with Admin type
      const { error: dbError } = await supabase
        .from('users')
        .insert({
          user_id: authData.user.id,
          auth_user_id: authData.user.id,
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          user_type: 'Admin', // Set as Admin type
          is_admin: true,
          is_verified: true, // Auto-verify admin accounts
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })

      if (dbError) {
        console.error('❌ Database insert error:', dbError)
        setError('Account created but failed to set admin privileges. Contact support.')
        setLoading(false)
        return
      }

      console.log('✅ Admin user record created in database')

      // Step 3: Create admin_users entry (if you have that table)
      // This is optional and won't fail if table doesn't exist
      try {
        const { error: adminError } = await supabase
          .from('admin_users')
          .insert({
            user_id: authData.user.id,
            admin_level: 'super',
            permissions: {
              user_management: true,
              system_settings: true,
              analytics: true,
              billing: true,
              support: true,
              content_management: true
            },
            admin_preferences: {
              dashboard_layout: 'default',
              notifications: true,
              email_reports: true,
              security_alerts: true
            },
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          })

        if (adminError) {
          console.warn('⚠️ Admin users table insert warning (this is optional):', adminError.message)
        } else {
          console.log('✅ Admin users record created')
        }
      } catch (adminTableError) {
        // admin_users table doesn't exist - that's okay
        console.log('ℹ️ Admin users table not found (this is optional)')
      }

      console.log('🎉 Admin account creation complete!')
      
      setSuccess(true)
      
      // Wait 2 seconds then redirect to admin login
      setTimeout(() => {
        router.push('/admin-login')
      }, 2000)

    } catch (err: any) {
      console.error('❌ Signup error:', err)
      setError(err.message || 'Failed to create admin account')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-lime-50 to-green-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-2 border-green-300">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Admin Account Created!</h2>
              <p className="text-gray-600 mb-4">
                Your admin account has been successfully created. Redirecting to login...
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
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
            <CardTitle className="text-3xl font-bold text-gray-900">Admin Signup</CardTitle>
            <CardDescription className="text-base mt-2">
              Create a ShoreAgents administrator account
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

            {/* First Name */}
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

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
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Minimum 8 characters"
                value={formData.password}
                onChange={handleChange}
                required
                disabled={loading}
                minLength={8}
              />
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Re-enter password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                disabled={loading}
                minLength={8}
              />
            </div>

            {/* Admin Invite Code - HIDDEN FOR TESTING */}
            {/* <div className="space-y-2">
              <Label htmlFor="inviteCode">Admin Invite Code</Label>
              <Input
                id="inviteCode"
                name="inviteCode"
                type="password"
                placeholder="Secret admin invite code"
                value={formData.inviteCode}
                onChange={handleChange}
                required
                disabled={loading}
              />
              <p className="text-xs text-gray-500">
                Contact your system administrator for the admin invite code
              </p>
            </div> */}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-lime-600 hover:bg-lime-700 text-white font-semibold py-3"
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Creating Admin Account...
                </>
              ) : (
                'Create Admin Account'
              )}
            </Button>

            {/* Login Link */}
            <div className="text-center text-sm text-gray-600 mt-4">
              Already have an admin account?{' '}
              <Link href="/admin-login" className="text-lime-600 hover:text-lime-700 font-semibold">
                Login here
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

