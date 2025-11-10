'use client'

import { Button } from '@/components/ui/button'
import { FullPageLoader } from '@/components/ui/full-page-loader'
import { useState } from 'react'

export default function LoaderTestPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleButton1Click = () => {
    setIsLoading(true)
    setProgress(0)
    
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsLoading(false)
            setProgress(0)
          }, 500)
          return 100
        }
        return prev + 2
      })
    }, 50)
  }

  return (
    <>
      {/* Full-page loader component */}
      <FullPageLoader 
        isLoading={isLoading} 
        progress={progress}
        message="Processing your request..."
      />

      {/* Main content */}
      <div className="flex items-center justify-center min-h-screen gap-4">
        <Button onClick={handleButton1Click}>Button 1</Button>
        <Button>Button 2</Button>
      </div>
    </>
  )
}
