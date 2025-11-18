'use client'

import { usePathname } from 'next/navigation'
import { Footer } from './Footer'

export function ConditionalFooter() {
  const pathname = usePathname()
  
  // Hide footer on dashboard pages
  const isDashboardPage = pathname?.startsWith('/user-dashboard') || 
                         pathname?.startsWith('/admin-dashboard') ||
                         pathname?.startsWith('/candidates/')
  
  if (isDashboardPage) {
    return null
  }
  
  return <Footer />
}
