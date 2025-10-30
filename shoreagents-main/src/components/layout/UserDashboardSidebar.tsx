"use client"

import { useUserAuth } from '@/lib/user-auth-context'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useSidebar } from '@/components/ui/sidebar'
import { SidebarTrigger } from '@/components/ui/sidebar'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import {
  LayoutDashboard,
  User,
  Users,
  Briefcase,
  Settings,
  LogOut,
  Quote,
  MessageCircle,
  PanelLeftClose,
  PanelLeftOpen,
  Clock,
  Trash2,
  Plus,
} from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { useChatContext } from '@/lib/chat-context'

const userNavItems = [
  {
    title: "Dashboard",
    url: "/user-dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Profile",
    url: "/user-dashboard/profile",
    icon: User,
  },
  {
    title: "Candidates",
    url: "/user-dashboard/candidates",
    icon: Users,
  },
  {
    title: "Jobs",
    url: "/user-dashboard/jobs",
    icon: Briefcase,
  },
  {
    title: "Quotation",
    url: "/user-dashboard/quotation",
    icon: Quote,
  },
  {
    title: "Settings",
    url: "/user-dashboard/settings",
    icon: Settings,
  },
]

interface Conversation {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
  messageCount: number;
}

interface UserDashboardSidebarProps {
  onChatOpen?: () => void;
  onConversationChange?: (conversationId: string) => void;
}

export function UserDashboardSidebar({ onChatOpen, onConversationChange }: UserDashboardSidebarProps) {
  const { user, signOut } = useUserAuth()
  const pathname = usePathname()
  const { toggleSidebar, state } = useSidebar()
  const [showDropdown, setShowDropdown] = useState(false)
  const [deletingConversationId, setDeletingConversationId] = useState<string | null>(null)
  const [conversationToDelete, setConversationToDelete] = useState<string | null>(null)
  
  // Get conversations from ChatContext (database source via TanStack Query)
  const { 
    conversations, 
    clearMessages, 
    currentConversationId,
    setCurrentConversationId,
    deviceId,
    getDeviceId,
    deleteConversation: removeConversationFromContext
  } = useChatContext()

  const handleSignOut = async () => {
    try {
      console.log('🔍 UserDashboardSidebar - Starting sign out...')
      await signOut()
      console.log('✅ UserDashboardSidebar - Sign out completed')
    } catch (error) {
      console.error('❌ UserDashboardSidebar - Sign out error:', error)
    }
  }

  const handleChatWithMaya = () => {
    if (onChatOpen) {
      onChatOpen()
    }
  }

  const handleNewChat = async () => {
    console.log('🆕 Starting new chat...')
    
    try {
      // Clear current messages and conversation
      clearMessages()
      setCurrentConversationId(null)
      
      // Use callback if available, otherwise fallback to navigation
      if (onConversationChange) {
        onConversationChange('new-chat') // Pass 'new-chat' to indicate greeting should be shown
      } else {
        // Fallback to navigation for other pages with new chat parameter
        window.location.href = '/user-dashboard/chat?new=true&greet=true'
      }
    } catch (error) {
      console.error('❌ Error starting new chat:', error)
      // Fallback to simple reload
      window.location.reload()
    }
  }

  const handleLoadConversation = (conversationId: string) => {
    // Set the current conversation ID
    setCurrentConversationId(conversationId)
    
    // Use callback if available, otherwise fallback to navigation
    if (onConversationChange) {
      onConversationChange(conversationId)
    } else {
      // Fallback to navigation for other pages
      window.location.href = `/user-dashboard/chat?conversation=${conversationId}`
    }
  }

  // Delete conversation
  const deleteConversation = async (conversationId: string) => {
    try {
      setDeletingConversationId(conversationId);
      console.log('🗑️ Deleting conversation:', conversationId);
      
      // Check if it's a local conversation (fallback when database is unavailable)
      const isLocalConversation = conversationId.startsWith('local-');
      
      if (isLocalConversation) {
        console.log('🗑️ Deleting local conversation (no database operation needed)');
        
        // Remove from local state
        removeConversationFromContext(conversationId);
        
        // If this was the current conversation, clear current conversation
        if (currentConversationId === conversationId) {
          if (onConversationChange) {
            onConversationChange(null); // Clear current conversation
          }
        }
        
        // Close the dialog
        setConversationToDelete(null);
        console.log('✅ Local conversation deleted successfully');
        return;
      }
      
      // Call API to delete conversation from database
      const response = await fetch(`/api/chat/conversations/${conversationId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const data = await response.json();
        console.log('✅ Conversation deleted successfully:', data);
        
        // Remove from local state
        removeConversationFromContext(conversationId);
        
        // If this was the current conversation, clear current conversation
        if (currentConversationId === conversationId) {
          if (onConversationChange) {
            onConversationChange(null); // Clear current conversation
          }
        }
        
        // Close the dialog
        setConversationToDelete(null);
      } else {
        let errorData;
        try {
          errorData = await response.json();
        } catch (parseError) {
          errorData = { 
            error: 'Failed to parse error response', 
            status: response.status, 
            statusText: response.statusText 
          };
        }
        console.error('❌ Failed to delete conversation:', {
          status: response.status,
          statusText: response.statusText,
          errorData: errorData,
          conversationId: conversationId
        });
        alert('Failed to delete conversation. Please try again.');
      }
    } catch (error) {
      console.error('❌ Error deleting conversation:', {
        error: error,
        message: error?.message,
        name: error?.name,
        stack: error?.stack,
        conversationId: conversationId
      });
      
      // Try to delete locally as fallback for any error
      console.log('🔄 Attempting local deletion as fallback...');
      try {
        removeConversationFromContext(conversationId);
        
        if (currentConversationId === conversationId) {
          if (onConversationChange) {
            onConversationChange(null); // Clear current conversation
          }
        }
        
        setConversationToDelete(null);
        console.log('✅ Local deletion fallback successful');
      } catch (fallbackError) {
        console.error('❌ Fallback deletion also failed:', fallbackError);
        alert('Failed to delete conversation. Please try again.');
      }
    } finally {
      setDeletingConversationId(null);
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0).toUpperCase())
      .join('')
      .slice(0, 2)
  }

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className='pb-0'>
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-lime-600 text-white">
            <span className="text-lg font-bold">SA</span>
          </div>
          <div className="grid flex-1 text-left text-base leading-tight [&_p]:hidden [&_p]:data-[collapsible=icon]:block">
            <span className="truncate font-semibold text-lg">ShoreAgents</span>
            <span className="truncate text-sm text-muted-foreground">
              User Dashboard
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="pt-0">
        <SidebarGroup className='pt-0'>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-0">
              {userNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    tooltip={item.title}
                    className={`${pathname === item.url ? '!bg-lime-600 !text-white hover:!bg-lime-700 h-10 data-[active=true]:!bg-lime-600 data-[active=true]:!text-white' : 'hover:!bg-lime-100 hover:!text-lime-800'} text-base h-10 w-full data-[collapsible=icon]:!w-10 data-[collapsible=icon]:!h-10 data-[collapsible=icon]:!p-2`}
                  >
                    <Link href={item.url}>
                      <item.icon className="w-5 h-5 data-[collapsible=icon]:!w-6 data-[collapsible=icon]:!h-6" />
                      <span className="text-base font-medium data-[collapsible=icon]:!hidden">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              
              {/* Separator and Chat with Maya section */}
              <div className="mt-4 mb-2">
                <div className="h-px bg-gray-200 mx-3"></div>
              </div>
              
              {/* Chat with Maya - Main Button */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === '/user-dashboard/chat'}
                  className={`${pathname === '/user-dashboard/chat' ? '!bg-lime-600 !text-white hover:!bg-lime-700' : 'bg-lime-600 hover:bg-lime-700 text-white'} transition-colors text-base`}
                  tooltip="Chat with Maya"
                >
                  <Link href="/user-dashboard/chat">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-base font-medium">Chat with Maya</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* New Chat Button */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={(e) => {
                    console.log('🖱️ New Chat button clicked!', e)
                    handleNewChat()
                  }}
                  className="w-full hover:!bg-lime-100 hover:!text-lime-800 text-base h-10 cursor-pointer"
                  tooltip="Start New Chat"
                >
                  <Plus className="w-5 h-5" />
                  <span className="text-base font-medium">New Chat</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Maya Components Button */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === '/user-dashboard/maya-components'}
                  className={`${pathname === '/user-dashboard/maya-components' ? '!bg-lime-600 !text-white hover:!bg-lime-700' : 'hover:!bg-lime-100 hover:!text-lime-800'} transition-colors text-base`}
                  tooltip="Maya's Components"
                >
                  <Link href="/user-dashboard/maya-components">
                    <Settings className="w-5 h-5" />
                    <span className="text-base font-medium">Maya's Components</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Recent Conversations */}
              {conversations.length > 0 && (
                <>
                  <div className="mt-4 mb-2">
                    <div className="px-3 py-1">
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Recent Conversations
                      </h3>
                    </div>
                  </div>
                  
                  {conversations.slice(0, 5).map((conversation) => {
                    const isActive = currentConversationId === conversation.id;
                    return (
                      <SidebarMenuItem key={conversation.id}>
                        <SidebarMenuButton
                          onClick={() => handleLoadConversation(conversation.id)}
                          className={`w-full text-sm h-auto py-2 px-3 cursor-pointer transition-colors ${
                            isActive 
                              ? 'bg-lime-50 border border-lime-200 text-lime-800 hover:!bg-lime-100' 
                              : 'hover:!bg-gray-100 hover:!text-gray-800'
                          }`}
                          tooltip={conversation.title}
                        >
                        <div className="flex items-center justify-between w-full group">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center">
                              {isActive && (
                                <div className="w-1 h-4 bg-lime-500 rounded-full mr-2 flex-shrink-0" />
                              )}
                              <div className="text-sm font-medium truncate">
                                {conversation.title}
                              </div>
                            </div>
                            <div className="text-xs text-gray-500 truncate mt-1">
                              {conversation.lastMessage}
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <Clock className="w-3 h-3" />
                              <span className="text-xs text-gray-400">
                                {new Date(conversation.timestamp).toLocaleDateString()}
                              </span>
                              <span className="text-xs text-gray-400">
                                {conversation.messageCount} messages
                              </span>
                            </div>
                          </div>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div
                                  className={`h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center hover:bg-red-100 rounded ${
                                    deletingConversationId === conversation.id ? 'opacity-100' : ''
                                  }`}
                                  onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    console.log('🗑️ Delete button clicked for conversation:', conversation.id)
                                    if (deletingConversationId === conversation.id) return; // Prevent multiple clicks
                                    setConversationToDelete(conversation.id)
                                    console.log('🎯 Setting conversation to delete:', conversation.id)
                                  }}
                                >
                                  {deletingConversationId === conversation.id ? (
                                    <div className="w-3 h-3 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
                                  ) : (
                                    <Trash2 className="w-3 h-3 text-red-600" />
                                  )}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Delete this conversation</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    );
                  })}
                </>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>


      <SidebarFooter>
        <div className="flex items-center gap-3 px-3 py-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user?.avatar || undefined} alt={user?.first_name} />
            <AvatarFallback className="bg-lime-600 text-white text-sm font-semibold">
              {getInitials(`${user?.first_name || ''} ${user?.last_name || ''}`)}
            </AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-base leading-tight [&_p]:hidden [&_p]:data-[collapsible=icon]:block">
            <span className="truncate font-semibold text-base">
              {user?.first_name} {user?.last_name}
            </span>
            <span className="truncate text-sm text-muted-foreground">
              {user?.email}
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 text-muted-foreground hover:text-foreground"
            onClick={handleSignOut}
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </SidebarFooter>
      
      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!conversationToDelete} onOpenChange={(open) => {
        console.log('🔍 AlertDialog onOpenChange:', open, 'conversationToDelete:', conversationToDelete)
        if (!open) setConversationToDelete(null)
      }}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Conversation</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this conversation? This action cannot be undone and will permanently remove all messages in this conversation.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <AlertDialogCancel 
                    onClick={() => setConversationToDelete(null)}
                    disabled={!!deletingConversationId}
                  >
                    Cancel
                  </AlertDialogCancel>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Cancel deletion and keep conversation</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <AlertDialogAction
                    onClick={() => conversationToDelete && deleteConversation(conversationToDelete)}
                    disabled={!!deletingConversationId}
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    {deletingConversationId ? 'Deleting...' : 'Delete'}
                  </AlertDialogAction>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Permanently delete this conversation</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Sidebar>
  )
}
