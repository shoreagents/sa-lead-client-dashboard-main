
import { User } from '@/types/user' // Assuming a User type exists, or define a minimal interface

interface UserNotificationData {
  id: string
  email: string
  full_name?: string | null
  first_name?: string | null
  last_name?: string | null
  admin_level?: string | null
  created_at?: string | Date | null
}

/**
 * Sends a notification to n8n webhook when a new user signs up
 * This function is fire-and-forget and won't block the main execution flow
 */
export async function notifyN8nNewUser(user: UserNotificationData) {
  const webhookUrl = process.env.N8N_WEBHOOK_URL

  if (!webhookUrl) {
    console.warn('⚠️ N8N_WEBHOOK_URL is not set. Skipping user signup notification.')
    return
  }

  // Construct the payload
  const payload = {
    event: 'user_signup',
    user: {
      id: user.id,
      email: user.email,
      full_name: user.full_name || `${user.first_name || ''} ${user.last_name || ''}`.trim(),
      admin_level: user.admin_level || 'user',
      created_at: user.created_at || new Date().toISOString()
    },
    source: 'bpoc_app',
    timestamp: new Date().toISOString()
  }

  console.log('🚀 Sending user signup notification to n8n:', payload.user.email)

  // Fire and forget - don't await the result to prevent slowing down the signup
  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  .then(response => {
    if (response.ok) {
      console.log('✅ n8n notification sent successfully')
    } else {
      console.warn(`⚠️ n8n notification failed with status: ${response.status}`)
    }
  })
  .catch(error => {
    console.error('❌ Error sending n8n notification:', error)
  })
}

