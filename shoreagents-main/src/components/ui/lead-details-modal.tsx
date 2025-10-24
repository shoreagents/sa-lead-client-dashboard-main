'use client'

import React, { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
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
  Sparkles
} from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { EnrichmentResultModal, EnrichmentData } from '@/components/ui/enrichment-result-modal'

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
        return 'bg-red-100 text-red-800 border-red-300'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300'
      case 'Low':
        return 'bg-green-100 text-green-800 border-green-300'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New Lead':
        return 'bg-blue-100 text-blue-800 border-blue-300'
      case 'Stage 1':
        return 'bg-purple-100 text-purple-800 border-purple-300'
      case 'Stage 2':
        return 'bg-indigo-100 text-indigo-800 border-indigo-300'
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300'
      case 'Meeting Booked':
        return 'bg-orange-100 text-orange-800 border-orange-300'
      case 'Signed Up':
        return 'bg-green-100 text-green-800 border-green-300'
      case 'Closed Won':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="!max-w-6xl sm:!max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <User className="w-6 h-6 text-lime-600" />
            <span className="text-xl font-bold text-gray-900">{lead.name}</span>
            <Badge className={getPriorityColor(lead.priority)}>
              {lead.priority}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="w-8 h-8 animate-spin text-lime-600" />
            <span className="ml-2 text-gray-600">Loading user details...</span>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center py-8">
            <div className="text-center">
              <div className="text-red-500 mb-2">Failed to load user details</div>
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
          <div className="space-y-6">
          {/* Status and Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

              {userDetails.totalValue > 0 && (
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">Recent Quote:</span>
                  <span className="text-sm text-green-600 font-medium">₱{userDetails.totalValue.toLocaleString()}</span>
                </div>
              )}
            </div>
          </div>

          {/* Timeline */}
          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Timeline</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-gray-500" />
                <div>
                  <span className="text-sm font-medium text-gray-700">Created:</span>
                  <span className="text-sm text-gray-600 ml-2">
                    {new Date(userDetails.created).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gray-500" />
                <div>
                  <span className="text-sm font-medium text-gray-700">Last Updated:</span>
                  <span className="text-sm text-gray-600 ml-2">
                    {new Date(userDetails.updated).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
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
            <div className="border-t pt-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Pricing Quotes</h3>
              <div className="space-y-3">
                {userDetails.pricingQuotes.map((quote: any, index: number) => (
                  <div key={quote.id} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Quote #{quote.quote_number}</p>
                        <p className="text-xs text-gray-600">
                          {new Date(quote.created_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-lime-600">
                          {quote.currency_code} {parseFloat(quote.total_monthly_cost).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notes */}
          {lead.notes && (
            <div className="border-t pt-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Notes</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">{lead.notes}</p>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="border-t pt-4 flex justify-between items-center">
            <div className="flex gap-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>
                      <Button
                        onClick={handleEnrich}
                        disabled={!enrichmentStatus.enabled || isEnriching}
                        className="bg-purple-600 hover:bg-purple-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isEnriching ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Enriching...
                          </>
                        ) : enrichmentSuccess ? (
                          <>
                            <Sparkles className="w-4 h-4 mr-2" />
                            Enriched!
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4 mr-2" />
                            Enrich
                          </>
                        )}
                      </Button>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent 
                    className={`p-3 rounded-lg shadow-lg max-w-xs ${
                      !enrichmentStatus.enabled 
                        ? 'bg-red-600 text-white border border-red-700' 
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
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
              <Button className="bg-lime-600 hover:bg-lime-700 text-white">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Full Profile
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
    </Dialog>
  )
}