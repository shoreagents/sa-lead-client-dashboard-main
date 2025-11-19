'use client'

import React, { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog-videocall'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Mail, 
  Calendar, 
  Building,
  Star,
  Clock,
  Target,
  User,
  MapPin,
  ExternalLink,
  Loader2,
  Sparkles,
  MessageCircle,
  X
} from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { EnrichmentResultModal, EnrichmentData } from '@/components/ui/enrichment-result-modal'
import { EmailComposerModal } from '@/components/ui/email-composer-modal'
import { useInterviewRequests } from '@/hooks/use-api'

interface LeadDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  lead: {
    id: string
    name: string
    company: string
    email: string
    status: string
    priority: string
    source: string
    created: string
    lastContact: string
    notes: string
    column: string
    userType: string
    userId: string
    quoteCount: number
    industry: string
    firstLeadCapture: boolean
    secondLeadCapture: boolean
    thirdLeadCapture: boolean
    hasInterviewRequest?: boolean
    interviewRequestCount?: number
    allInterviewRequests?: any[]
  } | null
}

interface UserDetails {
  id: string
  name: string
  company: string
  email: string
  phone: string
  industry: string
  userType: string
  created: string
  updated: string
  firstLeadCapture: boolean
  secondLeadCapture: boolean
  thirdLeadCapture: boolean
  hasFilledForm: boolean
  pricingQuotes: any[]
  totalQuotes: number
  totalValue: number
}

export function LeadDetailsModal({ isOpen, onClose, lead }: LeadDetailsModalProps) {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isEnriching, setIsEnriching] = useState(false)
  const [enrichmentSuccess, setEnrichmentSuccess] = useState(false)
  const [enrichmentData, setEnrichmentData] = useState<EnrichmentData | null>(null)
  const [showEnrichmentModal, setShowEnrichmentModal] = useState(false)
  const [showEmailComposer, setShowEmailComposer] = useState(false)
  const [selectedCandidateForEmail, setSelectedCandidateForEmail] = useState<{
    id: string
    name: string
    email: string
    firstName?: string
  } | null>(null)

  // Fetch interview requests using TanStack Query
  const { 
    data: interviewRequestsData, 
    isLoading: isLoadingInterviewRequests, 
    error: interviewRequestsError 
  } = useInterviewRequests(lead?.userId || '')

  console.log('LeadDetailsModal props:', { isOpen, lead })

  useEffect(() => {
    if (isOpen && lead) {
      fetchUserDetails()
    }
  }, [isOpen, lead])

  const fetchUserDetails = async () => {
    if (!lead) return
    
    setIsLoading(true)
    setError(null)
    
    try {
      console.log('Fetching user details for:', lead.userId)
      const response = await fetch(`/api/admin/leads/${lead.userId}`)
      const data = await response.json()
      
      console.log('API response:', data)
      
      if (data.success) {
        setUserDetails(data.data)
      } else {
        setError(data.error || 'Failed to fetch user details')
      }
    } catch (err) {
      setError('Failed to fetch user details')
      console.error('Error fetching user details:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEnrich = async () => {
    if (!userDetails) return
    
    setIsEnriching(true)
    setEnrichmentSuccess(false)
    
    try {
      console.log('Enriching user data for:', userDetails.email)
      const response = await fetch('/api/admin/enrich-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: lead?.userId,
          email: userDetails.email,
          name: userDetails.name,
          company: userDetails.company,
        }),
      })
      
      const data = await response.json()
      
      if (data.success) {
        setEnrichmentSuccess(true)
        setEnrichmentData(data.data)
        
        // Show enrichment modal with results
        setShowEnrichmentModal(true)
        
        // Refresh user details to show enriched data
        await fetchUserDetails()
        
        // Reset success message after 3 seconds
        setTimeout(() => setEnrichmentSuccess(false), 3000)
      } else {
        setError(data.error || 'Failed to enrich user data')
      }
    } catch (err) {
      setError('Failed to enrich user data')
      console.error('Error enriching user data:', err)
    } finally {
      setIsEnriching(false)
    }
  }

  const handleEnrichmentModalClose = () => {
    setShowEnrichmentModal(false)
  }

  const handleMessageCandidate = async (candidateId: string, candidateName: string) => {
    try {
      console.log('🔍 Fetching email for candidate:', candidateId, candidateName)
      
      // Fetch candidate email from BPOC database
      const response = await fetch(`/api/get-candidate-email?candidateId=${candidateId}`)
      const data = await response.json()
      
      if (data.success && data.email) {
        console.log('✅ Candidate email:', data.email)
        
        // Open email composer modal
        setSelectedCandidateForEmail({
          id: candidateId,
          name: candidateName,
          email: data.email,
          firstName: data.firstName
        })
        setShowEmailComposer(true)
      } else {
        console.error('❌ Failed to fetch candidate email:', data.error)
        alert('Failed to fetch candidate email. Please try again.')
      }
    } catch (error) {
      console.error('❌ Error fetching candidate email:', error)
      alert('Error fetching candidate email. Please try again.')
    }
  }

  const handleCloseEmailComposer = () => {
    setShowEmailComposer(false)
    setSelectedCandidateForEmail(null)
  }

  // Check if user has required data for enrichment
  const canEnrich = () => {
    if (!userDetails) return { enabled: false, reason: 'User details not loaded' }
    
    const missingFields = []
    if (!userDetails.email || userDetails.email.trim() === '') missingFields.push('Email')
    if (!userDetails.name || userDetails.name.trim() === '') missingFields.push('Name')
    if (!userDetails.company || userDetails.company.trim() === '') missingFields.push('Company')
    
    if (missingFields.length > 0) {
      return {
        enabled: false,
        reason: `User must have ${missingFields.join(', ')} before enrichment`
      }
    }
    
    return { enabled: true, reason: 'Click to enrich user data using Serper API' }
  }

  const enrichmentStatus = canEnrich()

  if (!lead) return null

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-lime-200 text-lime-900 border-lime-400'
      case 'Medium':
        return 'bg-lime-100 text-lime-800 border-lime-300'
      case 'Low':
        return 'bg-lime-50 text-lime-700 border-lime-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New Lead':
        return 'bg-lime-100 text-lime-800 border-lime-300'
      case 'Stage 1':
        return 'bg-lime-100 text-lime-800 border-lime-300'
      case 'Stage 2':
        return 'bg-lime-100 text-lime-800 border-lime-300'
      case 'Pending':
        return 'bg-lime-100 text-lime-800 border-lime-300'
      case 'Meeting Booked':
        return 'bg-lime-100 text-lime-800 border-lime-300'
      case 'Signed Up':
        return 'bg-lime-100 text-lime-800 border-lime-300'
      case 'Closed Won':
        return 'bg-lime-200 text-lime-900 border-lime-400'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-auto min-w-[600px] max-h-[95vh] overflow-hidden">
        <DialogHeader className="pb-2 relative">
          <DialogTitle className="flex items-center gap-3">
            <User className="w-6 h-6 text-lime-600" />
            <span className="text-xl font-bold text-gray-900">{lead.name}</span>
          </DialogTitle>
          
          {/* X Close Button */}
          <button
            onClick={onClose}
            className="absolute top-0 right-0 p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
          </button>
        </DialogHeader>

        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="w-8 h-8 animate-spin text-lime-600" />
            <span className="ml-2 text-gray-600">Loading user details...</span>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center py-8">
            <div className="text-center">
              <div className="text-lime-600 mb-2">Failed to load user details</div>
              <div className="text-sm text-gray-600">{error}</div>
              <Button 
                onClick={fetchUserDetails} 
                className="mt-4 bg-lime-600 hover:bg-lime-700 text-white"
              >
                Retry
              </Button>
            </div>
          </div>
        ) : userDetails ? (
          <div className="space-y-3 overflow-y-auto max-h-[calc(95vh-120px)] px-1">
          {/* Status and Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Status:</span>
                <Badge className={getStatusColor(lead.status)}>
                  {lead.status}
                </Badge>
              </div>
              
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Company:</span>
                <span className="text-sm text-gray-600">{userDetails.company}</span>
              </div>

              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Industry:</span>
                <span className="text-sm text-gray-600">{userDetails.industry}</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Email:</span>
                <span className="text-sm text-gray-600">{userDetails.email}</span>
              </div>

              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">User Type:</span>
                <span className="text-sm text-gray-600">{userDetails.userType}</span>
              </div>

              {userDetails.totalQuotes > 0 && (
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-lime-600" />
                  <span className="text-sm font-medium text-gray-700">Quotes:</span>
                  <span className="text-sm text-lime-600 font-medium">{userDetails.totalQuotes}</span>
                </div>
              )}
            </div>

            <div className="space-y-3">
              {userDetails.totalValue > 0 && (
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-lime-600" />
                  <span className="text-sm font-medium text-gray-700">Recent Quote:</span>
                  <span className="text-sm text-lime-600 font-medium">₱{userDetails.totalValue.toLocaleString()}</span>
                </div>
              )}

              {/* Interview Request Information */}
              {lead.hasInterviewRequest && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-lime-600" />
                  <span className="text-sm font-medium text-gray-700">Interview Requests:</span>
                  <span className="text-sm font-semibold text-lime-800">{lead.interviewRequestCount || 0}</span>
                </div>
              )}
            </div>
          </div>

          {/* Timeline */}
          <div className="border-t pt-3">
            <h3 className="text-base font-semibold text-gray-900 mb-3">Timeline</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <div>
                  <span className="text-sm font-medium text-gray-700">Created:</span>
                  <span className="text-sm text-gray-600 ml-1">
                    {new Date(userDetails.created).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <div>
                  <span className="text-sm font-medium text-gray-700">Last Updated:</span>
                  <span className="text-sm text-gray-600 ml-1">
                    {new Date(userDetails.updated).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>


          {/* Pricing Quotes */}
          {userDetails.pricingQuotes && userDetails.pricingQuotes.length > 0 && (
            <div className="border-t pt-3">
              <h3 className="text-base font-semibold text-gray-900 mb-3">Pricing Quotes</h3>
              <div className="space-y-2">
                {userDetails.pricingQuotes.map((quote: any, index: number) => (
                  <div key={quote.id} className="bg-gray-50 p-3 rounded">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Quote #{quote.quote_number}</p>
                        <p className="text-sm text-gray-600">
                          {new Date(quote.created_at).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-base font-bold text-lime-600">
                          {quote.currency_code} {parseFloat(quote.total_monthly_cost).toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-500">{quote.member_count || 0} members</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interview Request Details */}
          {lead.hasInterviewRequest && (
            <div className="bg-lime-50 border border-lime-200 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-lime-100 p-2 rounded">
                  <Calendar className="w-5 h-5 text-lime-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-lime-800">All Interview Requests</h3>
                  <p className="text-sm text-lime-600">Complete request history</p>
                </div>
              </div>
              
              {isLoadingInterviewRequests ? (
                <div className="text-center py-4">
                  <Loader2 className="w-4 h-4 animate-spin text-lime-600 mx-auto mb-2" />
                  <div className="text-sm text-lime-600">Loading interview requests...</div>
                </div>
              ) : interviewRequestsError ? (
                <div className="text-center py-4">
                  <div className="text-sm text-lime-600">Failed to load interview requests</div>
                </div>
              ) : interviewRequestsData?.data && interviewRequestsData.data.length > 0 ? (
                <div className="overflow-x-auto">
                  {/* Table Header */}
                  <div className="bg-lime-100 border-b border-lime-200 rounded-t-lg">
                    <div className="flex items-center gap-2 px-3 py-2">
                      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-2">
                        <div className="text-sm font-semibold text-lime-800">Candidate</div>
                        <div className="text-sm font-semibold text-lime-800">Position</div>
                      </div>
                      <div className="w-8 flex-shrink-0 text-sm font-semibold text-lime-800 text-center">Action</div>
                    </div>
                  </div>

                  {/* Table Body */}
                  <div className="bg-white rounded-b-lg border border-lime-100">
                    {interviewRequestsData.data.map((request: any, index: number) => (
                      <div 
                        key={request.id || index} 
                        className={`flex items-center gap-2 px-3 py-2 hover:bg-lime-50 transition-colors ${
                          index !== interviewRequestsData.data.length - 1 ? 'border-b border-gray-100' : ''
                        }`}
                      >
                        {/* Candidate Info */}
                        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-2">
                          {/* Candidate */}
                          <div className="text-base font-semibold text-gray-900 truncate">
                            {request.candidate_name}
                          </div>
                          
                          {/* Position */}
                          <div className="text-base text-gray-700 line-clamp-2 min-w-0">
                            {request.candidate_position || 'Not specified'}
                          </div>
                        </div>

                        {/* Message Button */}
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                size="sm"
                                variant="outline"
                                className="flex-shrink-0 h-8 w-8 p-0 border-lime-300 hover:bg-lime-100 hover:border-lime-500 active:bg-lime-200 active:scale-95 transition-all duration-150"
                                onClick={() => handleMessageCandidate(request.candidate_id, request.candidate_name)}
                              >
                                <MessageCircle className="w-4 h-4 text-lime-600" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Message {request.candidate_name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-4">
                  <div className="text-sm text-lime-600">No interview requests found</div>
                </div>
              )}
            </div>
          )}

          {/* Notes */}
          {lead.notes && (
            <div className="border-t pt-3">
              <h3 className="text-base font-semibold text-gray-900 mb-3">Notes</h3>
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-sm text-gray-700">{lead.notes}</p>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="border-t pt-2">
            <div className="flex justify-between items-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>
                      <Button
                        onClick={handleEnrich}
                        disabled={!enrichmentStatus.enabled || isEnriching}
                        size="sm"
                        className="bg-lime-600 hover:bg-lime-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isEnriching ? (
                          <>
                            <Loader2 className="w-3 h-3 mr-1 animate-spin" />
                            Enriching...
                          </>
                        ) : enrichmentSuccess ? (
                          <>
                            <Sparkles className="w-3 h-3 mr-1" />
                            Enriched!
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-3 h-3 mr-1" />
                            Enrich
                          </>
                        )}
                      </Button>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent 
                    className={`p-3 rounded-lg shadow-lg max-w-xs ${
                      !enrichmentStatus.enabled 
                        ? 'bg-lime-600 text-white border border-lime-700' 
                        : 'bg-gray-900 text-white'
                    }`}
                  >
                    {!enrichmentStatus.enabled ? (
                      <div>
                        <p className="text-sm font-bold mb-1">⚠️ Cannot Enrich</p>
                        <p className="text-xs">{enrichmentStatus.reason}</p>
                      </div>
                    ) : (
                      <p className="text-sm">{enrichmentStatus.reason}</p>
                    )}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              {/* Send Email Button */}
              <Button
                size="sm"
                className="bg-lime-600 hover:bg-lime-700 text-white font-medium"
                onClick={() => {
                  const subject = encodeURIComponent(`Follow up with ${userDetails.name}`)
                  const body = encodeURIComponent(
                    `Dear ${userDetails.name},\n\n` +
                    `Thank you for your interest in ShoreAgents.\n\n` +
                    `We would like to follow up regarding your inquiry.\n\n` +
                    `Best regards,\n` +
                    `ShoreAgents Team`
                  )
                  window.location.href = `mailto:${userDetails.email}?subject=${subject}&body=${body}`
                }}
              >
                <Mail className="w-4 h-4 mr-2" />
                Send an Email
              </Button>
            </div>
          </div>
        </div>
        ) : null}
      </DialogContent>
      
      {/* Enrichment Result Modal */}
      <EnrichmentResultModal
        isOpen={showEnrichmentModal}
        onClose={handleEnrichmentModalClose}
        enrichmentData={enrichmentData}
        userName={lead.name}
      />
      
      {/* Email Composer Modal */}
      {selectedCandidateForEmail && (
        <EmailComposerModal
          isOpen={showEmailComposer}
          onClose={handleCloseEmailComposer}
          candidateName={selectedCandidateForEmail.name}
          candidateEmail={selectedCandidateForEmail.email}
          candidateFirstName={selectedCandidateForEmail.firstName}
        />
      )}
    </Dialog>
  )
}