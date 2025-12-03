"use client"

import { UserGuard } from '@/components/auth/UserGuard'
import { UserDashboardSidebar } from '@/components/layout/UserDashboardSidebar'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { useParams, useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { 
  ArrowLeft, 
  Users,
  Star,
  Award,
  Briefcase,
  MapPin,
  Calendar,
  DollarSign,
  Clock,
  Zap,
  Target,
  TrendingUp,
  Lightbulb,
  MessageCircle,
  Heart,
  Mail,
  Phone,
  Download,
  CheckCircle2,
  AlertCircle
} from 'lucide-react'
import { useBPOCEmployeeById } from '@/hooks/use-api'
import { useCurrency } from '@/lib/currencyContext'
import { calculateCandidateMonthlyCost, formatCurrency, getExperienceLevelMultiplier, getFixedWorkspaceCost } from '@/lib/fixedPricingService'
import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function PremiumCandidateDetailPage() {
  const params = useParams()
  const router = useRouter()
  const candidateId = params.id as string
  const { selectedCurrency } = useCurrency()
  const [isFavorite, setIsFavorite] = useState(false)
  const [experienceLevel, setExperienceLevel] = useState<'entry' | 'mid' | 'senior'>('mid')
  const [workspaceType, setWorkspaceType] = useState<'wfh' | 'hybrid' | 'office'>('wfh')
  
  // Fetch candidate data from BPOC API
  const { data: candidate, isLoading, error } = useBPOCEmployeeById(candidateId)

  // Calculate client monthly cost based on selected options
  // Handle salary ranges like "80000 - 90000" by taking the average
  const expectedSalaryPhp = candidate?.expected_salary 
    ? (() => {
        const salaryStr = candidate.expected_salary.toString();
        console.log('📊 Raw expected_salary from DB:', salaryStr);
        
        // Check if it's a range (contains "-")
        if (salaryStr.includes('-')) {
          const parts = salaryStr.split('-').map(p => p.trim());
          const min = parseFloat(parts[0].replace(/[^\d.]/g, ''));
          const max = parseFloat(parts[1]?.replace(/[^\d.]/g, '') || min);
          const average = (min + max) / 2;
          console.log('💰 Salary range detected:', { min, max, average });
          return average;
        }
        
        // Single value
        const value = parseFloat(salaryStr.replace(/[^\d.]/g, ''));
        console.log('💰 Single salary value:', value);
        return value;
      })()
    : 0
  
  const clientMonthlyCost = expectedSalaryPhp > 0 
    ? calculateCandidateMonthlyCost(
        expectedSalaryPhp,
        experienceLevel,
        workspaceType,
        selectedCurrency.code
      )
    : 0

  if (isLoading) {
    return (
      <UserGuard>
        <SidebarProvider>
          <UserDashboardSidebar />
          <SidebarInset>
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full border-4 border-lime-600 border-t-transparent w-12 h-12" />
              <span className="ml-4 text-gray-600 text-lg">Loading candidate details...</span>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </UserGuard>
    )
  }

  if (error || !candidate) {
    return (
      <UserGuard>
        <SidebarProvider>
          <UserDashboardSidebar />
          <SidebarInset>
            <div className="flex flex-col items-center justify-center min-h-screen">
              <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Candidate Not Found</h2>
              <p className="text-gray-600 mb-6">The candidate you're looking for doesn't exist or has been removed.</p>
              <Button onClick={() => router.push('/user-dashboard/candidates')} className="bg-lime-600 hover:bg-lime-700">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Candidates
              </Button>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </UserGuard>
    )
  }

  return (
    <UserGuard>
      <SidebarProvider className="h-full">
        <UserDashboardSidebar />
        <SidebarInset className="flex flex-col h-full">
          <div className="flex-1 overflow-auto">
            <div className="flex flex-col gap-6 p-6">
            {/* Hero Section */}
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Avatar & Basic Info */}
                  <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="w-32 h-32 bg-lime-100 rounded-full flex items-center justify-center shadow-lg border-4 border-lime-200">
                      {candidate.avatar_url ? (
                        <img 
                          src={candidate.avatar_url} 
                          alt={candidate.full_name}
                          className="w-32 h-32 rounded-full object-cover"
                        />
                      ) : (
                        <Users className="w-16 h-16 text-lime-600" />
                      )}
                    </div>
                    
                    {/* Work Status Badge */}
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${
                        candidate.work_status === 'Available' ? 'bg-green-500' : 
                        candidate.work_status === 'Busy' ? 'bg-yellow-500' : 'bg-gray-500'
                      }`} />
                      <span className="text-sm font-medium text-gray-700">
                        {candidate.work_status || 'Status Unknown'}
                      </span>
                    </div>
                  </div>

                  {/* Candidate Details */}
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{candidate.full_name}</h1>
                    <p className="text-xl text-gray-600 mb-4">{candidate.current_position || candidate.position}</p>
                    
                    {/* Location & Contact Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{candidate.location || 'Philippines'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Joined {new Date(candidate.user_created_at).toLocaleDateString()}</span>
                      </div>
                    </div>

                    {/* Bio */}
                    {candidate.bio && (
                      <p className="text-gray-700 mb-4 leading-relaxed">{candidate.bio}</p>
                    )}

                    {/* Expected Cost - Prominent */}
                    {clientMonthlyCost > 0 && (
                      <div className="bg-gradient-to-r from-lime-600 to-green-600 text-white rounded-lg p-4 mb-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-5 h-5" />
                            <span className="font-semibold">Monthly Cost</span>
                          </div>
                          <span className="text-3xl font-bold">
                            {formatCurrency(clientMonthlyCost, selectedCurrency.code)}
                          </span>
                        </div>
                        <p className="text-sm text-lime-100 mt-2">
                          Based on {experienceLevel} level & {workspaceType === 'wfh' ? 'work from home' : workspaceType === 'hybrid' ? 'hybrid' : 'office'} workspace • Adjust in "Work Preferences" tab
                        </p>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-lime-600 hover:bg-lime-700 text-white">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Request Interview
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs for Detailed Information */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 lg:w-auto">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="ai-analysis">AI Analysis</TabsTrigger>
                <TabsTrigger value="skills">Skills & Experience</TabsTrigger>
                <TabsTrigger value="preferences">Work Preferences</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                {/* AI Score Overview */}
                {candidate.overall_score && (
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <Award className="w-5 h-5 text-yellow-500" />
                          AI Performance Score
                        </CardTitle>
                        <div className="flex items-center gap-2">
                          <Star className="w-8 h-8 text-yellow-500 fill-current" />
                          <span className="text-4xl font-bold text-gray-900">{candidate.overall_score.toFixed(1)}</span>
                          <span className="text-gray-500">/100</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                          <span className="text-sm font-medium text-gray-700">ATS Compatibility</span>
                          <span className="text-2xl font-bold text-blue-600">
                            {candidate.ats_compatibility_score?.toFixed(0) || 'N/A'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                          <span className="text-sm font-medium text-gray-700">Content Quality</span>
                          <span className="text-2xl font-bold text-green-600">
                            {candidate.content_quality_score?.toFixed(0) || 'N/A'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                          <span className="text-sm font-medium text-gray-700">Presentation</span>
                          <span className="text-2xl font-bold text-purple-600">
                            {candidate.professional_presentation_score?.toFixed(0) || 'N/A'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                          <span className="text-sm font-medium text-gray-700">Skills Alignment</span>
                          <span className="text-2xl font-bold text-orange-600">
                            {candidate.skills_alignment_score?.toFixed(0) || 'N/A'}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Key Strengths */}
                {candidate.key_strengths && candidate.key_strengths.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-lime-600" />
                        Key Strengths
                      </CardTitle>
                      <CardDescription>
                        Top professional capabilities and expertise
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {candidate.key_strengths.map((strength: string, index: number) => (
                          <li key={index} className="flex items-start gap-3 p-3 bg-lime-50 rounded-lg border border-lime-200">
                            <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700 leading-relaxed">{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              {/* AI Analysis Tab */}
              <TabsContent value="ai-analysis" className="space-y-6">
                {/* AI Recommendations */}
                {candidate.recommendations && candidate.recommendations.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-blue-600" />
                        AI Recommendations
                      </CardTitle>
                      <CardDescription>
                        Insights and suggestions based on AI analysis
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {candidate.recommendations.map((rec: string, index: number) => (
                          <li key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                            <Target className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Areas for Improvement */}
                {candidate.improvements && candidate.improvements.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-orange-600" />
                        Growth Areas
                      </CardTitle>
                      <CardDescription>
                        Potential areas for development
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {candidate.improvements.map((improvement: string, index: number) => (
                          <li key={index} className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                            <TrendingUp className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{improvement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Improved Summary */}
                {candidate.improved_summary && (
                  <Card>
                    <CardHeader>
                      <CardTitle>AI-Enhanced Professional Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed">{candidate.improved_summary}</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              {/* Skills & Experience Tab */}
              <TabsContent value="skills" className="space-y-6">
                {/* Skills */}
                {candidate.skills_snapshot && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-lime-600" />
                        Skills & Technologies
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {Array.isArray(candidate.skills_snapshot) && candidate.skills_snapshot.length > 0 ? (
                          candidate.skills_snapshot.map((skill: string, index: number) => (
                            <Badge key={index} variant="outline" className="text-sm border-lime-200 text-gray-700 px-3 py-1">
                              {skill}
                            </Badge>
                          ))
                        ) : (
                          <p className="text-gray-500">No skills listed</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Experience Snapshot */}
                {candidate.experience_snapshot && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-gray-600" />
                        Experience Summary
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {Array.isArray(candidate.experience_snapshot) && candidate.experience_snapshot.length > 0 ? (
                        <div className="space-y-4">
                          {candidate.experience_snapshot.map((exp: any, index: number) => (
                            <div key={index} className="border-l-4 border-lime-600 pl-4">
                              <h4 className="font-semibold text-gray-900">{exp.title || exp.position || 'Position'}</h4>
                              <p className="text-sm text-gray-600">{exp.company || 'Company'}</p>
                              <p className="text-xs text-gray-500 mt-1">
                                {exp.duration || exp.years || 'Duration not specified'}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500">Experience details not available</p>
                      )}
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              {/* Work Preferences Tab */}
              <TabsContent value="preferences" className="space-y-6">
                {/* Interactive Pricing Calculator */}
                <Card className="border-2 border-lime-600">
                  <CardHeader className="bg-gradient-to-r from-lime-50 to-green-50">
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-lime-600" />
                      Monthly Cost Calculator
                    </CardTitle>
                    <CardDescription>
                      Adjust options to see updated pricing
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-6">
                    {/* Pricing Options */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Experience Level */}
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                          Experience Level
                        </label>
                        <Select 
                          value={experienceLevel} 
                          onValueChange={(value: 'entry' | 'mid' | 'senior') => setExperienceLevel(value)}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="entry">Entry Level (1-2 years)</SelectItem>
                            <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                            <SelectItem value="senior">Senior Level (5+ years)</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-xs text-gray-500 mt-1">
                          Multiplier: {getExperienceLevelMultiplier(experienceLevel)}x
                        </p>
                      </div>

                      {/* Workspace Type */}
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                          Workspace Setup
                        </label>
                        <Select 
                          value={workspaceType} 
                          onValueChange={(value: 'wfh' | 'hybrid' | 'office') => setWorkspaceType(value)}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="wfh">Work From Home</SelectItem>
                            <SelectItem value="hybrid">Hybrid</SelectItem>
                            <SelectItem value="office">Office Based</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-xs text-gray-500 mt-1">
                          Cost: {formatCurrency(
                            getFixedWorkspaceCost(workspaceType, selectedCurrency.code),
                            selectedCurrency.code
                          )}/month
                        </p>
                      </div>
                    </div>

                    {/* Price Breakdown */}
                    <div className="border-t pt-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Price Breakdown</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Base Salary (PHP)</span>
                          <span className="font-medium text-gray-900">
                            ₱{expectedSalaryPhp.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Experience Multiplier</span>
                          <span className="font-medium text-gray-900">
                            {getExperienceLevelMultiplier(experienceLevel)}x
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Workspace Cost</span>
                          <span className="font-medium text-gray-900">
                            {formatCurrency(
                              getFixedWorkspaceCost(workspaceType, selectedCurrency.code),
                              selectedCurrency.code
                            )}
                          </span>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-semibold text-gray-900">Total Monthly Cost</span>
                          <span className="text-3xl font-bold text-lime-600">
                            {formatCurrency(clientMonthlyCost, selectedCurrency.code)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* What's Included */}
                    <div className="bg-lime-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-lime-600" />
                        What's Included
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-lime-600 mt-0.5">•</span>
                          <span>Full-time dedicated staff member</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lime-600 mt-0.5">•</span>
                          <span>HR & payroll management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lime-600 mt-0.5">•</span>
                          <span>IT support & equipment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lime-600 mt-0.5">•</span>
                          <span>
                            {workspaceType === 'office' 
                              ? 'Premium office space in Manila' 
                              : workspaceType === 'hybrid'
                              ? 'Flexible hybrid workspace setup'
                              : 'Professional work-from-home setup'}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lime-600 mt-0.5">•</span>
                          <span>Ongoing performance management</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Work Preferences */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-gray-600" />
                      Work Preferences & Availability
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {candidate.preferred_shift && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">Preferred Shift</label>
                          <p className="text-lg font-semibold text-gray-900 mt-1">{candidate.preferred_shift}</p>
                        </div>
                      )}
                      {candidate.work_setup && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">Work Setup</label>
                          <p className="text-lg font-semibold text-gray-900 mt-1">{candidate.work_setup}</p>
                        </div>
                      )}
                      {candidate.notice_period_days && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">Notice Period</label>
                          <p className="text-lg font-semibold text-gray-900 mt-1">{candidate.notice_period_days} days</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </UserGuard>
  )
}

