'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Users, 
  Star, 
  DollarSign, 
  Briefcase, 
  Award,
  CheckCircle,
  Clock,
  MapPin
} from 'lucide-react';

interface CandidateRecommendation {
  id: string;
  name: string;
  position: string;
  expectedSalary: number;
  experience: string;
  skills: string[];
  overallScore: number;
  matchScore: number;
  isRecommended: boolean;
  avatar?: string | null;
}

interface RoleRecommendation {
  roleTitle: string;
  totalCandidates: number;
  recommendedCandidates: CandidateRecommendation[];
}

interface PricingQuote {
  id: string;
  industry: string;
  member_count: number;
  total_monthly_cost: number;
  currency_code: string;
  created_at: string;
  candidate_recommendations: RoleRecommendation[];
}

export function CandidateRecommendationsDisplay({ quoteId }: { quoteId: string }) {
  const [quote, setQuote] = useState<PricingQuote | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchQuoteRecommendations();
  }, [quoteId]);

  const fetchQuoteRecommendations = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch quote with candidate recommendations
      const response = await fetch(`/api/quotes/${quoteId}/recommendations`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch quote recommendations');
      }

      const data = await response.json();
      setQuote(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <Award className="w-4 h-4" />;
    if (score >= 60) return <Star className="w-4 h-4" />;
    return <Clock className="w-4 h-4" />;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full border-2 border-lime-600 border-t-transparent w-8 h-8" />
        <span className="ml-2 text-gray-600">Loading recommendations...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8">
        <div className="text-red-500 mb-2">❌ Error loading recommendations</div>
        <p className="text-gray-600 mb-4">{error}</p>
        <Button onClick={fetchQuoteRecommendations} className="bg-lime-600 hover:bg-lime-700">
          Try Again
        </Button>
      </div>
    );
  }

  if (!quote || !quote.candidate_recommendations || quote.candidate_recommendations.length === 0) {
    return (
      <div className="text-center p-8">
        <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No AI Recommendations</h3>
        <p className="text-gray-600">This quote doesn't have any candidate recommendations yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Quote Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-lime-600" />
            AI Candidate Recommendations
          </CardTitle>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              {quote.industry}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {quote.member_count} members
            </span>
            <span className="flex items-center gap-1">
              <DollarSign className="w-4 h-4" />
              ₱{quote.total_monthly_cost.toLocaleString()}/month
            </span>
          </div>
        </CardHeader>
      </Card>

      {/* Role Recommendations */}
      {quote.candidate_recommendations.map((roleRec, roleIndex) => (
        <Card key={roleIndex}>
          <CardHeader>
            <CardTitle className="text-lg">{roleRec.roleTitle}</CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">
                {roleRec.totalCandidates} candidates found
              </Badge>
              <Badge variant="outline">
                {roleRec.recommendedCandidates.length} recommended
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {roleRec.recommendedCandidates.map((candidate) => (
                <Card key={candidate.id} className="relative">
                  {candidate.isRecommended && (
                    <div className="absolute -top-2 -right-2">
                      <Badge className="bg-lime-600 text-white">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Recommended
                      </Badge>
                    </div>
                  )}
                  
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={candidate.avatar || undefined} />
                        <AvatarFallback className="bg-lime-100 text-lime-600">
                          {candidate.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 truncate">
                          {candidate.name}
                        </h4>
                        <p className="text-sm text-gray-600 truncate">
                          {candidate.position}
                        </p>
                        <p className="text-xs text-gray-500">
                          {candidate.experience}
                        </p>
                      </div>
                    </div>

                    {/* Scores */}
                    <div className="flex gap-2 mb-3">
                      <Badge className={`${getScoreColor(candidate.matchScore)} flex items-center gap-1`}>
                        {getScoreIcon(candidate.matchScore)}
                        Match: {candidate.matchScore}
                      </Badge>
                      <Badge className={`${getScoreColor(candidate.overallScore)} flex items-center gap-1`}>
                        <Star className="w-3 h-3" />
                        Overall: {candidate.overallScore}
                      </Badge>
                    </div>

                    {/* Salary */}
                    <div className="flex items-center gap-1 mb-3 text-sm">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="font-medium text-green-700">
                        ₱{candidate.expectedSalary.toLocaleString()}/month
                      </span>
                    </div>

                    {/* Skills */}
                    <div>
                      <h5 className="text-xs font-medium text-gray-700 mb-2">Key Skills:</h5>
                      <div className="flex flex-wrap gap-1">
                        {candidate.skills.slice(0, 4).map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {candidate.skills.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{candidate.skills.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" className="flex-1 bg-lime-600 hover:bg-lime-700">
                        View Profile
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Contact
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}










