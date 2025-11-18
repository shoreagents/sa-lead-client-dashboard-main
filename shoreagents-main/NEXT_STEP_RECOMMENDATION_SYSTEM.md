# Next Step Recommendation System

## Overview
The Next Step Recommendation System uses behavioral tracking data to provide personalized, context-aware recommendations to users based on their browsing history and interactions with the platform.

## Data Sources

### 1. `content_views` Table
Tracks detailed content interactions:
- **What it captures:**
  - Content type (page, candidate, service, etc.)
  - Content ID and title
  - View duration (in seconds)
  - Scroll depth (percentage)
  - Page section
  - Interaction type
  - Activity count

- **Use cases:**
  - Identify which content users engage with most
  - Measure engagement depth
  - Track content preferences
  - Understand user journey

### 2. `user_page_visits` Table
Tracks page-level visits:
- **What it captures:**
  - Page path
  - Visit count
  - Time spent (in seconds)
  - Last visit timestamp

- **Use cases:**
  - Identify frequently visited pages
  - Calculate total time investment
  - Track return visits
  - Understand navigation patterns

### 3. `candidate_views` Table
Tracks candidate profile views:
- **What it captures:**
  - Candidate ID and name
  - View duration
  - Page views (repeat visits)
  - Scroll percentage
  - Timestamps

- **Use cases:**
  - Identify candidates of high interest
  - Detect repeat views (strong intent)
  - Recommend interview requests
  - Match candidates to user needs

### 4. `pricing_quotes` Table
Tracks pricing calculations:
- **What it captures:**
  - Quote timestamp
  - Member count
  - Industry
  - Total monthly cost
  - Currency
  - Candidate recommendations

- **Use cases:**
  - Understand budget considerations
  - Track pricing exploration
  - Identify ready-to-buy signals
  - Recommend next commercial steps

### 5. `interview_request` Table
Tracks interview requests:
- **What it captures:**
  - Candidate details
  - Requester information
  - Request timestamp

- **Use cases:**
  - Identify qualified leads
  - Track conversion funnel
  - Prevent duplicate recommendations
  - Measure intent level

## Recommendation Logic

### Priority System (0-100)
The system assigns priority scores to different recommendations:

| Priority | Recommendation Type | Trigger Condition |
|----------|-------------------|-------------------|
| **95** | Request Interview | User viewed same candidate 3+ times |
| **92** | Book Consultation | Viewed pricing + candidates, no interview |
| **90** | Get Pricing | Viewed candidates, no pricing quote |
| **88** | Start Hiring Process | High engagement (3+ deep views) |
| **85** | Browse Talent | Has pricing quote, no candidate views |
| **82** | Get Started | Viewed case studies, no pricing |
| **80** | Browse Talent | Viewed how-it-works, no candidates |
| **50** | Learn More | New user (< 3 interactions) |

### Recommendation Rules

#### 1. **Request Interview** (Priority: 95)
```typescript
Conditions:
- Candidate viewed 3+ times (page_views >= 3)
- No existing interview requests
- Specific candidate identified

Action: "Schedule Interview"
URL: /candidates/{candidate_id}?action=interview
```

#### 2. **Book Consultation** (Priority: 92)
```typescript
Conditions:
- Viewed pricing page/content
- Viewed at least 1 candidate
- No interview requests yet

Action: "Book Consultation"
URL: /contact?type=consultation
```

#### 3. **Get Pricing** (Priority: 90)
```typescript
Conditions:
- Has candidate views
- No pricing quotes created

Action: "View Pricing"
URL: /pricing
```

#### 4. **Start Hiring Process** (Priority: 88)
```typescript
Conditions:
- 3+ content views with deep engagement
  - Scroll depth > 70%
  - View duration > 60 seconds
- No interview requests

Action: "Start Hiring Process"
URL: /we-got-talent
```

#### 5. **Browse Talent** (Priority: 85)
```typescript
Conditions:
- Has pricing quote(s)
- No candidate views

Action: "View Candidates"
URL: /we-got-talent
```

#### 6. **Explore Services** (Priority: 50)
```typescript
Conditions:
- New user
- Less than 3 content views
- Less than 3 page visits

Action: "Learn More"
URL: /how-it-works
```

## API Endpoint

### `GET /api/user/next-step`

**Headers:**
```
x-user-id: string (required)
```

**Response:**
```json
{
  "success": true,
  "recommendation": {
    "title": "Request Interview",
    "description": "You've shown interest in John Doe. Ready to meet them?",
    "action": "Schedule Interview",
    "actionUrl": "/candidates/abc123?action=interview",
    "icon": "Video",
    "priority": 95,
    "reason": "Frequently viewed candidate"
  },
  "alternativeSteps": [
    // Top 3 alternative recommendations
  ],
  "userActivity": {
    "candidateViews": 5,
    "pricingQuotes": 1,
    "interviewRequests": 0,
    "totalPageViews": 15,
    "totalTimeSpent": 1250
  }
}
```

## Component Usage

### Basic Implementation
```tsx
import { NextStepCard } from '@/components/dashboard/NextStepCard';

export function Dashboard() {
  const userId = "user-123"; // Get from auth context

  return (
    <div className="grid grid-cols-4 gap-6">
      <NextStepCard userId={userId} />
      {/* Other cards */}
    </div>
  );
}
```

### Features
- ✅ Real-time personalization
- ✅ Activity summary display
- ✅ Icon-based visual cues
- ✅ Loading states
- ✅ Error handling
- ✅ Responsive design
- ✅ Debug info (dev mode)

## Data Flow

```
User Browsing → Track Events → Database Tables
                                      ↓
                          [content_views]
                          [user_page_visits]
                          [candidate_views]
                          [pricing_quotes]
                          [interview_request]
                                      ↓
                          Analysis Algorithm
                                      ↓
                          Priority Scoring
                                      ↓
                          API Response
                                      ↓
                          NextStepCard Component
                                      ↓
                          User sees personalized recommendation
```

## Benefits

### For Users
1. **Personalized Experience**: Recommendations based on actual behavior
2. **Clear Path Forward**: No confusion about what to do next
3. **Time Savings**: Skip irrelevant steps
4. **Better Outcomes**: Higher conversion through relevant CTAs

### For Business
1. **Higher Conversion**: Data-driven nudges at right time
2. **Better Engagement**: Users follow optimal path
3. **Reduced Friction**: Eliminate decision paralysis
4. **Insights**: Understand user journey patterns

## Best Practices

### 1. Track Everything
Ensure all user interactions are properly tracked:
```typescript
// Example: Track content view
await prisma.content_views.create({
  data: {
    user_id: userId,
    content_type: 'page',
    content_id: 'pricing',
    content_title: 'Pricing Calculator',
    view_duration: 120,
    scroll_depth: 85,
    interaction_type: 'view'
  }
});
```

### 2. Update Recommendations Regularly
The API analyzes last 30 days of data by default. Adjust as needed:
```typescript
viewed_at: {
  gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) // 30 days
}
```

### 3. A/B Test Recommendations
Track which recommendations lead to conversions:
- Monitor click-through rates
- Measure conversion by recommendation type
- Adjust priorities based on performance

### 4. Handle Edge Cases
- New users with no data
- Users who have completed all steps
- Users stuck in analysis paralysis

## Future Enhancements

### Planned Features
1. **ML-Based Scoring**: Use machine learning for priority calculation
2. **Multi-Step Journeys**: Recommend sequences of actions
3. **Time-Based Triggers**: "You haven't visited in X days..."
4. **Cohort Analysis**: Compare user to similar successful users
5. **A/B Testing Framework**: Built-in experimentation
6. **Notification Integration**: Push/email recommendations
7. **Admin Override**: Manual recommendation injection
8. **Analytics Dashboard**: Track recommendation performance

### Integration Opportunities
- Email marketing (send top recommendation via email)
- Push notifications (mobile app)
- Chatbot (Maya AI suggests next step)
- SMS campaigns
- Retargeting ads

## Monitoring & Analytics

### Key Metrics to Track
1. **Recommendation Click-Through Rate**: % of users who click CTA
2. **Conversion by Recommendation Type**: Which recommendations convert best
3. **Time to Action**: How long after recommendation until action
4. **Recommendation Accuracy**: Are users following suggestions?
5. **A/B Test Results**: Performance of different recommendation strategies

### Dashboard Queries
```sql
-- Click-through rate by recommendation type
SELECT 
  recommendation_type,
  COUNT(*) as shown,
  SUM(CASE WHEN clicked THEN 1 ELSE 0 END) as clicked,
  ROUND(SUM(CASE WHEN clicked THEN 1 ELSE 0 END)::numeric / COUNT(*) * 100, 2) as ctr
FROM recommendation_events
GROUP BY recommendation_type
ORDER BY ctr DESC;
```

## Troubleshooting

### No Recommendations Shown
- Check if user has x-user-id header
- Verify user exists in database
- Check if user has any tracked activity
- Review API error logs

### Wrong Recommendations
- Verify tracking data is correct
- Check priority score calculations
- Review recommendation rules
- Test with different user scenarios

### Performance Issues
- Add database indexes on frequently queried fields
- Implement caching for recommendations
- Limit query result sizes
- Use database connection pooling

## Support

For questions or issues:
- Check API logs: `/api/user/next-step`
- Review component errors in browser console
- Verify database tracking is working
- Contact dev team for assistance

---

**Last Updated**: 2025-01-27
**Version**: 1.0.0
**Status**: Production Ready ✅

