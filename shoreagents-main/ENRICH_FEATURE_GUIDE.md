# Lead Enrichment Feature Guide

## Overview
The Lead Enrichment feature allows admins to automatically enrich user/lead data using the **Serper API** (Google Search API) by searching for additional information based on their email, name, and company.

## Location
- **Component**: `src/components/ui/lead-details-modal.tsx`
- **API Endpoint**: `src/app/api/admin/enrich-lead/route.ts`

## Features

### 1. Enrich Button
- Located in the Lead Details Modal footer (left side)
- Purple button with a Sparkles icon
- Automatically disabled if required data is missing

### 2. Smart Validation
The button automatically checks if the user has:
- ✅ **Email** - Valid email address
- ✅ **Name** - User's full name
- ✅ **Company** - Company name

If any of these fields are empty, the button is disabled.

### 3. Tooltip Feedback
**When Disabled:**
- **Red tooltip** with warning icon appears
- Shows: "⚠️ Cannot Enrich"
- Displays which fields are missing:
  - Example: "User must have Email, Company before enrichment"
  - Example: "User must have Name before enrichment"
  - Example: "User must have Email, Name, Company before enrichment"

**When Enabled:**
- **Gray tooltip** appears
- Shows: "Click to enrich user data using Serper API"

### 4. Loading & Success States

**Loading State:**
- Button shows: "Enriching..." with a spinning loader icon
- Button is disabled during the enrichment process

**Success State:**
- Button briefly shows: "Enriched!" with a sparkles icon
- User details automatically refresh to show new data
- Success state resets after 3 seconds

**Error State:**
- Error message displays at the top of the modal
- User can retry the enrichment

## API Integration

### Endpoint: `/api/admin/enrich-lead`

**Method:** POST

**Request Body:**
```json
{
  "userId": "user_123",
  "email": "john@example.com",
  "name": "John Doe",
  "company": "Acme Corp"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "User data enriched successfully",
  "data": {
    "userId": "user_123",
    "enrichedFields": {
      "linkedin_url": "https://linkedin.com/...",
      "company_website": "https://acme.com",
      "job_title": "CEO",
      // ... more enriched fields
    }
  }
}
```

**Response (Error):**
```json
{
  "success": false,
  "error": "Missing required fields: userId, email, name, and company are required"
}
```

## Setup Requirements

### 1. Environment Variable
Add your Serper API key to `.env.local`:

```env
SERPER_API_KEY=ea3ea33213cac03fd19017f57eeaf0129cd4b042
```

**Note:** The API key has already been added to `env.example`. Just copy it to your `.env.local` file.

### 2. Serper API Configuration
The API is already integrated! Here's how it works:

1. **API Endpoint**: `https://google.serper.dev/search`
2. **Documentation**: [Serper.dev](https://serper.dev/)
3. **Search Query Format**: Combines user's name, company, and email
4. **Returns**: Google search results with relevant information

The implementation in `src/app/api/admin/enrich-lead/route.ts` includes:

```typescript
const serperResponse = await fetch('https://google.serper.dev/search', {
  method: 'POST',
  headers: {
    'X-API-KEY': serperApiKey,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    q: `${name} ${company} email ${email}`,
    num: 10,
  }),
});
```

### 3. Database Schema Updates (Optional)
If you want to store enriched data, add these fields to your `User` model in `prisma/schema.prisma`:

```prisma
model User {
  // ... existing fields ...
  
  // Enriched data fields
  linkedin_url      String?   @db.VarChar(500)
  company_website   String?   @db.VarChar(500)
  company_size      String?   @db.VarChar(50)
  job_title         String?   @db.VarChar(200)
  phone_number      String?   @db.VarChar(50)
  location          String?   @db.VarChar(200)
  twitter_url       String?   @db.VarChar(500)
  enriched_at       DateTime? @db.Timestamptz(6)
  
  // ... rest of the model ...
}
```

Then run:
```bash
npx prisma db push
npx prisma generate
```

## Usage

### For Admins:
1. Open the Lead Details Modal by clicking on a lead card in the Kanban board
2. Check if the "Enrich" button is enabled (purple button on the left)
3. If disabled, hover over it to see which fields are missing
4. Click "Enrich" to fetch additional data from Serpent API
5. Wait for the enrichment to complete (~2-5 seconds)
6. The modal will automatically refresh with enriched data

## Customization

### Change Button Color
In `src/components/ui/lead-details-modal.tsx`, line 383:
```tsx
className="bg-purple-600 hover:bg-purple-700 text-white ..."
```
Change `purple-600` to your preferred color (e.g., `blue-600`, `indigo-600`).

### Change Tooltip Style
Lines 405-413 contain the tooltip styling. Adjust the `className` props as needed.

### Add More Required Fields
In the `canEnrich()` function (lines 149-167), add additional validation:
```typescript
if (!userDetails.phone_number) missingFields.push('phone number')
```

## Testing

### Test with Mock Data:
The current implementation includes mock enrichment data. You can test the UI flow without a real API key.

### Test with Real API:
1. Add your `SERPENT_API_KEY` to `.env.local`
2. Update the API implementation
3. Open a lead with complete data (email, name, company)
4. Click "Enrich"
5. Check the console logs for API responses
6. Verify enriched data appears in the modal

## Troubleshooting

**Button is always disabled:**
- Check that the user has email, name, and company filled in
- Hover over the button to see which fields are missing

**API returns 500 error:**
- Verify `SERPER_API_KEY` is set in `.env.local`
- Check Serper API key is valid and has remaining quota
- Review API logs in the terminal for specific error messages
- Restart the dev server after adding the environment variable

**Enrichment succeeds but data doesn't update:**
- Ensure database schema has fields to store enriched data
- Check that the `prisma.user.update()` call includes the enriched fields
- Verify `fetchUserDetails()` is called after enrichment

**Tooltip doesn't show:**
- Ensure `TooltipProvider` wraps the component
- Check that `@/components/ui/tooltip` component exists
- Verify browser console for any React errors

## Future Enhancements

1. **Add more enrichment sources** (Clearbit, Hunter.io, etc.)
2. **Store enrichment history** - Track when and what was enriched
3. **Batch enrichment** - Enrich multiple leads at once
4. **Smart rate limiting** - Avoid API quota issues
5. **Enrichment scheduling** - Auto-enrich new leads
6. **Data quality scoring** - Show completeness percentage
7. **Manual field overrides** - Allow admins to edit enriched data

## Related Files
- Lead Details Modal: `src/components/ui/lead-details-modal.tsx`
- Enrich API: `src/app/api/admin/enrich-lead/route.ts`
- Leads Page: `src/app/admin-dashboard/leads/page.tsx`
- User Schema: `prisma/schema.prisma`

