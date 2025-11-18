import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import pool from '@/lib/database';

// Use Node.js runtime to access database
export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get('userId');
    const personalityType = searchParams.get('type'); // D, I, S, or C
    const animal = searchParams.get('animal'); // Eagle, Peacock, Turtle, or Owl
    const title = searchParams.get('title') || 'BPO Professional';

    if (!userId || !personalityType) {
      return new Response('Missing required parameters', { status: 400 });
    }

    // Fetch user data
    let user: any = null;
    try {
      const client = await pool.connect();
      try {
        const res = await client.query(
          `SELECT 
            u.id, u.full_name, u.avatar_url, u.position, u.location,
            u.location_city, u.location_country, u.slug as user_slug, u.username
           FROM users u
           WHERE u.id = $1
           LIMIT 1`,
          [userId]
        );
        
        if (res.rowCount > 0) {
          user = res.rows[0];
        }
      } finally {
        client.release();
      }
    } catch (error) {
      console.error('Error fetching user data from database:', error);
    }

    // Animal emoji mapping
    const animalEmoji: { [key: string]: string } = {
      'Eagle': '🦅',
      'Peacock': '🦚',
      'Turtle': '🐢',
      'Owl': '🦉',
      'D': '🦅',
      'I': '🦚',
      'S': '🐢',
      'C': '🦉'
    };

    // Personality type titles
    const personalityTitles: { [key: string]: string } = {
      'D': 'The Sky Dominator',
      'I': 'The Social Star',
      'S': 'The Steady Guardian',
      'C': 'The Wise Analyst'
    };

    const displayName = user?.username || user?.user_slug || user?.full_name || 'Professional';
    const firstName = user?.full_name?.split(' ')[0] || displayName?.split(' ')[0] || 'Professional';
    const userTitle = user?.position || title;
    const location = user?.location || 
      (user?.location_city 
        ? `${user.location_city}${user?.location_country ? ', ' + user.location_country : ''}`
        : null);
    const avatarUrl = user?.avatar_url || null;
    const animalName = animal || (personalityType === 'D' ? 'Eagle' : personalityType === 'I' ? 'Peacock' : personalityType === 'S' ? 'Turtle' : 'Owl');
    const animalEmojiDisplay = animalEmoji[animalName] || animalEmoji[personalityType] || '🎯';
    const personalityTitle = personalityTitles[personalityType] || 'BPO Professional';

    const imageResponse = new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#0f172a',
            backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(6, 182, 212, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
          }}
        >
          {/* Left Column - User Info & Animal/Personality */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '60%',
              padding: '50px',
            }}
          >
            {/* User Info Section - Top Left */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginBottom: '40px',
              }}
            >
              {avatarUrl && (
                <img
                  src={avatarUrl}
                  width="100"
                  height="100"
                  style={{
                    borderRadius: '50%',
                    border: '4px solid #06B6D4',
                    objectFit: 'cover',
                    marginRight: '20px',
                  }}
                />
              )}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: 8,
                  }}
                >
                  @{displayName}
                </div>
                {location && (
                  <div
                    style={{
                      fontSize: 20,
                      color: '#67E8F9',
                      marginBottom: 8,
                    }}
                  >
                    {location}
                  </div>
                )}
                {userTitle && (
                  <div
                    style={{
                      fontSize: 22,
                      color: 'white',
                      fontWeight: '600',
                    }}
                  >
                    {userTitle}
                  </div>
                )}
              </div>
            </div>

            {/* Animal & Personality Info - Below User Info */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: '20px',
              }}
            >
              <div
                style={{
                  fontSize: '120px',
                  marginRight: '30px',
                }}
              >
                {animalEmojiDisplay}
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    fontSize: 48,
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: 8,
                  }}
                >
                  {personalityTitle}
                </div>
                <div
                  style={{
                    fontSize: 32,
                    color: '#67E8F9',
                  }}
                >
                  {animalName} Personality
                </div>
              </div>
            </div>

            {/* BPOC Logo - Bottom Left */}
            <div
              style={{
                marginTop: 'auto',
                fontSize: 40,
                fontWeight: 'bold',
                letterSpacing: '2px',
                color: '#06B6D4',
              }}
            >
              BPOC.IO
            </div>
          </div>

          {/* Vertical Separator */}
          <div
            style={{
              width: '2px',
              backgroundColor: 'rgba(6, 182, 212, 0.4)',
            }}
          />

          {/* Right Column - CTA */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '40%',
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%)',
              padding: '60px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: 44,
                  fontWeight: 'bold',
                  color: 'white',
                  lineHeight: 1.2,
                  marginBottom: 10,
                }}
              >
                Discover Your
              </div>
              <div
                style={{
                  fontSize: 44,
                  fontWeight: 'bold',
                  color: 'white',
                  lineHeight: 1.2,
                  marginBottom: 20,
                }}
              >
                BPO Animal Spirit!
              </div>

              <div
                style={{
                  fontSize: 22,
                  color: '#67E8F9',
                  marginTop: 20,
                  lineHeight: 1.5,
                  marginBottom: 20,
                }}
              >
                Take the BPOC DISC Personality Assessment
              </div>

              {/* CTA Button */}
              <div
                style={{
                  marginTop: 30,
                  background: 'linear-gradient(135deg, #06B6D4 0%, #A855F7 100%)',
                  borderRadius: '12px',
                  padding: '20px 50px',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 10px 30px rgba(6, 182, 212, 0.5)',
                }}
              >
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 'bold',
                    color: 'white',
                  }}
                >
                  Sign Up Now
                </div>
              </div>

              <div
                style={{
                  fontSize: 20,
                  color: '#94A3B8',
                  marginTop: 30,
                }}
              >
                Where BPO Careers Begin
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
          'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      }
    );

    return imageResponse;
  } catch (error) {
    console.error('Error generating DISC results OG image:', error);
    return new Response('Error generating image', { status: 500 });
  }
}

