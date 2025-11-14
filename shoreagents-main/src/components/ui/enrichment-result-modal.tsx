'use client'

import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog-videocall'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { 
  Building,
  MapPin,
  Briefcase,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  Calendar,
  Users,
  TrendingUp,
  ExternalLink,
  Sparkles,
  User,
  FileText,
  Github,
  X,
  XIcon
} from 'lucide-react'

export interface EnrichmentData {
  id: string
  user_id: string
  
  // User Information
  full_name?: string
  job_title?: string
  location?: string
  bio?: string
  profile_picture_url?: string
  
  // Company Information
  company_name?: string
  company_website?: string
  company_domain?: string
  company_industry?: string
  company_size?: string
  company_founded?: string
  company_description?: string
  company_headquarters?: string
  company_logo_url?: string
  
  // Social & Professional Links
  linkedin_url?: string
  twitter_url?: string
  facebook_url?: string
  
  // Contact Information
  phone_number?: string
  additional_emails?: string // JSON array
  
  // Metadata
  enriched_by?: string
  enrichment_source?: string
  confidence_score?: number
  created_at?: string
  updated_at?: string
}

interface EnrichmentResultModalProps {
  isOpen: boolean
  onClose: () => void
  enrichmentData: EnrichmentData | null
  userName: string
}

export function EnrichmentResultModal({
  isOpen,
  onClose,
  enrichmentData,
  userName
}: EnrichmentResultModalProps) {
  if (!enrichmentData) return null

  const hasUserInfo = enrichmentData.job_title || enrichmentData.location || enrichmentData.bio
  const hasCompanyInfo = enrichmentData.company_name || enrichmentData.company_website || enrichmentData.company_industry
  const hasSocialLinks = enrichmentData.linkedin_url || enrichmentData.twitter_url || enrichmentData.facebook_url
  const hasContactInfo = enrichmentData.phone_number || enrichmentData.additional_emails

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="!max-w-4xl sm:!max-w-4xl w-[90vw] max-h-[85vh] overflow-hidden flex flex-col">
        <DialogHeader className="relative">
          <div className="flex flex-row items-center gap-4 mb-2">
            <div className="flex-1 min-w-0">
              <DialogTitle className="text-2xl font-bold text-gray-900">
                Enrichment Results
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-600">
                Enriched data for {userName}
              </DialogDescription>
            </div>
          </div>
          
          {/* X Close Button */}
          <button
            onClick={onClose}
            className="absolute top-0 right-0 p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <XIcon className="w-5 h-5 text-gray-500 hover:text-gray-700" />
          </button>
        </DialogHeader>

        {/* Grid Layout Container */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-4 grid-rows-5 gap-3 h-[60vh] min-h-[500px]">
            
            {/* SALMON - Profile Section (Left Column) */}
            <div className="col-span-1 row-span-5 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-4 flex flex-col items-center justify-center space-y-4 border border-slate-200">
              {/* Profile Picture */}
              <div className="flex flex-col items-center space-y-3">
                {enrichmentData.profile_picture_url ? (
                  <img 
                    src={enrichmentData.profile_picture_url} 
                    alt={userName}
                    className="w-36 h-44 rounded-lg object-cover border-4 border-white shadow-lg"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                ) : null}
                <div className={`w-36 h-44 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg ${enrichmentData.profile_picture_url ? 'hidden' : ''}`}>
                  <Sparkles className="w-16 h-16 text-white" />
                </div>
                
                {/* User Info */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900">{enrichmentData.full_name || userName}</h3>
                  {enrichmentData.job_title && (
                    <p className="text-sm text-gray-700">{enrichmentData.job_title}</p>
                  )}
                  {enrichmentData.location && (
                    <p className="text-xs text-gray-600 flex items-center justify-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-gray-600" />
                      {enrichmentData.location}
                    </p>
                  )}
                </div>
              </div>

              {/* Social & Professional Links */}
              <div className="space-y-2 w-full flex flex-col items-center">
                <h4 className="text-sm font-semibold text-gray-800 text-center">Social Links</h4>
                <div className="flex gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div>
                          {enrichmentData.linkedin_url ? (
                            <a
                              href={enrichmentData.linkedin_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors"
                            >
                              <Linkedin className="w-5 h-5 text-blue-600" />
                            </a>
                          ) : (
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center cursor-not-allowed">
                              <Linkedin className="w-5 h-5 text-gray-400" />
                            </div>
                          )}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        {enrichmentData.linkedin_url ? 'LinkedIn Profile' : 'LinkedIn not available'}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div>
                          {enrichmentData.twitter_url ? (
                            <a
                              href={enrichmentData.twitter_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors"
                            >
                              <X className="w-5 h-5 text-gray-700" />
                            </a>
                          ) : (
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center cursor-not-allowed">
                              <X className="w-5 h-5 text-gray-400" />
                            </div>
                          )}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        {enrichmentData.twitter_url ? 'Twitter Profile' : 'Twitter not available'}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div>
                          {enrichmentData.facebook_url ? (
                            <a
                              href={enrichmentData.facebook_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors"
                            >
                              <Facebook className="w-5 h-5 text-blue-600" />
                            </a>
                          ) : (
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center cursor-not-allowed">
                              <Facebook className="w-5 h-5 text-gray-400" />
                            </div>
                          )}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        {enrichmentData.facebook_url ? 'Facebook Profile' : 'Facebook not available'}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div>
                          {enrichmentData.company_website ? (
                            <a
                              href={enrichmentData.company_website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors"
                            >
                              <Globe className="w-5 h-5 text-green-600" />
                            </a>
                          ) : (
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center cursor-not-allowed">
                              <Globe className="w-5 h-5 text-gray-400" />
                            </div>
                          )}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        {enrichmentData.company_website ? 'Company Website' : 'Website not available'}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>

            {/* BROCCOLI - Company Details (Top Right) */}
            <div className="col-span-3 row-span-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200 overflow-hidden flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                {enrichmentData.company_logo_url ? (
                  <img 
                    src={enrichmentData.company_logo_url} 
                    alt={enrichmentData.company_name || 'Company'}
                    className="w-20 h-20 rounded-lg object-contain bg-white p-2 border border-blue-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <Building className="w-20 h-20 text-blue-600 p-2 bg-white rounded-lg border border-blue-300" />
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-gray-900">{enrichmentData.company_name || 'Company'}</h3>
                    {/* LinkedIn Icon for Company */}
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a 
                            href="https://ph.linkedin.com/company/shoreagents" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-6 h-6 text-blue-700 hover:text-blue-800 transition-colors"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          Visit ShoreAgents LinkedIn
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    {/* Website Icon */}
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a 
                            href="https://www.shoreagents.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-6 h-6 text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            <Globe className="w-4 h-4" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          Visit ShoreAgents Website
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  {enrichmentData.company_industry && (
                    <p className="text-sm text-gray-700">{enrichmentData.company_industry}</p>
                  )}
                  {/* Company Email */}
                  <div className="mt-1">
                    <a 
                      href="mailto:info@shoreagents.com"
                      className="text-sm text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1"
                    >
                      <Mail className="w-3 h-3" />
                      info@shoreagents.com
                    </a>
                  </div>
                  
                  {/* Company Phone - Only show if available from enrichment data */}
                  {enrichmentData.phone_number ? (
                    <div className="mt-1">
                      <a 
                        href={`tel:${enrichmentData.phone_number.replace(/\s/g, '')}`}
                        className="text-sm text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1"
                      >
                        <Phone className="w-3 h-3" />
                        {enrichmentData.phone_number}
                      </a>
                    </div>
                  ) : (
                    <div className="mt-1">
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Phone className="w-3 h-3" />
                        No phone number found
                      </span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* About Company Section */}
              {enrichmentData.company_description && (
                <div className="bg-white p-4 rounded-lg border border-blue-200 mb-4 flex-1 overflow-hidden flex flex-col">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600" />
                    About {enrichmentData.company_name || 'Company'}
                  </h4>
                  <div className="overflow-y-auto flex-1">
                    <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap break-words">
                      {enrichmentData.company_description || 'No description available'}
                    </p>
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-shrink-0">
                {enrichmentData.company_size && (
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-semibold text-gray-700">Company Size</span>
                    </div>
                    <p className="text-sm text-gray-900">{enrichmentData.company_size}</p>
                  </div>
                )}
                
                {enrichmentData.company_founded && (
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-semibold text-gray-700">Founded</span>
                    </div>
                    <p className="text-sm text-gray-900">{enrichmentData.company_founded}</p>
                  </div>
                )}
                
                {enrichmentData.company_headquarters && (
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-semibold text-gray-700">Headquarters</span>
                    </div>
                    <p className="text-sm text-gray-900">{enrichmentData.company_headquarters}</p>
                  </div>
                )}
              </div>
            </div>

            {/* TAMAGO - Contact & Professional Information (Bottom Right) */}
            <div className="col-span-3 row-span-2 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-4 border border-emerald-200">

              {/* Contact Information */}
              {(enrichmentData.phone_number || enrichmentData.additional_emails) && (
                <div className="bg-white p-3 rounded-lg border border-emerald-200 mb-3">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-700" />
                    Contact Information
                  </h4>
                  <div className="space-y-2">
                    {enrichmentData.phone_number && (
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-700">{enrichmentData.phone_number}</span>
                      </div>
                    )}
                    {enrichmentData.additional_emails && (
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-700">{enrichmentData.additional_emails}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Bio Section */}
              {enrichmentData.bio && (
                <div className="bg-white p-3 rounded-lg border border-emerald-200">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-emerald-700" />
                    Professional Bio
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{enrichmentData.bio}</p>
                </div>
              )}

            </div>
          </div>
        </div>

      </DialogContent>
    </Dialog>
  )
}

