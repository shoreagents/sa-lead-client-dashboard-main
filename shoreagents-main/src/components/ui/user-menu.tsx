"use client"

import { useState, useMemo, useCallback } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { User, LogOut, Settings, Building, LayoutDashboard, Shield, ChevronRight } from "lucide-react"
import { useUserAuth } from "@/lib/user-auth-context"
import { useAuth } from "@/lib/auth-context"
import { toast } from "sonner"
import { Badge } from "@/components/ui/badge"

export function UserMenu() {
  const { user, signOut, isClient, loading: authLoading } = useUserAuth()
  const { isAdmin: isAdminFromAuth } = useAuth()
  const [loading, setLoading] = useState(false)
  
  // Use isAdmin from auth context, or check user_type directly
  const isUserAdmin = isAdminFromAuth || (user?.user_type as string) === 'Admin'


  // Memoize the sign out handler to prevent unnecessary re-renders
  const handleSignOut = useCallback(async () => {
    setLoading(true)
    try {
      console.log('🔍 UserMenu - Starting sign out...')
      await signOut()
      console.log('✅ UserMenu - Sign out completed')
      toast.success("Signed out successfully")
    } catch (error) {
      console.error("❌ UserMenu - Sign out error:", error)
      toast.error("Failed to sign out")
    } finally {
      setLoading(false)
    }
  }, [signOut])

  // Memoize user initials calculation
  const userInitials = useMemo(() => {
    if (!user?.first_name && !user?.last_name) return 'U'
    const firstName = user.first_name || ''
    const lastName = user.last_name || ''
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase() || 'U'
  }, [user?.first_name, user?.last_name])

  // Memoize user display name
  const userDisplayName = useMemo(() => {
    if (!user) return 'User'
    const firstName = user.first_name || ''
    const lastName = user.last_name || ''
    return `${firstName} ${lastName}`.trim() || user.email || 'User'
  }, [user])

  // Don't render if no user (but allow rendering even if loading to avoid stuck state)
  if (!user) {
    return null
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full ring-2 ring-transparent hover:ring-lime-500 transition-all duration-200">
          <Avatar className="h-10 w-10 border-2 border-white shadow-md">
            <AvatarFallback className="bg-gradient-to-br from-lime-500 to-lime-600 text-white text-base font-semibold">
              {userInitials || 'U'}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 p-2 mt-2" align="end" forceMount sideOffset={0}>
        {/* User Info Header */}
        <DropdownMenuLabel className="font-normal p-3 rounded-lg bg-gradient-to-br from-lime-50 to-white border border-lime-100">
          <div className="flex items-start gap-3">
            <Avatar className="h-12 w-12 border-2 border-lime-500 shadow-sm">
              <AvatarFallback className="bg-gradient-to-br from-lime-500 to-lime-600 text-white text-lg font-semibold">
                {userInitials || 'U'}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-base font-semibold text-gray-900 truncate">
                  {userDisplayName}
                </p>
                {isUserAdmin && (
                  <Badge className="bg-lime-600 hover:bg-lime-700 text-white text-xs px-2 py-0 h-5 flex items-center gap-1">
                    <Shield className="h-3 w-3" />
                    Admin
                  </Badge>
                )}
              </div>
              <p className="text-xs text-gray-600 truncate mb-1.5">
                {user.email}
              </p>
              {user.company && (
                <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-white rounded px-2 py-1 border border-gray-200">
                  <Building className="h-3 w-3 text-lime-600" />
                  <span className="truncate">{user.company}</span>
                </div>
              )}
            </div>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator className="my-2" />
        
        {/* Navigation Items */}
        <div className="space-y-1">
          <DropdownMenuItem asChild className="cursor-pointer rounded-lg px-4 py-3 hover:bg-lime-600 hover:text-white focus:bg-lime-600 focus:text-white group transition-all duration-200">
            <a href={isUserAdmin ? "/admin-dashboard" : "/user-dashboard"} className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <LayoutDashboard className="h-5 w-5 text-lime-600 group-hover:text-white transition-colors" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">Dashboard</span>
                  <span className="text-xs opacity-70">View your overview</span>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-all" />
            </a>
          </DropdownMenuItem>
          
          <DropdownMenuItem className="cursor-pointer rounded-lg px-4 py-3 hover:bg-lime-600 hover:text-white focus:bg-lime-600 focus:text-white group transition-all duration-200">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <Settings className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">Settings</span>
                  <span className="text-xs opacity-70">Manage preferences</span>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-all" />
            </div>
          </DropdownMenuItem>
        </div>
        
        <DropdownMenuSeparator className="my-2" />
        
        {/* Sign Out */}
        <DropdownMenuItem 
          onClick={handleSignOut}
          disabled={loading}
          className="cursor-pointer rounded-lg px-4 py-3 text-red-600 hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white group transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <LogOut className="h-5 w-5 group-hover:text-white transition-colors" />
              <div className="flex flex-col">
                <span className="text-sm font-semibold">{loading ? "Signing out..." : "Sign out"}</span>
                <span className="text-xs opacity-70">End your session</span>
              </div>
            </div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
