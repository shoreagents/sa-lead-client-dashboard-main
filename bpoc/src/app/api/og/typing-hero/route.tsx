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
    let typingStats: any = null;
    
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
          
          // Get typing hero stats
          const statsRes = await client.query(
            `SELECT best_wpm, latest_wpm, avg_wpm
             FROM typing_hero_stats
             WHERE user_id = $1
             LIMIT 1`,
            [profile.id]
          );
          
          if (statsRes.rowCount > 0) {
            typingStats = statsRes.rows[0];
          }
        }
      } finally {
        client.release();
      }
    } catch (error) {
      console.error('Error fetching typing hero data:', error);
    }

    const displayName = username;
    const avatarUrl = profile?.avatar_url || null;
    const bestWpm = typingStats?.best_wpm || 0;
    const latestWpm = typingStats?.latest_wpm || 0;
    const avgWpm = typingStats?.avg_wpm || 0;

    const imageResponse = new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#0f172a',
            backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)',
            position: 'relative',
            padding: '25px 50px 60px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Main Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              width: '100%',
            }}
          >
            {/* Keyboard Emoji */}
            <div
              style={{
                fontSize: '90px',
                marginBottom: '15px',
                display: 'flex',
              }}
            >
              ⌨️
            </div>

            {/* Challenge Text */}
            <div
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '25px',
                display: 'flex',
                textAlign: 'center',
              }}
            >
              Can You Beat My WPM?
            </div>

            {/* WPM Stats Card */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(34, 197, 94, 0.1)',
                border: '3px solid rgba(34, 197, 94, 0.5)',
                borderRadius: '24px',
                padding: '30px 60px',
                marginBottom: '20px',
                boxShadow: '0 20px 60px rgba(34, 197, 94, 0.3)',
              }}
            >
              {/* Avatar & Username */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '25px',
                  gap: '15px',
                }}
              >
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    width="80"
                    height="80"
                    style={{
                      borderRadius: '50%',
                      border: '4px solid #22C55E',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      border: '4px solid #22C55E',
                      background: 'linear-gradient(135deg, #22C55E 0%, #10B981 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '40px',
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
                    fontSize: '32px',
                    fontWeight: 'bold',
                    color: '#86EFAC',
                    display: 'flex',
                  }}
                >
                  @{displayName}
                </div>
              </div>

              {/* WPM Scores */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '40px',
                  justifyContent: 'center',
                }}
              >
                {/* Best WPM */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: '24px',
                      marginBottom: '8px',
                      display: 'flex',
                    }}
                  >
                    🏆
                  </div>
                  <div
                    style={{
                      fontSize: '60px',
                      fontWeight: 'bold',
                      color: '#22C55E',
                      display: 'flex',
                      lineHeight: 1,
                    }}
                  >
                    {bestWpm}
                  </div>
                  <div
                    style={{
                      fontSize: '20px',
                      color: '#86EFAC',
                      marginTop: '8px',
                      display: 'flex',
                    }}
                  >
                    Best WPM
                  </div>
                </div>

                {/* Latest WPM */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: '24px',
                      marginBottom: '8px',
                      display: 'flex',
                    }}
                  >
                    ⚡
                  </div>
                  <div
                    style={{
                      fontSize: '60px',
                      fontWeight: 'bold',
                      color: '#3B82F6',
                      display: 'flex',
                      lineHeight: 1,
                    }}
                  >
                    {latestWpm}
                  </div>
                  <div
                    style={{
                      fontSize: '20px',
                      color: '#93C5FD',
                      marginTop: '8px',
                      display: 'flex',
                    }}
                  >
                    Latest WPM
                  </div>
                </div>

                {/* Average WPM */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: '24px',
                      marginBottom: '8px',
                      display: 'flex',
                    }}
                  >
                    📊
                  </div>
                  <div
                    style={{
                      fontSize: '60px',
                      fontWeight: 'bold',
                      color: '#A855F7',
                      display: 'flex',
                      lineHeight: 1,
                    }}
                  >
                    {Math.round(avgWpm)}
                  </div>
                  <div
                    style={{
                      fontSize: '20px',
                      color: '#D8B4FE',
                      marginTop: '8px',
                      display: 'flex',
                    }}
                  >
                    Avg WPM
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#86EFAC',
                  display: 'flex',
                }}
              >
                Test Your Typing Speed on
              </div>
              <div
                style={{
                  fontSize: '38px',
                  fontWeight: 'bold',
                  color: '#22C55E',
                  display: 'flex',
                  letterSpacing: '1px',
                }}
              >
                BPOC.IO
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
    console.error('Error generating Typing Hero OG image:', error);
    return new Response('Error generating image', { status: 500 });
  }
}

