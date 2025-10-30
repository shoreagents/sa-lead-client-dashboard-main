'use client'

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Copy, Check, Mail, X } from 'lucide-react'

interface EmailComposerModalProps {
  isOpen: boolean
  onClose: () => void
  candidateName: string
  candidateEmail: string
  candidateFirstName?: string
}

export function EmailComposerModal({
  isOpen,
  onClose,
  candidateName,
  candidateEmail,
  candidateFirstName
}: EmailComposerModalProps) {
  const [copied, setCopied] = useState(false)
  const [imageError, setImageError] = useState(false)

  const firstName = candidateFirstName || candidateName.split(' ')[0]
  
  const emailContent = `Hi ${firstName},

Thanks for applying with ShoreAgents. We have received your application and it will now be processed. If you have not already and would like to make your application stand out please send over a quick video intro about you. Include why you are applying, some brief info about your work history, and what skills you have that are suitable for the role.

From here we will verify a few details about yourself. Below is the complete list of what we need from you if we do not have it already.

• Salary expectation
• Location in relation to our office in Philexcel Clark
• What is your shift preference
• Render obligations
• Most recent resume (auto-generated resumes will not be acceptable)

Once we have all these items we will give you a call as a part of the next stage of our process. The faster you are to ensure you pass any items we need the faster we can get you on a client interview.

Have a great day.`

  const emailSignature = `---
Recruitment Team | Career Finder
ShoreAgents Careers`

  const fullEmailText = `${emailContent}

${emailSignature}
${typeof window !== 'undefined' ? window.location.origin : ''}/SAcareers.png
📞 +63 917 702 0676
📧 recruitment@shoreagents.com
📍 Philexcel Business Park, M. Roxas Highway, Clark Freeport Zone
🌐 www.careers.shoreagents.com/bpo-jobs`

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(fullEmailText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
      alert('Failed to copy email content')
    }
  }

  const handleOpenOutlook = () => {
    const subject = encodeURIComponent('ShoreAgents Application - Next Steps')
    const body = encodeURIComponent(fullEmailText)
    window.location.href = `mailto:${candidateEmail}?subject=${subject}&body=${body}`
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="!max-w-4xl sm:!max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader className="relative">
          <DialogTitle className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-lime-600" />
            <span className="text-lg font-bold text-gray-900">Email to {candidateName}</span>
          </DialogTitle>
          <button
            onClick={onClose}
            className="absolute top-0 right-0 p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
          </button>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-4">
          {/* Email Details */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-700">To:</span>
              <span className="text-sm text-gray-900">{candidateEmail}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-700">Subject:</span>
              <span className="text-sm text-gray-900">ShoreAgents Application - Next Steps</span>
            </div>
          </div>

          {/* Email Content */}
          <div className="border border-gray-200 rounded-lg p-4 bg-white">
            <div className="space-y-4">
              {/* Email Body */}
              <pre className="whitespace-pre-wrap font-sans text-sm text-gray-800 leading-relaxed">
                {emailContent}
              </pre>
              
              {/* Email Signature Text */}
              <pre className="whitespace-pre-wrap font-sans text-sm text-gray-800 leading-relaxed border-t border-gray-200 pt-4">
                {emailSignature}
              </pre>
              
              {/* Signature Image */}
              <div className="pt-2 bg-white">
                <img 
                  src="/SAcareers.png" 
                  alt="ShoreAgents Careers Signature" 
                  className="w-full max-w-2xl block"
                  style={{ maxWidth: '600px', height: 'auto' }}
                  onError={(e) => {
                    console.error('❌ Failed to load image from /SAcareers.png')
                    console.error('Current URL:', window.location.origin)
                    console.error('Full path would be:', `${window.location.origin}/SAcareers.png`)
                    setImageError(true)
                  }}
                  onLoad={() => {
                    console.log('✅ Image loaded successfully from /SAcareers.png')
                  }}
                />
                {imageError && (
                  <div className="p-4 bg-red-50 rounded text-center border border-red-200">
                    <p className="text-sm text-red-600 font-semibold">⚠️ Image failed to load</p>
                    <p className="text-xs text-red-500 mt-1">Expected path: {typeof window !== 'undefined' ? window.location.origin : ''}/SAcareers.png</p>
                    <p className="text-xs text-gray-600 mt-2">Please check browser console for details</p>
                  </div>
                )}
              </div>
              
              {/* Contact Details */}
              <div className="text-sm text-gray-700 space-y-1">
                <p>📞 +63 917 702 0676</p>
                <p>📧 recruitment@shoreagents.com</p>
                <p>📍 Philexcel Business Park, M. Roxas Highway, Clark Freeport Zone</p>
                <p>🌐 www.careers.shoreagents.com/bpo-jobs</p>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="flex justify-between items-center gap-3">
          <Button
            onClick={handleCopyEmail}
            variant="outline"
            className="border-lime-300 text-lime-700 hover:bg-lime-50"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy Email Content
              </>
            )}
          </Button>
          
          <div className="flex gap-2">
            <Button
              onClick={onClose}
              variant="outline"
            >
              Close
            </Button>
            <Button
              onClick={handleOpenOutlook}
              className="bg-lime-600 hover:bg-lime-700 text-white"
            >
              <Mail className="w-4 h-4 mr-2" />
              Open in Email Client
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

