'use client'

import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
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
  FileText
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
      <DialogContent className="max-w-6xl w-[95vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex flex-row items-center gap-4 mb-2">
            <div className="flex items-center gap-3">
              {enrichmentData.profile_picture_url ? (
                <img 
                  src={enrichmentData.profile_picture_url} 
                  alt={userName}
                  className="w-16 h-16 rounded-full object-cover border-2 border-purple-200"
                  onError={(e) => {
                    // Fallback to default icon if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
              ) : null}
              <div className={`w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center ${enrichmentData.profile_picture_url ? 'hidden' : ''}`}>
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2 flex-wrap">
                Enrichment Results
                {enrichmentData.confidence_score && (
                  <Badge className="bg-lime-100 text-lime-800 border-lime-300 text-xs">
                    {enrichmentData.confidence_score}% Match
                  </Badge>
                )}
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-600">
                Enriched data for {userName}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* User Information Section */}
          {hasUserInfo && (
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-5 border border-purple-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-4">
                <User className="w-5 h-5 text-purple-600" />
                Professional Profile
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {enrichmentData.full_name && (
                  <div className="bg-white p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <User className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">Full Name</span>
                    </div>
                    <p className="text-sm text-gray-900 font-medium">{enrichmentData.full_name}</p>
                  </div>
                )}
                
                {enrichmentData.job_title && (
                  <div className="bg-white p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">Job Title</span>
                    </div>
                    <p className="text-sm text-gray-900 font-medium">{enrichmentData.job_title}</p>
                  </div>
                )}
                
                {enrichmentData.location && (
                  <div className="bg-white p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">Location</span>
                    </div>
                    <p className="text-sm text-gray-900">{enrichmentData.location}</p>
                  </div>
                )}
              </div>
              
              {enrichmentData.bio && (
                <div className="mt-4 bg-white p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">Bio</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed break-words">{enrichmentData.bio}</p>
                </div>
              )}
            </div>
          )}

          {/* Company Information Section */}
          {hasCompanyInfo && (
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-5 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                {enrichmentData.company_logo_url ? (
                  <img 
                    src={enrichmentData.company_logo_url} 
                    alt={enrichmentData.company_name || 'Company'}
                    className="w-12 h-12 rounded-lg object-contain bg-white p-1 border border-blue-200"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <Building className="w-12 h-12 text-blue-600 p-2 bg-white rounded-lg border border-blue-200" />
                )}
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  Company Details
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {enrichmentData.company_name && (
                  <div className="bg-white p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Building className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">Company</span>
                    </div>
                    <p className="text-sm text-gray-900 font-medium">{enrichmentData.company_name}</p>
                  </div>
                )}
                
                {enrichmentData.company_website && (
                  <div className="bg-white p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Globe className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">Website</span>
                    </div>
                    <a 
                      href={enrichmentData.company_website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
                    >
                      {enrichmentData.company_website}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
                
                {enrichmentData.company_industry && (
                  <div className="bg-white p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">Industry</span>
                    </div>
                    <p className="text-sm text-gray-900">{enrichmentData.company_industry}</p>
                  </div>
                )}
                
                {enrichmentData.company_size && (
                  <div className="bg-white p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">Company Size</span>
                    </div>
                    <p className="text-sm text-gray-900">{enrichmentData.company_size}</p>
                  </div>
                )}
                
                {enrichmentData.company_founded && (
                  <div className="bg-white p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">Founded</span>
                    </div>
                    <p className="text-sm text-gray-900">{enrichmentData.company_founded}</p>
                  </div>
                )}
                
                {enrichmentData.company_headquarters && (
                  <div className="bg-white p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">Headquarters</span>
                    </div>
                    <p className="text-sm text-gray-900">{enrichmentData.company_headquarters}</p>
                  </div>
                )}
              </div>
              
              {enrichmentData.company_description && (
                <div className="mt-4 bg-white p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">Description</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed break-words">{enrichmentData.company_description}</p>
                </div>
              )}
            </div>
          )}

          {/* Social Links Section */}
          {hasSocialLinks && (
            <div className="bg-gradient-to-r from-lime-50 to-lime-100 rounded-lg p-5 border border-lime-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-4">
                <Globe className="w-5 h-5 text-lime-600" />
                Social & Professional Links
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {enrichmentData.linkedin_url && (
                  <a
                    href={enrichmentData.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-lg hover:shadow-md transition-shadow flex items-center gap-3"
                  >
                    <Linkedin className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">LinkedIn Profile</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                  </a>
                )}
                
                {enrichmentData.twitter_url && (
                  <a
                    href={enrichmentData.twitter_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-lg hover:shadow-md transition-shadow flex items-center gap-3"
                  >
                    <Twitter className="w-5 h-5 text-sky-500" />
                    <span className="text-sm font-medium text-gray-700">Twitter</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                  </a>
                )}
                
                {enrichmentData.facebook_url && (
                  <a
                    href={enrichmentData.facebook_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-lg hover:shadow-md transition-shadow flex items-center gap-3"
                  >
                    <Facebook className="w-5 h-5 text-blue-700" />
                    <span className="text-sm font-medium text-gray-700">Facebook</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Contact Information Section */}
          {hasContactInfo && (
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-5 border border-green-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-4">
                <Phone className="w-5 h-5 text-green-600" />
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {enrichmentData.phone_number && (
                  <div className="bg-white p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">Phone</span>
                    </div>
                    <p className="text-sm text-gray-900 font-medium">{enrichmentData.phone_number}</p>
                  </div>
                )}
                
                {enrichmentData.additional_emails && (
                  <div className="bg-white p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">Additional Emails</span>
                    </div>
                    <p className="text-sm text-gray-900">{enrichmentData.additional_emails}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Enrichment Metadata */}
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between text-xs text-gray-600">
              <div className="flex items-center gap-4">
                <span>
                  Source: <span className="font-medium text-gray-700">{enrichmentData.enrichment_source || 'Serper API'}</span>
                </span>
                {enrichmentData.enriched_by && (
                  <span>
                    Enriched by: <span className="font-medium text-gray-700">{enrichmentData.enriched_by}</span>
                  </span>
                )}
              </div>
              {enrichmentData.created_at && (
                <span>
                  {new Date(enrichmentData.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button
              onClick={onClose}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

