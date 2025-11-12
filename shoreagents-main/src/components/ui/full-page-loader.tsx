'use client'

import { Progress } from '@/components/ui/progress'
import { Spinner } from '@/components/ui/shadcn-io/spinner'
import { useState, useEffect } from 'react'

interface FullPageLoaderProps {
  isLoading: boolean
  progress: number
  message?: string
}

export function FullPageLoader({ 
  isLoading, 
  progress, 
  message = 'Processing your request...' 
}: FullPageLoaderProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (isLoading) {
      setShouldRender(true)
      // Small delay to ensure DOM is ready before fade in
      setTimeout(() => setIsVisible(true), 10)
    } else {
      // Start fade out
      setIsVisible(false)
      // Remove from DOM after fade out animation completes
      const timer = setTimeout(() => {
        setShouldRender(false)
      }, 500) // Match transition duration
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  if (!shouldRender) return null

  return (
    <>
      <div 
        className={`fixed top-16 left-0 right-0 bottom-0 z-40 flex items-center justify-center transition-opacity duration-500 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Animated background - Bright Lime Green branding */}
        <div className="absolute inset-0 bg-gradient-to-br from-lime-50 via-lime-100 to-lime-50 overflow-hidden">
          {/* Animated grid pattern */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'gridMove 20s linear infinite',
            }}
          ></div>
          
          {/* Animated particles/orbs - Bright lime green */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-lime-400/40 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]"></div>
            <div className="absolute top-40 right-32 w-96 h-96 bg-lime-500/30 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
            <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-lime-400/35 rounded-full blur-3xl animate-[float_7s_ease-in-out_infinite]"></div>
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-lime-500/40 rounded-full blur-3xl animate-[float_9s_ease-in-out_infinite]"></div>
          </div>

          {/* Rotating gradient rings - Bright lime green */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-[600px] h-[600px] rounded-full border-2 border-lime-400/30"
              style={{
                animation: 'rotate 15s linear infinite',
              }}
            ></div>
            <div 
              className="absolute w-[500px] h-[500px] rounded-full border-2 border-lime-500/30"
              style={{
                animation: 'rotate 12s linear infinite reverse',
              }}
            ></div>
            <div 
              className="absolute w-[400px] h-[400px] rounded-full border-2 border-lime-400/30"
              style={{
                animation: 'rotate 18s linear infinite',
              }}
            ></div>
          </div>
        </div>

        {/* Loading content */}
        <div className="relative z-10 w-full max-w-lg px-8">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-lime-200">
            {/* Infinite spinner on top */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Spinner variant="infinite" size={64} className="text-lime-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-lime-500/20 rounded-full blur-sm animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Loading</span>
                <span className="text-2xl font-bold text-lime-600">
                  {progress}%
                </span>
              </div>
              <div className="relative">
                <Progress 
                  value={progress} 
                  className="h-2.5 bg-lime-100 border border-lime-200"
                />
                {/* Glow effect on progress - Bright lime green */}
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-lime-400 to-lime-500 rounded-full blur-sm transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Loading text */}
            <p className="text-center text-sm text-gray-600 mt-6 font-light">
              {message}
            </p>

            {/* Animated dots - Bright lime green */}
            <div className="flex justify-center gap-2 mt-4">
              <div className="w-2 h-2 bg-lime-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-2 h-2 bg-lime-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-lime-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -30px) scale(1.1);
          }
          50% {
            transform: translate(-15px, 20px) scale(0.9);
          }
          75% {
            transform: translate(30px, 10px) scale(1.05);
          }
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  )
}

