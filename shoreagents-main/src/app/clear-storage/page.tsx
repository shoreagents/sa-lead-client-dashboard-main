'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Trash2, RefreshCw, CheckCircle } from 'lucide-react'

export default function ClearStoragePage() {
  const [storageItems, setStorageItems] = useState<string[]>([])
  const [cleared, setCleared] = useState(false)

  useEffect(() => {
    // Get all localStorage keys
    const keys = Object.keys(localStorage)
    setStorageItems(keys)
  }, [])

  const clearAllStorage = () => {
    // Clear localStorage
    localStorage.clear()
    
    // Clear sessionStorage
    sessionStorage.clear()
    
    setCleared(true)
    setStorageItems([])
    
    // Reload after 2 seconds
    setTimeout(() => {
      window.location.href = '/'
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Trash2 className="w-6 h-6 text-orange-600" />
            Clear Browser Storage
          </CardTitle>
          <CardDescription>
            Remove all localStorage and sessionStorage data to become a new anonymous user
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {!cleared ? (
            <>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h3 className="font-semibold text-orange-900 mb-2">
                  Current Storage Items ({storageItems.length})
                </h3>
                {storageItems.length > 0 ? (
                  <ul className="space-y-1 text-sm text-orange-800">
                    {storageItems.map((key) => (
                      <li key={key} className="font-mono">
                        • {key}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-orange-800">No storage items found</p>
                )}
              </div>

              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  This will:
                </p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>✓ Remove your device ID</li>
                  <li>✓ Clear all session data</li>
                  <li>✓ Clear all localStorage items</li>
                  <li>✓ Make you a new anonymous user</li>
                  <li>✓ Trigger the 45-second modal on next visit</li>
                </ul>
              </div>

              <Button 
                onClick={clearAllStorage}
                className="w-full bg-orange-600 hover:bg-orange-700"
                size="lg"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear All Storage & Become Anonymous
              </Button>
            </>
          ) : (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                Storage Cleared Successfully!
              </h3>
              <p className="text-gray-600 mb-4">
                Redirecting you to homepage as a new anonymous user...
              </p>
              <RefreshCw className="w-6 h-6 text-gray-400 mx-auto animate-spin" />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

