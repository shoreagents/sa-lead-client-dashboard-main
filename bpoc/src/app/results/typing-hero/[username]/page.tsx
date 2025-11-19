import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Trophy, Zap, BarChart3, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PageProps {
  params: { username: string };
}

async function getTypingHeroResults(username: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
    
    const response = await fetch(`${baseUrl}/api/public/user-by-slug?slug=${username}`, {
      next: { revalidate: 60 },
    });
    
    if (response.ok) {
      const data = await response.json();
      return data.user;
    }
  } catch (error) {
    console.error('Error fetching typing hero results:', error);
  }
  return null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { username } = params;
  
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://www.bpoc.io');
  
  const profile = await getTypingHeroResults(username);
  const ogImageUrl = `${baseUrl}/api/og/typing-hero?username=${username}`;
  
  const fullName = profile?.full_name || profile?.first_name || username;
  const bestWpm = profile?.game_stats?.typing_hero_stats?.best_wpm || 0;
  
  return {
    title: `${fullName}'s Typing Hero Results - ${bestWpm} WPM | BPOC.IO`,
    description: `Check out ${fullName}'s typing speed performance on BPOC.IO! Can you beat ${bestWpm} WPM?`,
    openGraph: {
      title: `${fullName}'s Typing Hero Results`,
      description: `Can you beat my typing speed? Best WPM: ${bestWpm}`,
      url: `${baseUrl}/results/typing-hero/${username}`,
      siteName: 'BPOC.IO',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${fullName}'s Typing Hero Results`,
          type: 'image/png',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${fullName}'s Typing Hero Results`,
      description: `Can you beat my typing speed? Best WPM: ${bestWpm}`,
      images: [ogImageUrl],
    },
    other: {
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:image:type': 'image/png',
    },
  };
}

export default async function TypingHeroResultPage({ params }: PageProps) {
  const { username } = params;
  const profile = await getTypingHeroResults(username);
  
  if (!profile) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Results Not Found</h1>
          <p className="text-gray-400 mb-6">We couldn't find typing results for this user.</p>
          <Link href="/">
            <Button className="bg-blue-500 hover:bg-blue-600">Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const typingStats = profile.game_stats?.typing_hero_stats;
  const bestWpm = typingStats?.best_wpm || 0;
  const latestWpm = typingStats?.latest_wpm || 0;
  const avgWpm = typingStats?.avg_wpm || 0;
  const displayName = profile.username || username;
  const fullName = profile.full_name || profile.first_name || displayName;
  
  // Parse AI analysis
  let aiAnalysis: any = null;
  try {
    if (typingStats?.ai_analysis) {
      aiAnalysis = typeof typingStats.ai_analysis === 'string' 
        ? JSON.parse(typingStats.ai_analysis)
        : typingStats.ai_analysis;
    }
  } catch (error) {
    console.error('Error parsing AI analysis:', error);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.1)_0%,transparent_50%)] pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.1)_0%,transparent_50%)] pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link href={`/${username}`}>
          <Button variant="ghost" className="mb-8 text-gray-400 hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Profile
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">⌨️</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Typing Hero Results
          </h1>
          <p className="text-xl text-gray-400">
            {fullName}'s Typing Performance
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Best WPM */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">🏆</div>
                <div className="text-5xl font-bold text-green-400 mb-2">{bestWpm}</div>
                <div className="text-sm font-medium text-green-300/80 mb-1">Best WPM</div>
                <div className="text-xs text-gray-500">Personal Record</div>
              </div>
            </div>
          </div>

          {/* Latest WPM */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <div className="text-5xl font-bold text-blue-400 mb-2">{latestWpm}</div>
                <div className="text-sm font-medium text-blue-300/80 mb-1">Latest WPM</div>
                <div className="text-xs text-gray-500">Most Recent</div>
              </div>
            </div>
          </div>

          {/* Average WPM */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <div className="text-5xl font-bold text-purple-400 mb-2">{Math.round(avgWpm)}</div>
                <div className="text-sm font-medium text-purple-300/80 mb-1">Avg WPM</div>
                <div className="text-xs text-gray-500">Consistent</div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Analysis */}
        {aiAnalysis?.aiAssessment && (
          <div className="mb-12 space-y-6">
            {/* Performance Level & Overall Assessment */}
            {aiAnalysis.aiAssessment.performanceLevel && (
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">🎯</div>
                    <h3 className="text-2xl font-bold text-green-400">Performance Level</h3>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 mb-4 border border-green-400/30">
                    <p className="text-2xl font-bold text-white text-center">
                      {aiAnalysis.aiAssessment.performanceLevel}
                    </p>
                  </div>
                  {aiAnalysis.aiAssessment.overallAssessment && (
                    <p className="text-gray-300 leading-relaxed">
                      {aiAnalysis.aiAssessment.overallAssessment}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Real-World Estimate */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">💡</div>
                  <h3 className="text-2xl font-bold text-yellow-400">Real-World Estimate</h3>
                </div>
                <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
                  <p className="text-3xl font-bold text-yellow-400 text-center mb-2">
                    {(() => {
                      const realWorldMin = Math.max(0, Math.round((latestWpm * 0.7) - 5));
                      const realWorldMax = Math.round((latestWpm * 0.8) + 5);
                      return `${realWorldMin}-${realWorldMax} WPM`;
                    })()}
                  </p>
                  <p className="text-gray-400 text-center text-sm">
                    Expected performance on standard typing tests
                  </p>
                </div>
              </div>
            </div>

            {/* Strengths */}
            {aiAnalysis.aiAssessment.strengths && aiAnalysis.aiAssessment.strengths.length > 0 && (
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">💪</div>
                    <h3 className="text-2xl font-bold text-yellow-400">Your Typing Strengths</h3>
                  </div>
                  <div className="space-y-3">
                    {aiAnalysis.aiAssessment.strengths.map((strength: string, index: number) => (
                      <div key={index} className="flex items-start gap-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-4 border border-yellow-400/20">
                        <div className="text-yellow-400 mt-1 text-xl">✓</div>
                        <p className="text-gray-200 flex-1">{strength}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-2xl blur-xl"></div>
          <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">💪 Can You Beat This?</h2>
              <p className="text-gray-400 mb-6">
                Test your typing speed and see how you compare!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/career-tools/games/typing-hero">
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-8 py-6 text-lg">
                    Play Typing Hero
                  </Button>
                </Link>
                <Link href={`/${username}`}>
                  <Button variant="outline" className="border-green-400/30 text-green-300 hover:bg-green-500/10 px-8 py-6 text-lg">
                    <User className="w-5 h-5 mr-2" />
                    View Full Profile
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>Powered by <span className="text-green-400 font-semibold">BPOC.IO</span> - Where BPO Careers Begin</p>
        </div>
      </div>
    </div>
  );
}

