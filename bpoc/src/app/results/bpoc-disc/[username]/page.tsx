import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PageProps {
  params: { username: string };
}

async function getBpocDiscResults(username: string) {
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
    console.error('Error fetching BPOC DISC results:', error);
  }
  return null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { username } = params;
  
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://www.bpoc.io');
  
  const profile = await getBpocDiscResults(username);
  const ogImageUrl = `${baseUrl}/api/og/bpoc-disc?username=${username}`;
  
  const fullName = profile?.full_name || profile?.first_name || username;
  const primaryType = profile?.game_stats?.disc_personality_stats?.primary_type || 'D';
  const animalMap: {[key: string]: string} = {
    'D': 'Eagle',
    'I': 'Peacock',
    'S': 'Turtle',
    'C': 'Owl'
  };
  const animalName = animalMap[primaryType] || 'Eagle';
  
  return {
    title: `${fullName}'s BPOC DISC Results - ${animalName} | BPOC.IO`,
    description: `${fullName} is a ${animalName} personality! Discover your DISC personality type on BPOC.IO.`,
    openGraph: {
      title: `${fullName}'s BPOC DISC Results`,
      description: `I'm a ${animalName}! What's your personality type?`,
      url: `${baseUrl}/results/bpoc-disc/${username}`,
      siteName: 'BPOC.IO',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${fullName}'s BPOC DISC Personality Results`,
          type: 'image/png',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${fullName}'s BPOC DISC Results`,
      description: `I'm a ${animalName}! What's your personality type?`,
      images: [ogImageUrl],
    },
    other: {
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:image:type': 'image/png',
    },
  };
}

export default async function BpocDiscResultPage({ params }: PageProps) {
  const { username } = params;
  const profile = await getBpocDiscResults(username);
  
  if (!profile) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Results Not Found</h1>
          <p className="text-gray-400 mb-6">We couldn't find DISC results for this user.</p>
          <Link href="/">
            <Button className="bg-blue-500 hover:bg-blue-600">Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const discStats = profile.game_stats?.disc_personality_stats;
  const primaryType = discStats?.primary_type || 'D';
  const dScore = discStats?.d || 0;
  const iScore = discStats?.i || 0;
  const sScore = discStats?.s || 0;
  const cScore = discStats?.c || 0;
  const displayName = profile.username || username;
  const fullName = profile.full_name || profile.first_name || displayName;

  const animalInfo: {[key: string]: {emoji: string, name: string, description: string, color: string}} = {
    'D': { emoji: '🦅', name: 'EAGLE', description: 'The Sky Dominator - You soar above challenges and lead from the front!', color: 'red' },
    'I': { emoji: '🦚', name: 'PEACOCK', description: 'The Social Star - You light up rooms and connect with people effortlessly!', color: 'yellow' },
    'S': { emoji: '🐢', name: 'TURTLE', description: 'The Steady Guardian - You keep everything running smoothly!', color: 'green' },
    'C': { emoji: '🦉', name: 'OWL', description: 'The Wise Analyst - You spot what others miss!', color: 'blue' }
  };

  const animal = animalInfo[primaryType] || animalInfo['D'];
  
  // Parse AI assessment
  let aiAssessment: any = null;
  try {
    if (discStats?.latest_ai_assessment) {
      aiAssessment = typeof discStats.latest_ai_assessment === 'string' 
        ? JSON.parse(discStats.latest_ai_assessment)
        : discStats.latest_ai_assessment;
    }
  } catch (error) {
    console.error('Error parsing AI assessment:', error);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1)_0%,transparent_50%)] pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.1)_0%,transparent_50%)] pointer-events-none"></div>

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
          <div className="text-8xl mb-6">{animal.emoji}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {animal.name}
          </h1>
          <p className="text-xl text-blue-400 mb-2">
            {fullName}'s DISC Personality
          </p>
          <p className="text-gray-400">
            {animal.description}
          </p>
        </div>

        {/* DISC Scores */}
        <div className="space-y-6 mb-12">
          {/* Dominance */}
          <div className="relative group">
            <div className={`absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-xl blur-xl ${primaryType === 'D' ? 'blur-2xl' : ''} transition-all duration-300`}></div>
            <div className={`relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border ${primaryType === 'D' ? 'border-red-400/50' : 'border-red-500/30'} transition-all duration-300`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🦅</span>
                  <div>
                    <div className="text-xl font-bold text-red-400">Dominance</div>
                    <div className="text-xs text-gray-500">Direct • Results-Oriented • Decisive</div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-red-300">{dScore}%</div>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${dScore}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Influence */}
          <div className="relative group">
            <div className={`absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-xl blur-xl ${primaryType === 'I' ? 'blur-2xl' : ''} transition-all duration-300`}></div>
            <div className={`relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border ${primaryType === 'I' ? 'border-yellow-400/50' : 'border-yellow-500/30'} transition-all duration-300`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🦚</span>
                  <div>
                    <div className="text-xl font-bold text-yellow-400">Influence</div>
                    <div className="text-xs text-gray-500">Outgoing • Enthusiastic • Optimistic</div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-yellow-300">{iScore}%</div>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${iScore}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Steadiness */}
          <div className="relative group">
            <div className={`absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-xl blur-xl ${primaryType === 'S' ? 'blur-2xl' : ''} transition-all duration-300`}></div>
            <div className={`relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border ${primaryType === 'S' ? 'border-green-400/50' : 'border-green-500/30'} transition-all duration-300`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🐢</span>
                  <div>
                    <div className="text-xl font-bold text-green-400">Steadiness</div>
                    <div className="text-xs text-gray-500">Supportive • Patient • Stable</div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-green-300">{sScore}%</div>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${sScore}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Conscientiousness */}
          <div className="relative group">
            <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl blur-xl ${primaryType === 'C' ? 'blur-2xl' : ''} transition-all duration-300`}></div>
            <div className={`relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border ${primaryType === 'C' ? 'border-blue-400/50' : 'border-blue-500/30'} transition-all duration-300`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🦉</span>
                  <div>
                    <div className="text-xl font-bold text-blue-400">Conscientiousness</div>
                    <div className="text-xs text-gray-500">Analytical • Precise • Systematic</div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-blue-300">{cScore}%</div>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${cScore}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Full AI Assessment */}
        {aiAssessment && (
          <div className="mb-12 space-y-6">
            {/* Animal Personality Analysis */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{animal.emoji}</div>
                  <h3 className="text-2xl font-bold text-blue-400">Animal Personality Analysis</h3>
                </div>
                <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl p-5 border border-blue-400/30">
                  <p className="text-gray-200 leading-relaxed whitespace-pre-wrap">
                    {(() => {
                      const assessment = aiAssessment;
                      // Extract animal-related content from the assessment
                      if (typeof assessment === 'string') {
                        const animalSections = assessment.split('\n\n').filter((section: string) => 
                          section.toLowerCase().includes(animal.name.toLowerCase()) ||
                          section.toLowerCase().includes('animal personality')
                        );
                        return animalSections.join('\n\n') || `As a ${animal.name}, you demonstrate ${animal.description.toLowerCase()}`;
                      }
                      return `As a ${animal.name}, you demonstrate ${animal.description.toLowerCase()}`;
                    })()}
                  </p>
                </div>
              </div>
            </div>

            {/* Core Traits */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">⭐</div>
                  <h3 className="text-2xl font-bold text-purple-400">Core Personality Traits</h3>
                </div>
                <div className="space-y-3">
                  {(() => {
                    const traits = [];
                    if (dScore >= 20) traits.push({ name: 'Dominance', description: 'Direct, results-oriented, and decisive', emoji: '🦅', color: 'red' });
                    if (iScore >= 20) traits.push({ name: 'Influence', description: 'Outgoing, enthusiastic, and optimistic', emoji: '🦚', color: 'yellow' });
                    if (sScore >= 20) traits.push({ name: 'Steadiness', description: 'Supportive, patient, and stable', emoji: '🐢', color: 'green' });
                    if (cScore >= 20) traits.push({ name: 'Conscientiousness', description: 'Analytical, precise, and systematic', emoji: '🦉', color: 'blue' });
                    
                    return traits.map((trait, index) => (
                      <div key={index} className="flex items-start gap-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-4 border border-purple-400/20">
                        <div className="text-2xl">{trait.emoji}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-1">{trait.name}</h4>
                          <p className="text-gray-300 text-sm">{trait.description}</p>
                        </div>
                      </div>
                    ));
                  })()}
                </div>
              </div>
            </div>

            {/* Communication Style */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">💬</div>
                  <h3 className="text-2xl font-bold text-cyan-400">Communication & Work Style</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-4 border border-cyan-400/20">
                    <h4 className="font-semibold text-white mb-2">Best Environment</h4>
                    <p className="text-gray-300 text-sm">
                      {primaryType === 'D' && 'Fast-paced, challenging, with opportunities to lead and make quick decisions.'}
                      {primaryType === 'I' && 'Collaborative, social, with variety and opportunities to interact with people.'}
                      {primaryType === 'S' && 'Stable, predictable, with clear processes and supportive team members.'}
                      {primaryType === 'C' && 'Organized, detail-oriented, with quality standards and time for analysis.'}
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-4 border border-cyan-400/20">
                    <h4 className="font-semibold text-white mb-2">Communication Preference</h4>
                    <p className="text-gray-300 text-sm">
                      {primaryType === 'D' && 'Direct, brief, focused on results and bottom-line impact.'}
                      {primaryType === 'I' && 'Friendly, expressive, with enthusiasm and personal connection.'}
                      {primaryType === 'S' && 'Patient, sincere, with empathy and consideration for others.'}
                      {primaryType === 'C' && 'Precise, logical, with data and thorough analysis.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Strengths in BPO */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">💼</div>
                  <h3 className="text-2xl font-bold text-green-400">Strengths in BPO Roles</h3>
                </div>
                <div className="space-y-3">
                  {(() => {
                    const bpoStrengths = {
                      'D': [
                        'Excellent at handling difficult customers and escalations',
                        'Strong performance under pressure and tight deadlines',
                        'Natural leadership in team settings',
                        'Quick problem-solving and decision-making'
                      ],
                      'I': [
                        'Outstanding customer relationship building',
                        'High energy and enthusiasm in interactions',
                        'Excellent team collaboration and morale boosting',
                        'Creative solutions to customer needs'
                      ],
                      'S': [
                        'Consistent, reliable performance over long periods',
                        'Patient listening and empathetic customer service',
                        'Strong team player who supports colleagues',
                        'Adaptable to routine processes and procedures'
                      ],
                      'C': [
                        'Exceptional attention to detail and accuracy',
                        'Thorough documentation and quality assurance',
                        'Analytical problem-solving with data',
                        'High compliance with procedures and standards'
                      ]
                    };
                    
                    const strengths = bpoStrengths[primaryType as keyof typeof bpoStrengths] || bpoStrengths['D'];
                    
                    return strengths.map((strength, index) => (
                      <div key={index} className="flex items-start gap-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-4 border border-green-400/20">
                        <div className="text-green-400 mt-1 text-xl">✓</div>
                        <p className="text-gray-200 flex-1">{strength}</p>
                      </div>
                    ));
                  })()}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
          <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">✨ Discover Your Personality</h2>
              <p className="text-gray-400 mb-6">
                What animal are you? Take the BPOC DISC assessment and find out!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/career-tools/games/disc-personality">
                  <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold px-8 py-6 text-lg">
                    Take DISC Assessment
                  </Button>
                </Link>
                <Link href={`/${username}`}>
                  <Button variant="outline" className="border-blue-400/30 text-blue-300 hover:bg-blue-500/10 px-8 py-6 text-lg">
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
          <p>Powered by <span className="text-blue-400 font-semibold">BPOC.IO</span> - Where BPO Careers Begin</p>
        </div>
      </div>
    </div>
  );
}

