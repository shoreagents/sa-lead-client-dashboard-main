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
    // Aggressive quality fix: remove any existing sizing params first for avatar
    let avatarUrl = profile?.avatar_url || null;
    if (avatarUrl) {
       const urlObj = new URL(avatarUrl);
       urlObj.search = ''; 
       avatarUrl = urlObj.toString();
    }

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
            backgroundColor: '#000000',
            backgroundImage: `
              radial-gradient(circle at 100% 0%, rgba(168, 85, 247, 0.2) 0%, transparent 40%),
              radial-gradient(circle at 0% 100%, rgba(14, 165, 233, 0.2) 0%, transparent 40%)
            `,
            position: 'relative',
            fontFamily: '"Inter", sans-serif',
            padding: '40px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* High Contrast Cyber Grid */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
              width: '100%',
              height: '100%',
            }}
          />

          {/* Main Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              width: '100%',
              position: 'relative',
              zIndex: 10,
            }}
          >
             {/* Glowing Brand Tag - Top Centered */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '30px',
                background: 'rgba(14, 165, 233, 0.1)',
                border: '1px solid rgba(14, 165, 233, 0.3)',
                padding: '10px 24px',
                borderRadius: '50px',
                width: 'auto',
                boxShadow: '0 0 20px rgba(14, 165, 233, 0.15)',
              }}
            >
              {/* Logo SVG with Gradient */}
              <svg width="32" height="32" viewBox="0 0 1242.1 1223.6" style={{ marginRight: 12, display: 'flex' }}>
                <defs>
                  <linearGradient id="logoGradientTyping" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#34d399" />
                  </linearGradient>
                </defs>
                <path fill="url(#logoGradientTyping)" d="M226.42,485.24s78.8-350.4,437.6-350.4c0,0,328.4-19.2,440,320.4,0,0-80.4-330-438.8-338.4-385.52-9.04-464.8,368.4-464.8,368.4"/>
                <rect fill="url(#logoGradientTyping)" x="138.09" y="485.24" width="140.8" height="226.6" rx="54.4" ry="54.4"/>
                <rect fill="url(#logoGradientTyping)" x="632.05" y="982.21" width="74.4" height="175.02" rx="37.2" ry="37.2" transform="translate(-400.48 1738.97) rotate(-90)"/>
                <path fill="url(#logoGradientTyping)" d="M231.82,706.64s19.47,127.47,140.27,233.87,240,103.2,240,103.2v39.2s-192-19.2-296-148c-34.31-42.49-62.89-82.41-80-116-34.76-68.23-38.8-112-38.8-112l34.53-.27Z"/>
                <path fill="url(#logoGradientTyping)" d="M489.15,393.97h87.73v-55.73s74.13-18.4,134.93-6.13,220.4,80.13,220.4,263.33-155.2,272.8-262.4,272.8-309.6-83.4-261.6-345h261.6s68-.6,68,85-76.8,77.6-76.8,77.6c0,0-84,6.2-84-87.3,0-29.5-.8-39.1-.8-39.1h-88.8v72s6,144.8,172.8,144.8c147.2,0,168.8-116.35,168.8-178.17s-63.2-165.83-156-165.83h-322.4s-38.8,58.47-38.8,166.3,74.45,359.03,357.43,359.03,351.37-240.47,351.37-359.03-90-357.37-310.8-357.37-220.8,39.6-220.8,39.6c0,0-.93,113.2.13,113.2Z"/>
              </svg>
              <div style={{ color: '#38bdf8', fontSize: 24, fontWeight: 800, letterSpacing: '1px', display: 'flex' }}>BPOC.IO</div>
            </div>

            {/* Challenge Text */}
            <div
              style={{
                fontSize: '56px',
                fontWeight: 900,
                color: '#ffffff',
                marginBottom: '30px',
                display: 'flex',
                textAlign: 'center',
                textShadow: '0 4px 20px rgba(0,0,0,0.8)',
                letterSpacing: '-0.02em',
              }}
            >
              Can You Beat My Typing Speed?
            </div>

            {/* WPM Stats Card */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(14, 165, 233, 0.2)',
                borderRadius: '24px',
                padding: '40px 70px',
                marginBottom: '20px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Avatar & Username */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '35px',
                  gap: '20px',
                }}
              >
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    width="90"
                    height="90"
                    style={{
                      borderRadius: '50%',
                      border: '3px solid #38bdf8',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: '90px',
                      height: '90px',
                      borderRadius: '50%',
                      border: '3px solid #38bdf8',
                      background: 'linear-gradient(135deg, #111, #222)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '44px',
                        fontWeight: 900,
                         background: 'linear-gradient(135deg, #fff, #aaa)',
                        backgroundClip: 'text',
                        color: 'transparent',
                        display: 'flex',
                      }}
                    >
                      {displayName.charAt(0).toUpperCase()}
                    </div>
                  </div>
                )}
                <div
                  style={{
                    fontSize: '38px',
                    fontWeight: 800,
                    color: '#e0f2fe',
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
                  gap: '60px',
                  justifyContent: 'center',
                }}
              >
                {/* Best WPM - Highlighted */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: '28px',
                      marginBottom: '10px',
                      display: 'flex',
                    }}
                  >
                    🏆
                  </div>
                  <div
                    style={{
                      fontSize: '72px',
                      fontWeight: 900,
                      background: 'linear-gradient(135deg, #22d3ee, #34d399)',
                      backgroundClip: 'text',
                      color: 'transparent',
                      display: 'flex',
                      lineHeight: 1,
                    }}
                  >
                    {bestWpm}
                  </div>
                  <div
                    style={{
                      fontSize: '22px',
                      color: '#bae6fd',
                      marginTop: '10px',
                      display: 'flex',
                      fontWeight: 600,
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
                      fontSize: '28px',
                      marginBottom: '10px',
                      display: 'flex',
                    }}
                  >
                    ⚡
                  </div>
                  <div
                    style={{
                      fontSize: '72px',
                      fontWeight: 900,
                      color: '#a855f7',
                      display: 'flex',
                      lineHeight: 1,
                    }}
                  >
                    {latestWpm}
                  </div>
                  <div
                    style={{
                      fontSize: '22px',
                      color: '#e9d5ff',
                      marginTop: '10px',
                      display: 'flex',
                      fontWeight: 600,
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
                      fontSize: '28px',
                      marginBottom: '10px',
                      display: 'flex',
                    }}
                  >
                    📊
                  </div>
                  <div
                    style={{
                      fontSize: '72px',
                      fontWeight: 900,
                      color: '#94a3b8',
                      display: 'flex',
                      lineHeight: 1,
                    }}
                  >
                    {Math.round(avgWpm)}
                  </div>
                  <div
                    style={{
                      fontSize: '22px',
                      color: '#cbd5e1',
                      marginTop: '10px',
                      display: 'flex',
                      fontWeight: 600,
                    }}
                  >
                    Avg WPM
                  </div>
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
    console.error('Error generating Typing Hero OG image:', error);
    return new Response('Error generating image', { status: 500 });
  }
}
