'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAdminAuth } from '@/lib/admin-auth-context'
import { AdminGuard } from '@/components/auth/AdminGuard'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { 
  KanbanBoard, 
  KanbanCard, 
  KanbanCards, 
  KanbanHeader, 
  KanbanProvider 
} from '@/components/ui/shadcn-io/kanban'
import { 
  Users, 
  UserPlus, 
  Mail, 
  Calendar, 
  Building,
  Star,
  Clock,
  CheckCircle,
  AlertCircle,
  Target,
  RefreshCw,
  Eye
} from 'lucide-react'
import { useLeads, useUpdateLeadStatus } from '@/hooks/use-api'
import { LeadDetailsModal } from '@/components/ui/lead-details-modal'
import { ChangeReasonModal } from '@/components/ui/change-reason-modal'

const columns = [
  { id: 'new_lead', name: 'New Lead' },
  { id: 'stage_1', name: 'Stage 1' },
  { id: 'stage_2', name: 'Stage 2' },
  { id: 'pending', name: 'Pending' },
  { id: 'meeting_booked', name: 'Meeting Booked' },
  { id: 'signed_up', name: 'Signed Up' },
  { id: 'closed_won', name: 'Closed Won' }
]

export default function LeadManagement() {
  const router = useRouter()
  const { admin, loading, signOut, isAdmin } = useAdminAuth()
  const { data: leadsData, isLoading, error, refetch } = useLeads()
  const updateLeadStatusMutation = useUpdateLeadStatus()
  const [selectedLead, setSelectedLead] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isChangeReasonModalOpen, setIsChangeReasonModalOpen] = useState(false)
  const [pendingChange, setPendingChange] = useState<{
    leadId: string
    leadName: string
    fromColumn: string
    toColumn: string
  } | null>(null)
  const [originalLeadsSnapshot, setOriginalLeadsSnapshot] = useState<typeof leads>([])
  
  // Add error handling for the mutation
  useEffect(() => {
    if (updateLeadStatusMutation.error) {
      console.error('❌ Lead status update failed:', updateLeadStatusMutation.error)
    }
    if (updateLeadStatusMutation.isSuccess) {
      console.log('✅ Lead status updated successfully')
    }
  }, [updateLeadStatusMutation.error, updateLeadStatusMutation.isSuccess])

  // Debug modal state
  useEffect(() => {
    console.log('🔍 Modal state changed:', { isChangeReasonModalOpen, pendingChange })
  }, [isChangeReasonModalOpen, pendingChange])

  // Store a snapshot of leads when they load
  useEffect(() => {
    if (leads && leads.length > 0) {
      setOriginalLeadsSnapshot(JSON.parse(JSON.stringify(leads)))
      console.log('📸 Snapshot taken of leads:', leads.length, 'leads')
    }
  }, [leadsData])
  
  const leads = leadsData?.data || []
  const stats = leadsData?.stats || {
    new: 0,
    stage1: 0,
    stage2: 0,
    pending: 0,
    meeting_booked: 0,
    signed_up: 0,
    closed_won: 0
  }

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

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'High':
        return <AlertCircle className="w-3 h-3" />
      case 'Medium':
        return <Clock className="w-3 h-3" />
      case 'Low':
        return <CheckCircle className="w-3 h-3" />
      default:
        return <Target className="w-3 h-3" />
    }
  }

  const handleDataChange = (newData: typeof leads) => {
    console.log('🔄 handleDataChange called!')
    console.log('🔄 New data:', newData)
    console.log('🔄 Original snapshot:', originalLeadsSnapshot)
    
    if (!newData || newData.length === 0) {
      console.log('⚠️ No data to process')
      return
    }
    
    // Check for column changes and show modal using the snapshot
    let changeDetected = false
    newData.forEach(lead => {
      const originalLead = originalLeadsSnapshot.find(l => l.id === lead.id)
      console.log(`🔍 Checking lead ${lead.id}: original=${originalLead?.column}, new=${lead.column}`)
      
      if (originalLead && originalLead.column !== lead.column) {
        console.log(`📝 COLUMN CHANGE DETECTED! Lead ${lead.id} moved from ${originalLead.column} to ${lead.column}`)
        changeDetected = true
        
        // Show change reason modal
        setPendingChange({
          leadId: lead.id,
          leadName: lead.name,
          fromColumn: originalLead.column,
          toColumn: lead.column
        })
        setIsChangeReasonModalOpen(true)
        console.log('🎯 Modal state set to open')
      }
    })
    
    if (!changeDetected) {
      console.log('⚠️ No column changes detected')
    }
  }

  const handleConfirmChange = (reason: string) => {
    if (!pendingChange) {
      console.log('❌ No pending change to confirm')
      return
    }

    console.log(`📝 Confirming change for lead ${pendingChange.leadId} from ${pendingChange.fromColumn} to ${pendingChange.toColumn}`)
    
    // Close modal immediately
    setIsChangeReasonModalOpen(false)
    
    // Construct admin full name
    const adminFullName = admin?.first_name && admin?.last_name 
      ? `${admin.first_name} ${admin.last_name}`
      : 'Unknown Admin'
    
    // Update the lead status in the database
    updateLeadStatusMutation.mutate({
      leadId: pendingChange.leadId,
      column: pendingChange.toColumn,
      changedBy: adminFullName,
      changeReason: reason || 'Admin drag and drop'
    }, {
      onSuccess: () => {
        console.log('✅ Lead status updated successfully in database')
        // Refetch to get the updated data
        refetch()
        setPendingChange(null)
      },
      onError: (error) => {
        console.error('❌ Failed to update lead status:', error)
        // Refetch to reset the UI on error
        refetch()
        setPendingChange(null)
      }
    })
  }

  const handleCancelChange = () => {
    console.log('❌ Change cancelled, reverting to original position')
    // Close modal immediately
    setIsChangeReasonModalOpen(false)
    setPendingChange(null)
    // Refetch data to reset the UI to original state
    refetch()
  }

  const handleLeadClick = (lead: any) => {
    console.log('Lead clicked:', lead)
    setSelectedLead(lead)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedLead(null)
  }

  const handleLogout = async () => {
    await signOut()
    router.push('/')
  }

  // Function to truncate email addresses
  const truncateEmail = (email: string, maxLength: number = 20) => {
    if (!email || email.length <= maxLength) return email
    
    const [localPart, domain] = email.split('@')
    if (!domain) return email
    
    const maxLocalLength = Math.max(8, maxLength - domain.length - 3) // Reserve space for domain and "..."
    if (localPart.length <= maxLocalLength) return email
    
    const truncatedLocal = localPart.substring(0, maxLocalLength - 3) + '...'
    return `${truncatedLocal}@${domain}`
  }

  // Redirect to home if not admin
  if (!isAdmin) {
    return null
  }

  return (
    <AdminGuard>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-20 h-screen overflow-hidden">
            <div className="w-full flex flex-col flex-1 min-h-0">

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-3 flex-shrink-0">
                {isLoading ? (
                  <>
                    {[...Array(4)].map((_, i) => (
                      <Card key={i} className="border-l-4 border-l-lime-500 bg-gradient-to-t from-lime-50/50 to-white shadow-sm py-3">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0 pt-1.5 px-2.5">
                          <Skeleton className="h-3 w-20" />
                          <Skeleton className="h-3 w-3 rounded" />
                        </CardHeader>
                        <CardContent className="px-2.5 pb-1.5 pt-0">
                          <Skeleton className="h-5 w-12 mb-1" />
                          <Skeleton className="h-2.5 w-28" />
                        </CardContent>
                      </Card>
                    ))}
                  </>
                ) : (
                  <>
                    <Card className="border-l-4 border-l-lime-500 bg-gradient-to-t from-lime-50/50 to-white shadow-sm py-3 !gap-0">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 !pb-0 pt-1.5 px-2.5">
                        <CardTitle className="text-sm font-medium !mb-0">Total Leads</CardTitle>
                        <Users className="h-3.5 w-3.5 text-lime-600" />
                      </CardHeader>
                      <CardContent className="px-2.5 pb-1.5 !pt-0">
                        <div className="text-2xl font-bold text-lime-600 leading-none -mt-0.5">
                          {leadsData?.total || 0}
                        </div>
                        <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">
                          All pipeline stages
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-lime-500 bg-gradient-to-t from-lime-50/50 to-white shadow-sm py-3 !gap-0">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 !pb-0 pt-1.5 px-2.5">
                        <CardTitle className="text-sm font-medium !mb-0">New Leads</CardTitle>
                        <UserPlus className="h-3.5 w-3.5 text-lime-600" />
                      </CardHeader>
                      <CardContent className="px-2.5 pb-1.5 !pt-0">
                        <div className="text-2xl font-bold text-lime-600 leading-none -mt-0.5">
                          {stats.new}
                        </div>
                        <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">
                          Fresh opportunities
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-lime-500 bg-gradient-to-t from-lime-50/50 to-white shadow-sm py-3 !gap-0">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 !pb-0 pt-1.5 px-2.5">
                        <CardTitle className="text-sm font-medium !mb-0">In Progress</CardTitle>
                        <Clock className="h-3.5 w-3.5 text-lime-600" />
                      </CardHeader>
                      <CardContent className="px-2.5 pb-1.5 !pt-0">
                        <div className="text-2xl font-bold text-lime-600 leading-none -mt-0.5">
                          {stats.stage1 + stats.stage2 + stats.pending + stats.meeting_booked + stats.signed_up}
                        </div>
                        <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">
                          Active deals
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-green-500 bg-gradient-to-t from-green-50/50 to-white shadow-sm py-3 !gap-0">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 !pb-0 pt-1.5 px-2.5">
                        <CardTitle className="text-sm font-medium !mb-0">Closed Won</CardTitle>
                        <CheckCircle className="h-3.5 w-3.5 text-green-600" />
                      </CardHeader>
                      <CardContent className="px-2.5 pb-1.5 !pt-0">
                        <div className="text-2xl font-bold text-green-600 leading-none -mt-0.5">
                          {stats.closed_won}
                        </div>
                        <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">
                          Successful deals
                        </p>
                      </CardContent>
                    </Card>
                  </>
                )}
              </div>

              {/* Kanban Board */}
              <Card className="flex flex-col flex-1 min-h-0 overflow-hidden">
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-lime-600" />
                    Lead Tracking
                  </CardTitle>
                  <CardDescription>
                    Drag and drop leads between stages to update their status
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 min-h-0 overflow-hidden p-0">
                  {isLoading ? (
                    <div className="space-y-4 p-4">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex items-center space-x-4 p-4 border rounded-lg">
                          <Skeleton className="h-12 w-12 rounded" />
                          <div className="space-y-2 flex-1">
                            <Skeleton className="h-4 w-[200px]" />
                            <Skeleton className="h-4 w-[150px]" />
                          </div>
                          <Skeleton className="h-8 w-24" />
                        </div>
                      ))}
                    </div>
                  ) : error ? (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <AlertCircle className="w-12 h-12 text-lime-500 mx-auto mb-4" />
                        <p className="text-lime-600 font-medium">Failed to load leads</p>
                        <p className="text-sm text-gray-600 mt-2">Please try refreshing the page</p>
                        <Button 
                          onClick={() => refetch()} 
                          className="mt-4 bg-lime-600 hover:bg-lime-700 text-white"
                        >
                          <RefreshCw className="w-4 h-4 mr-2" />
                          Retry
                        </Button>
                      </div>
                    </div>
                  ) : leads.length === 0 ? (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 font-medium">No leads found</p>
                        <p className="text-sm text-gray-500 mt-2">Leads will appear here when users sign up</p>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full overflow-hidden flex flex-col">
                      {updateLeadStatusMutation.isPending && (
                        <div className="absolute top-4 right-4 bg-lime-100 text-lime-800 px-3 py-2 rounded-md text-sm font-medium z-10">
                          Updating lead status...
                        </div>
                      )}
                      <div className="flex-1 min-h-0 overflow-hidden">
                        <KanbanProvider
                          columns={columns}
                          data={leads}
                          onDataChange={handleDataChange}
                          className="h-full"
                        >
                        {(column) => (
                          <KanbanBoard key={column.id} id={column.id}>
                            <KanbanHeader className="bg-lime-50 border-b border-lime-200">
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-lime-800">{column.name}</span>
                                <Badge variant="outline" className="text-lime-600 border-lime-300">
                                  {leads.filter(lead => lead.column === column.id).length}
                                </Badge>
                              </div>
                            </KanbanHeader>
                            <KanbanCards id={column.id}>
                              {(lead) => (
                                <KanbanCard 
                                  key={lead.id} 
                                  id={lead.id} 
                                  name={lead.name}
                                  onClick={() => handleLeadClick(lead)}
                                  showClickButton={true}
                                  clickButtonText="View Details"
                                  className="hover:shadow-md transition-shadow duration-200 w-full max-w-sm"
                                >
                                  <div className="space-y-3 w-full">
                                     {/* Lead Header */}
                                     <div className="flex items-start justify-between">
                                       <div className="min-w-0 flex-1">
                                         <h4 className="font-semibold text-sm text-gray-900 truncate">{lead.name}</h4>
                                         <p className="text-xs text-gray-600 truncate">{lead.company || 'Not specified'}</p>
                                       </div>
                                     </div>

                                     {/* Contact Info */}
                                     <div className="space-y-1">
                                       <div className="flex items-center gap-2 text-xs text-gray-600">
                                         <Mail className="w-3 h-3 flex-shrink-0" />
                                         <span className="truncate min-w-0" title={lead.email || 'No email provided'}>
                                           {truncateEmail(lead.email || 'No email provided', 18)}
                                         </span>
                                       </div>
                                       <div className="flex items-center gap-2 text-xs text-gray-600">
                                         <Building className="w-3 h-3 flex-shrink-0" />
                                         <span className="truncate min-w-0">{lead.source || 'Website'}</span>
                                       </div>
                                       <div className="flex items-start gap-2 text-xs text-gray-600">
                                         <Target className="w-3 h-3 flex-shrink-0 mt-0.5" />
                                         <span className="line-clamp-2 min-w-0 leading-tight">{lead.industry || 'Not specified'}</span>
                                       </div>
                                       {lead.quoteCount > 0 && (
                                         <div className="flex items-center gap-2 text-xs text-lime-600">
                                           <Star className="w-3 h-3 flex-shrink-0" />
                                           <span>{lead.quoteCount} quote{lead.quoteCount > 1 ? 's' : ''}</span>
                                         </div>
                                       )}
                                     </div>

                                    {/* Notes */}
                                    {lead.notes && (
                                      <div className="text-xs text-gray-600 bg-gray-50 p-2 rounded">
                                        <p className="truncate">{lead.notes}</p>
                                      </div>
                                    )}

                                    {/* Footer */}
                                    <div className="flex items-center justify-between text-xs text-gray-500">
                                      <div className="flex items-center gap-1 min-w-0">
                                        <Calendar className="w-3 h-3 flex-shrink-0" />
                                        <span className="truncate">{new Date(lead.created).toLocaleDateString()}</span>
                                      </div>
                                      <div className="flex items-center gap-1 min-w-0">
                                        <Clock className="w-3 h-3 flex-shrink-0" />
                                        <span className="truncate">{new Date(lead.lastContact).toLocaleDateString()}</span>
                                      </div>
                                    </div>
                                  </div>
                                </KanbanCard>
                              )}
                            </KanbanCards>
                          </KanbanBoard>
                        )}
                        </KanbanProvider>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>

      {/* Lead Details Modal */}
      <LeadDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        lead={selectedLead}
      />

      {/* Change Reason Modal */}
      <ChangeReasonModal
        isOpen={isChangeReasonModalOpen}
        onClose={handleCancelChange}
        onConfirm={handleConfirmChange}
        leadName={pendingChange?.leadName || ''}
        fromColumn={pendingChange?.fromColumn || ''}
        toColumn={pendingChange?.toColumn || ''}
      />
    </AdminGuard>
  )
}
