# Claude AI Usage Report
## Project: SA Lead Client Dashboard

**Generated:** November 7, 2025  
**Analyzed Projects:** ShoreAgents Main & BPOC

---

## 📦 Dependencies

### ShoreAgents Main
- **Package:** `@anthropic-ai/sdk` version `^0.60.0`
- **Environment Variable:** `ANTHROPIC_API_KEY`

### BPOC
- **Package:** `@anthropic-ai/sdk` version `^0.60.0`
- **Environment Variables:** `ANTHROPIC_API_KEY` or `CLAUDE_API_KEY`

---

## 🤖 Claude AI Models Used

### ShoreAgents Main Project

| Model | Usage Location | Purpose |
|-------|---------------|---------|
| **claude-3-haiku-20240307** | `/api/chat` | Main chat interface |
| **claude-3-5-sonnet-20241022** | `/api/autocomplete` | AI-powered autocomplete for roles/industries |
| **claude-3-5-sonnet-20241022** | `/api/analyze-candidate` | Candidate profile analysis |
| **claude-3-5-sonnet-20241022** | `/api/ai-candidate-recommendations` | Candidate recommendations |
| **claude-sonnet-4-20250514** | `/api/admin/ai-generate-blog` | Blog post generation |
| **claude-sonnet-4-20250514** | `/api/admin/content/improve-tsx` | TSX content improvement |

### BPOC Project

| Model | Usage Location | Purpose |
|-------|---------------|---------|
| **claude-3-5-sonnet-20241022** | `/api/analyze-resume` | Resume analysis and scoring |
| **claude-3-5-sonnet-20241022** | `/api/improve-resume` | Resume improvement suggestions |
| **claude-3-5-sonnet-20241022** | `/api/jobs/match` | Single job matching |
| **claude-3-5-sonnet-20241022** | `/api/jobs/batch-match` | Batch job matching |
| **claude-3-5-sonnet-20241022** | `/api/admin/jobs/process` | Job posting processing |
| **claude-3-5-sonnet-20241022** | `/api/admin/jobs/improve` | Job description improvement |
| **claude-3-5-sonnet-20241022** | `/api/user/job-matches-count` | Job match counting |
| **claude-3-5-sonnet-20241022** | `/api/games/disc/personalized` | DISC personality analysis |
| **claude-3-5-sonnet-20241022** | `/api/games/typing-hero/generate-complete-story` | Story generation |
| **claude-3-5-sonnet-20241022** | `/api/games/typing-hero/ai-assessment` | Typing assessment |
| **claude-3-5-sonnet-20241022** | `/api/analyze-cultural` | Cultural fit analysis |
| **claude-3-5-sonnet-latest** | `/api/games/bpoc-cultural/analyze` | BPOC cultural game analysis |
| **claude-3-sonnet-20240229** | `/api/test-scoring` | Test scoring (fallback config) |
| **claude-3-sonnet-20240229** | `src/lib/ai.ts` | AI service configuration |

---

## 🎯 Features Using Claude AI

### ShoreAgents Main Features

#### 1. **AI Chat Console** (`/api/chat`)
- **Model:** claude-3-haiku-20240307
- **Max Tokens:** 1000
- **Purpose:** Real-time conversational AI assistant
- **Features:**
  - Personalized user interactions
  - Knowledge base integration
  - Candidate analysis
  - Lead capture suggestions
  - Dynamic pricing calculator triggers

#### 2. **AI Autocomplete** (`/api/autocomplete`)
- **Model:** claude-3-5-sonnet-20241022
- **Max Tokens:** 500 (suggestions), 1000 (descriptions)
- **Purpose:** Smart suggestions for:
  - Industry names
  - Job roles/positions
  - Job descriptions generation

#### 3. **Candidate Analysis** (`/api/analyze-candidate`)
- **Model:** claude-3-5-sonnet-20241022
- **Max Tokens:** 1024
- **Purpose:** 
  - Analyze candidate profiles from BPOC database
  - Generate professional assessments
  - Answer specific questions about candidates
  - Provide recruitment insights

#### 4. **Candidate Recommendations** (`/api/ai-candidate-recommendations`)
- **Model:** claude-3-5-sonnet-20241022
- **Purpose:** Generate intelligent candidate recommendations based on user needs

#### 5. **Blog Post Generation** (`/api/admin/ai-generate-blog`)
- **Model:** claude-sonnet-4-20250514 (Latest Sonnet 4)
- **Max Tokens:** 8000
- **Purpose:** 
  - Generate comprehensive blog posts
  - Create pillar pages
  - Write articles with research context
  - Include SEO optimization

#### 6. **TSX Content Improvement** (`/api/admin/content/improve-tsx`)
- **Model:** claude-sonnet-4-20250514 (Latest Sonnet 4)
- **Purpose:** Improve and optimize TSX component content

---

### BPOC Features

#### 1. **Resume Analysis** (`/api/analyze-resume`)
- **Model:** claude-3-5-sonnet-20241022
- **Max Tokens:** 4000
- **Purpose:**
  - Comprehensive resume analysis
  - ATS compatibility scoring
  - Skills alignment assessment
  - Salary recommendations (PHP)
  - Career path suggestions
  - Multi-file support (resumes + certificates)

#### 2. **Resume Improvement** (`/api/improve-resume`)
- **Model:** claude-3-5-sonnet-20241022
- **Max Tokens:** 4000
- **Purpose:**
  - Generate improved resume content
  - Enhance professional summary
  - Optimize job descriptions
  - Better skills presentation

#### 3. **Job Matching System**

##### Single Job Match (`/api/jobs/match`)
- **Model:** claude-3-5-sonnet-20241022
- **Max Tokens:** 1000
- **Purpose:**
  - Intelligent job-candidate matching
  - Weighted scoring algorithm
  - Location-based analysis (distance from office)
  - Salary compatibility
  - Skills alignment
  - Work setup preferences

##### Batch Job Matching (`/api/jobs/batch-match`)
- **Model:** claude-3-5-sonnet-20241022
- **Max Tokens:** 1000
- **Purpose:**
  - Analyze multiple jobs at once
  - Efficient bulk matching
  - Same weighted scoring as single match

##### Job Match Counting (`/api/user/job-matches-count`)
- **Model:** claude-3-5-sonnet-20241022
- **Purpose:** Count and categorize job matches for users

#### 4. **Job Processing & Improvement**

##### Job Processing (`/api/admin/jobs/process`)
- **Model:** claude-3-5-sonnet-20241022
- **Max Tokens:** 2000
- **Purpose:** Process and structure job postings

##### Job Improvement (`/api/admin/jobs/improve`)
- **Model:** claude-3-5-sonnet-20241022
- **Purpose:** Enhance job descriptions and requirements

#### 5. **Career Games & Assessments**

##### DISC Personality Test (`/api/games/disc/personalized`)
- **Model:** claude-3-5-sonnet-20241022
- **Purpose:**
  - Personalized DISC personality analysis
  - Career alignment insights
  - Behavioral assessment

##### BPOC Cultural Assessment (`/api/games/bpoc-cultural/analyze`)
- **Model:** claude-3-5-sonnet-latest
- **Purpose:** Analyze cultural fit for BPO industry

##### Cultural Analysis (`/api/analyze-cultural`)
- **Model:** claude-3-5-sonnet-20241022
- **Purpose:** Comprehensive cultural compatibility analysis

##### Typing Hero Game

###### Story Generation (`/api/games/typing-hero/generate-complete-story`)
- **Model:** claude-3-5-sonnet-20241022
- **Purpose:** Generate engaging stories for typing practice

###### AI Assessment (`/api/games/typing-hero/ai-assessment`)
- **Model:** claude-3-5-sonnet-20241022
- **Purpose:** Assess typing performance and provide feedback

---

## 📊 Version Summary

### Active Claude Models

1. **claude-3-haiku-20240307** (Fastest, Most Efficient)
   - Used for: Real-time chat interactions
   - Characteristics: Fast responses, lower cost
   - Location: ShoreAgents chat interface

2. **claude-3-5-sonnet-20241022** (Primary Workhorse)
   - Used for: Most AI features across both projects
   - Characteristics: Balanced performance and intelligence
   - Locations: Resume analysis, job matching, autocomplete, candidate analysis, games

3. **claude-3-5-sonnet-latest** (Latest Version)
   - Used for: BPOC cultural game analysis
   - Characteristics: Most recent updates

4. **claude-sonnet-4-20250514** (Most Advanced)
   - Used for: Content generation (blogs, TSX improvements)
   - Characteristics: Highest quality output, more expensive
   - Locations: Admin content generation features

5. **claude-3-sonnet-20240229** (Fallback/Legacy)
   - Used for: Configuration defaults and test scoring
   - Characteristics: Older version for compatibility

---

## 🔑 Environment Configuration

### Required Environment Variables

#### ShoreAgents Main
```env
ANTHROPIC_API_KEY=your_api_key_here
```

#### BPOC
```env
CLAUDE_API_KEY=your_api_key_here
# OR
ANTHROPIC_API_KEY=your_api_key_here
```

**Note:** BPOC accepts both `CLAUDE_API_KEY` and `ANTHROPIC_API_KEY` for backward compatibility.

---

## 💰 Cost Implications

### Model Pricing (Approximate)

| Model | Input Cost | Output Cost | Use Case |
|-------|------------|-------------|----------|
| Claude 3 Haiku | Lowest | Lowest | Real-time chat |
| Claude 3.5 Sonnet | Medium | Medium | Most operations |
| Claude Sonnet 4 | Highest | Highest | Content generation |

### High-Volume Features
- **Resume Analysis**: 4000 tokens per analysis
- **Job Matching**: 1000 tokens per match (can be batched)
- **Blog Generation**: 8000 tokens per post
- **Chat Interactions**: 1000 tokens per message

---

## 🛡️ Fallback Mechanisms

Both projects implement fallback scoring when Claude API is unavailable:

### ShoreAgents Main
- Returns service unavailable errors
- Graceful degradation for chat features

### BPOC
- **Job Matching:** Uses weighted fallback scoring algorithm
- **Resume Analysis:** Returns default analysis structure
- **Note:** Fallback ensures functionality even without API access

---

## 📈 Usage Patterns

### ShoreAgents Main (Customer-Facing)
- Primary focus on conversational AI
- Real-time interactions with users
- Content generation for marketing
- Candidate recommendations

### BPOC (Candidate-Facing)
- Heavy focus on resume/career analysis
- Job matching algorithms
- Career development tools
- Gamified assessments

---

## 🔧 Technical Implementation

### API Integration Pattern
```typescript
// Common pattern across both projects
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

const response = await anthropic.messages.create({
  model: 'claude-3-5-sonnet-20241022',
  max_tokens: 1000,
  messages: [{ role: 'user', content: prompt }]
});
```

### Error Handling
- API key validation
- Rate limiting (10 requests/minute for chat)
- Retry logic for transient errors (429, 500, 502, 503, 504, 529)
- Fallback responses for failures

---

## 📝 Recommendations

1. **Cost Optimization**
   - Consider using Haiku for more real-time features
   - Implement caching for job matches (24-hour TTL already in place)
   - Use batch operations where possible

2. **Version Management**
   - Standardize on Claude 3.5 Sonnet for most operations
   - Reserve Sonnet 4 for high-value content generation
   - Monitor new model releases for improvements

3. **Feature Enhancement**
   - Add prompt caching for frequently used system prompts
   - Implement streaming responses for long-form content
   - Consider adding user feedback loops for AI quality

4. **Monitoring**
   - Track API usage and costs per feature
   - Monitor token consumption patterns
   - Set up alerts for API failures

---

## 🚀 Latest Features

### Using Claude Sonnet 4 (Most Recent)
- Blog post generation with advanced SEO
- TSX content improvement for React components
- Most sophisticated content creation capabilities

### Using Claude 3.5 Sonnet (October 2024)
- Resume analysis with multi-file support
- Advanced job matching with weighted scoring
- Candidate analysis from database
- Career games and assessments

---

## Summary

**Total Claude AI Integrations:** 20+ API endpoints  
**Primary Model:** Claude 3.5 Sonnet (October 2024)  
**Latest Model:** Claude Sonnet 4 (May 2025) - for content generation  
**Fastest Model:** Claude 3 Haiku - for real-time chat  

**Key Strengths:**
- Comprehensive AI integration across both projects
- Smart fallback mechanisms for reliability
- Version diversity for cost-performance optimization
- Latest models for premium features

**Areas of Focus:**
- ShoreAgents: Conversational AI, content generation, candidate recommendations
- BPOC: Resume analysis, job matching, career development, gamified assessments

