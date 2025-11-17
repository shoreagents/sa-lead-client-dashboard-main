"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog-videocall'
import { Button } from '@/components/ui/button'
import { Phone, PhoneOff, Video } from 'lucide-react'
import { useEffect, useState } from 'react'

interface IncomingCallModalProps {
  isOpen: boolean
  callerName?: string
  onAccept: () => void
  onDecline: () => void
}

export function IncomingCallModal({ 
  isOpen, 
  callerName, 
  onAccept, 
  onDecline 
}: IncomingCallModalProps) {
  const [ringing, setRinging] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setRinging(true)
      // Optional: Play ringtone sound here
      // const audio = new Audio('/sounds/incoming-call.mp3')
      // audio.loop = true
      // audio.play()
      
      return () => {
        setRinging(false)
        // audio.pause()
      }
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent 
        className="!w-[90%] !max-w-[400px] !p-0 overflow-hidden"
        showCloseButton={false}
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="bg-gradient-to-br from-lime-500 to-lime-600 p-8 text-white">
          <div className="flex flex-col items-center gap-4">
            {/* Animated phone icon */}
            <div className={`relative ${ringing ? 'animate-pulse' : ''}`}>
              <div className="absolute inset-0 bg-lime-400 rounded-full animate-ping opacity-75" />
              <div className="relative bg-white/20 backdrop-blur-sm rounded-full p-6">
                <Phone className="w-16 h-16 text-white" />
              </div>
            </div>

            {/* Caller info */}
            <div className="text-center">
              <DialogTitle className="text-2xl font-bold mb-2 text-white">
                Incoming Call
              </DialogTitle>
              <DialogDescription className="text-lime-100 text-base">
                {callerName ? `${callerName} is calling you` : 'You have an incoming video call'}
              </DialogDescription>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="p-6 bg-white">
          <div className="flex items-center justify-center gap-4">
            {/* Decline button */}
            <Button
              variant="outline"
              size="lg"
              onClick={onDecline}
              className="flex-1 bg-red-50 hover:bg-red-100 border-red-300 text-red-600 hover:text-red-700 h-14 text-base font-semibold"
            >
              <PhoneOff className="w-5 h-5 mr-2" />
              Decline
            </Button>

            {/* Accept button */}
            <Button
              size="lg"
              onClick={onAccept}
              className="flex-1 bg-lime-600 hover:bg-lime-700 text-white h-14 text-base font-semibold shadow-lg"
            >
              <Video className="w-5 h-5 mr-2" />
              Accept
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

