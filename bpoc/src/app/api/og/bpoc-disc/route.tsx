import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import pool from '@/lib/database';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const username = searchParams.get('username');

    if (!username) {
      return new Response('Missing username parameter', { status: 400 });
    }

    // Fetch user data from database
    let profile: any = null;
    let discStats: any = null;
    
    try {
      const client = await pool.connect();
      try {
        // Get user info
        const userRes = await client.query(
          `SELECT u.id, u.first_name, u.username, u.avatar_url
           FROM users u
           WHERE u.slug = $1 OR u.username = $1
           LIMIT 1`,
          [username]
        );
        
        if (userRes.rowCount > 0) {
          profile = userRes.rows[0];
          
          // Get DISC personality stats
          const statsRes = await client.query(
            `SELECT latest_primary_type, latest_d_score, latest_i_score, latest_s_score, latest_c_score
             FROM disc_personality_stats
             WHERE user_id = $1
             LIMIT 1`,
            [profile.id]
          );
          
          if (statsRes.rowCount > 0) {
            discStats = statsRes.rows[0];
          }
        }
      } finally {
        client.release();
      }
    } catch (error) {
      console.error('Error fetching DISC data:', error);
    }

    const displayName = username;
    const avatarUrl = profile?.avatar_url || null;
    const primaryType = discStats?.latest_primary_type || 'D';
    const dScore = discStats?.latest_d_score || 0;
    const iScore = discStats?.latest_i_score || 0;
    const sScore = discStats?.latest_s_score || 0;
    const cScore = discStats?.latest_c_score || 0;

    // Get animal emoji and name based on primary type
    const getAnimalInfo = (type: string) => {
      switch (type) {
        case 'I':
          return { emoji: '🦚', name: 'PEACOCK', description: 'The Social Star' };
        case 'S':
          return { emoji: '🐢', name: 'TURTLE', description: 'The Steady Guardian' };
        case 'C':
          return { emoji: '🦉', name: 'OWL', description: 'The Wise Analyst' };
        default: // 'D'
          return { emoji: '🦅', name: 'EAGLE', description: 'The Sky Dominator' };
      }
    };

    const animalInfo = getAnimalInfo(primaryType);

    const imageResponse = new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#0f172a',
            backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)',
            position: 'relative',
            padding: '50px 40px 50px 10px',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          {/* Main Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              gap: '15px',
              alignItems: 'center',
            }}
          >
            {/* Left Side - Animal & User */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '33%',
              }}
            >
              {/* Animal Emoji */}
              <div
                style={{
                  fontSize: '140px',
                  marginBottom: '20px',
                  display: 'flex',
                }}
              >
                {animalInfo.emoji}
              </div>

              {/* Animal Name */}
              <div
                style={{
                  fontSize: '44px',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '10px',
                  display: 'flex',
                }}
              >
                {animalInfo.name}
              </div>

              {/* Description */}
              <div
                style={{
                  fontSize: '18px',
                  color: '#93C5FD',
                  marginBottom: '25px',
                  display: 'flex',
                  textAlign: 'center',
                }}
              >
                {animalInfo.description}
              </div>

              {/* Avatar & Username */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '15px',
                }}
              >
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    width="70"
                    height="70"
                    style={{
                      borderRadius: '50%',
                      border: '4px solid #3B82F6',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      border: '4px solid #3B82F6',
                      background: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '36px',
                        color: 'white',
                        fontWeight: 'bold',
                        display: 'flex',
                      }}
                    >
                      {displayName.charAt(0).toUpperCase()}
                    </div>
                  </div>
                )}
                <div
                  style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: '#93C5FD',
                    display: 'flex',
                  }}
                >
                  @{displayName}
                </div>
              </div>
            </div>

            {/* Right Side - DISC Scores */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '67%',
                gap: '20px',
              }}
            >
              <div
                style={{
                  fontSize: '36px',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '5px',
                  display: 'flex',
                }}
              >
                DISC Personality Profile
              </div>

              {/* D - Dominance */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: '28px',
                      fontWeight: 'bold',
                      color: '#EF4444',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <span style={{ display: 'flex' }}>🦅</span>
                    <span style={{ display: 'flex' }}>Dominance</span>
                  </div>
                  <div
                    style={{
                      fontSize: '32px',
                      fontWeight: 'bold',
                      color: primaryType === 'D' ? '#FCA5A5' : 'white',
                      display: 'flex',
                    }}
                  >
                    {dScore}%
                  </div>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '12px',
                    background: 'rgba(239, 68, 68, 0.2)',
                    borderRadius: '6px',
                    display: 'flex',
                  }}
                >
                  <div
                    style={{
                      width: `${dScore}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #EF4444 0%, #DC2626 100%)',
                      borderRadius: '6px',
                      display: 'flex',
                    }}
                  />
                </div>
              </div>

              {/* I - Influence */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: '28px',
                      fontWeight: 'bold',
                      color: '#FBBF24',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <span style={{ display: 'flex' }}>🦚</span>
                    <span style={{ display: 'flex' }}>Influence</span>
                  </div>
                  <div
                    style={{
                      fontSize: '32px',
                      fontWeight: 'bold',
                      color: primaryType === 'I' ? '#FDE68A' : 'white',
                      display: 'flex',
                    }}
                  >
                    {iScore}%
                  </div>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '12px',
                    background: 'rgba(251, 191, 36, 0.2)',
                    borderRadius: '6px',
                    display: 'flex',
                  }}
                >
                  <div
                    style={{
                      width: `${iScore}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #FBBF24 0%, #F59E0B 100%)',
                      borderRadius: '6px',
                      display: 'flex',
                    }}
                  />
                </div>
              </div>

              {/* S - Steadiness */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: '28px',
                      fontWeight: 'bold',
                      color: '#10B981',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <span style={{ display: 'flex' }}>🐢</span>
                    <span style={{ display: 'flex' }}>Steadiness</span>
                  </div>
                  <div
                    style={{
                      fontSize: '32px',
                      fontWeight: 'bold',
                      color: primaryType === 'S' ? '#6EE7B7' : 'white',
                      display: 'flex',
                    }}
                  >
                    {sScore}%
                  </div>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '12px',
                    background: 'rgba(16, 185, 129, 0.2)',
                    borderRadius: '6px',
                    display: 'flex',
                  }}
                >
                  <div
                    style={{
                      width: `${sScore}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #10B981 0%, #059669 100%)',
                      borderRadius: '6px',
                      display: 'flex',
                    }}
                  />
                </div>
              </div>

              {/* C - Conscientiousness */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: '28px',
                      fontWeight: 'bold',
                      color: '#3B82F6',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <span style={{ display: 'flex' }}>🦉</span>
                    <span style={{ display: 'flex' }}>Conscientiousness</span>
                  </div>
                  <div
                    style={{
                      fontSize: '32px',
                      fontWeight: 'bold',
                      color: primaryType === 'C' ? '#93C5FD' : 'white',
                      display: 'flex',
                    }}
                  >
                    {cScore}%
                  </div>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '12px',
                    background: 'rgba(59, 130, 246, 0.2)',
                    borderRadius: '6px',
                    display: 'flex',
                  }}
                >
                  <div
                    style={{
                      width: `${cScore}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #3B82F6 0%, #2563EB 100%)',
                      borderRadius: '6px',
                      display: 'flex',
                    }}
                  />
                </div>
              </div>

              {/* Bottom CTA */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: '15px',
                  gap: '8px',
                }}
              >
                <div
                  style={{
                    fontSize: '20px',
                    color: '#93C5FD',
                    display: 'flex',
                  }}
                >
                  Discover Your Personality on
                </div>
                <div
                  style={{
                    fontSize: '34px',
                    fontWeight: 'bold',
                    color: '#3B82F6',
                    display: 'flex',
                    letterSpacing: '2px',
                  }}
                >
                  BPOC.IO
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        headers: {
          'Content-Type': 'image/png',
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      }
    );

    return imageResponse;
  } catch (error) {
    console.error('Error generating BPOC DISC OG image:', error);
    return new Response('Error generating image', { status: 500 });
  }
}

