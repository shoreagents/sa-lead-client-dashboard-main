'use client'

import { UserGuard } from '@/components/auth/UserGuard'
import { UserDashboardSidebar } from '@/components/layout/UserDashboardSidebar'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { useUserAuth } from '@/lib/user-auth-context'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { 
  Settings, 
  Bell, 
  Shield, 
  Palette,
  Globe,
  Mail,
  Phone,
  User,
  Building,
  Save,
  Edit
} from 'lucide-react'
import { useState } from 'react'

export default function SettingsPage() {
  const { user } = useUserAuth()
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
  })
  
  const [privacy, setPrivacy] = useState({
    publicProfile: false,
    showEmail: false,
    showPhone: false,
  })
  
  const [appearance, setAppearance] = useState({
    theme: 'light',
    language: 'en',
  })

  return (
    <UserGuard>
      <SidebarProvider>
        <UserDashboardSidebar />
        <SidebarInset>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-20">

            {/* Settings Sections */}
            <div className="grid gap-6">
              {/* Notifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5 text-lime-600" />
                    Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive updates via email
                      </p>
                    </div>
                    <Switch
                      checked={notifications.email}
                      onCheckedChange={(checked) => 
                        setNotifications(prev => ({ ...prev, email: checked }))
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive browser notifications
                      </p>
                    </div>
                    <Switch
                      checked={notifications.push}
                      onCheckedChange={(checked) => 
                        setNotifications(prev => ({ ...prev, push: checked }))
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>SMS Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive updates via SMS
                      </p>
                    </div>
                    <Switch
                      checked={notifications.sms}
                      onCheckedChange={(checked) => 
                        setNotifications(prev => ({ ...prev, sms: checked }))
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Privacy & Security */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-lime-600" />
                    Privacy & Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Public Profile</Label>
                      <p className="text-sm text-muted-foreground">
                        Make your profile visible to other users
                      </p>
                    </div>
                    <Switch
                      checked={privacy.publicProfile}
                      onCheckedChange={(checked) => 
                        setPrivacy(prev => ({ ...prev, publicProfile: checked }))
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Show Email</Label>
                      <p className="text-sm text-muted-foreground">
                        Display your email on your profile
                      </p>
                    </div>
                    <Switch
                      checked={privacy.showEmail}
                      onCheckedChange={(checked) => 
                        setPrivacy(prev => ({ ...prev, showEmail: checked }))
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Show Phone</Label>
                      <p className="text-sm text-muted-foreground">
                        Display your phone number on your profile
                      </p>
                    </div>
                    <Switch
                      checked={privacy.showPhone}
                      onCheckedChange={(checked) => 
                        setPrivacy(prev => ({ ...prev, showPhone: checked }))
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Appearance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="w-5 h-5 text-lime-600" />
                    Appearance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Theme</Label>
                    <div className="flex gap-2">
                      <Button
                        variant={appearance.theme === 'light' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setAppearance(prev => ({ ...prev, theme: 'light' }))}
                      >
                        Light
                      </Button>
                      <Button
                        variant={appearance.theme === 'dark' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setAppearance(prev => ({ ...prev, theme: 'dark' }))}
                      >
                        Dark
                      </Button>
                      <Button
                        variant={appearance.theme === 'system' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setAppearance(prev => ({ ...prev, theme: 'system' }))}
                      >
                        System
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Language</Label>
                    <div className="flex gap-2">
                      <Button
                        variant={appearance.language === 'en' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setAppearance(prev => ({ ...prev, language: 'en' }))}
                      >
                        English
                      </Button>
                      <Button
                        variant={appearance.language === 'es' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setAppearance(prev => ({ ...prev, language: 'es' }))}
                      >
                        Español
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Account Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-lime-600" />
                    Account Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Account Type</Label>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-lime-100 text-lime-800">
                          {user?.user_type || 'Standard'}
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Member Since</Label>
                      <p className="text-sm text-muted-foreground">
                        {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <Button className="bg-lime-600 hover:bg-lime-700">
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </UserGuard>
  )
}
