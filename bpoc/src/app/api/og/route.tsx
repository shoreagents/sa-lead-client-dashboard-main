import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import pool from '@/lib/database';

// Use Node.js runtime to access database
export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const username = searchParams.get('username');

    if (!username) {
      return new Response('Missing username parameter', { status: 400 });
    }

    // Fetch user data directly from database
    let profile: any = null;
    try {
      const client = await pool.connect();
      try {
        const res = await client.query(
          `SELECT u.id, u.email, u.first_name, u.last_name, u.full_name, u.location, u.avatar_url, u.position, u.location_city, u.location_country,
           aar.overall_score as resume_score
           FROM users u
           LEFT JOIN ai_analysis_results aar ON u.id = aar.user_id
           WHERE u.slug = $1 OR u.username = $1
           LIMIT 1`,
          [username]
        );
        
        if (res.rowCount && res.rowCount > 0) {
          profile = res.rows[0];
        }
      } finally {
        client.release();
      }
    } catch (error) {
      console.error('Error fetching user data from database:', error);
    }

    // Default values if profile not found
    const displayName = username;
    const title = profile?.position || 'BPO Professional';
    const location = profile?.location || 
      (profile?.location_city 
        ? `${profile.location_city}${profile?.location_country ? ', ' + profile.location_country : ''}`
        : null);
        
    // Ensure high-quality avatar if it's from Supabase or Vercel Blob
    let avatarUrl = profile?.avatar_url || null;
    
    // Aggressive quality fix: remove any existing sizing params first
    if (avatarUrl) {
       // Remove existing query params if any to get the original raw image
       // This often returns the full resolution original upload
       const urlObj = new URL(avatarUrl);
       urlObj.search = ''; 
       avatarUrl = urlObj.toString();
    }

    const resumeScore = profile?.resume_score || null;

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

          <div
            style={{
              display: 'flex',
              flex: 1,
              padding: '50px',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
              zIndex: 10,
            }}
          >
            {/* Left: Identity Block */}
            <div style={{ display: 'flex', flexDirection: 'column', width: '62%', justifyContent: 'center', alignItems: 'flex-start' }}>
              
              {/* Glowing Brand Tag */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 40,
                  background: 'rgba(14, 165, 233, 0.1)',
                  border: '1px solid rgba(14, 165, 233, 0.3)',
                  padding: '10px 24px',
                  borderRadius: '50px',
                  width: 'auto',
                  zIndex: 10,
                  boxShadow: '0 0 20px rgba(14, 165, 233, 0.15)',
                }}
              >
                {/* Logo SVG with Gradient */}
                <svg width="32" height="32" viewBox="0 0 855.66 945.08" style={{ marginRight: 12, display: 'flex' }}>
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#34d399" />
                    </linearGradient>
                  </defs>
                  <g>
                    <path fill="url(#logoGradient)" d="M259.99,169.64l233.46,159.55,78.43-43.67L270.12,80.57l-84.73,50.6s-.68,9.66-1.14,40.07v158.93l74.67-44.27,1.07-116.27Z"/>
                    <path fill="url(#logoGradient)" d="M600.81,773.58l-233.46-159.55-78.43,43.67,301.76,204.95,84.73-50.6s.68-9.66,1.14-40.07v-158.93l-74.67,44.27-1.07,116.27Z"/>
                    <path fill="url(#logoGradient)" d="M23.19,322.71v296c0,27.2,11.73,36.8,11.73,36.8l62.93,45.33v-345.6c0-8,6.93-13.33,6.93-13.33l40-28.27v-93.33s-90.04,63.06-105.07,73.6c-16.53,11.6-16.53,28.8-16.53,28.8Z"/>
                    <path fill="url(#logoGradient)" d="M820.26,281.44l-62.93-45.33v345.6c0,8-6.93,13.33-6.93,13.33l-40,28.27v93.33s90.04-63.06,105.07-73.6c16.53-11.6,16.53-28.8,16.53-28.8v-296c0-27.2-11.73-36.8-11.73-36.8Z"/>
                    <path fill="url(#logoGradient)" d="M712.79,205.37L456.79,26.71s-15.47-9.6-39.47,2.67c-24,12.27-100.27,51.2-100.27,51.2l278.4,189.33,117.33-64.53Z"/>
                    <path fill="url(#logoGradient)" d="M148.01,737.87l256,178.67s15.47,9.6,39.47-2.67c24-12.27,100.27-51.2,100.27-51.2l-278.4-189.33-117.33,64.53Z"/>
                    <path fill="url(#logoGradient)" d="M264.12,503.77v-21.2s-2.5-9.7-11.6-13c0,0,7.6-7.4,7.6-15v-12.8s-6.6-19.6-22-19.6c-9.2,0-60.2.2-60,0v23.6h53.6s4.2,2.13,4.2,7-2.4,7.8-4.2,7.8h-53.6v65h63.8s22.2-10.8,22.2-21.8ZM236.26,500.57h-32.67v-16.13c-.2.2,32.53,0,32.53,0,0,0,3.87,2,3.87,8.07s-3.73,8.07-3.73,8.07Z"/>
                    <path fill="url(#logoGradient)" d="M276.26,460.57v65h25.33v-30.6h28s35.2-4.53,35.2-37.6-32.8-35.2-32.8-35.2h-55.73s-.4,22.8,0,23.2h54.13s8.27,4.27,8.27,13.07-8.53,11.47-8.53,11.47h-29.07v-9.33h-24.8Z"/>
                    <path fill="url(#logoGradient)" d="M369.06,473.51c0,29.01,23.52,52.53,52.53,52.53s52.53-23.52,52.53-52.53-23.52-52.53-52.53-52.53-52.53,23.52-52.53,52.53ZM450.12,473.77c0,15.91-12.89,28.8-28.8,28.8s-28.8-12.89-28.8-28.8,12.89-28.8,28.8-28.8,28.8,12.89,28.8,28.8Z"/>
                    <path fill="url(#logoGradient)" d="M658.86,463.71c-17.34,0-31.4,14.06-31.4,31.4s14.06,31.4,31.4,31.4,31.4-14.06,31.4-31.4-14.06-31.4-31.4-31.4ZM658.92,511.97c-9.83,0-17.8-7.97-17.8-17.8s7.97-17.8,17.8-17.8,17.8,7.97,17.8,17.8-7.97,17.8-17.8,17.8Z"/>
                    <circle fill="url(#logoGradient)" cx="587.32" cy="516.41" r="10.03"/>
                    <circle fill="url(#logoGradient)" cx="612.52" cy="450.81" r="9.27"/>
                    <path fill="url(#logoGradient)" d="M604.12,524.77h16v-61.07h-16c0-.2,0,61.07,0,61.07Z"/>
                    <path fill="url(#logoGradient)" d="M533.59,444.6c9.2,0,14.63,3.58,17.87,6.21,3.98,3.23,5.87,1.23,5.87,1.23l12.8-15.2c1.73-1.73-.93-3.6-.93-3.6,0,0-18.13-13.6-36.27-13.6s-52.67,16.4-52.67,53.87,32.93,52.93,54.67,52.93,25.87-5.73,31.33-9.2,4.67-6.13,4.67-6.13c0,0-12.27-12.67-15.07-14.8-2.8-2.13-4.67.27-4.67.27,0,0-4.53,6.13-17.73,6.13s-27.07-9.2-27.07-30.53,18-27.57,27.2-27.57Z"/>
                    <path fill="url(#logoGradient)" d="M164.03,363.25c1.15.89,2.54,1.44,4.5,1.44,4.6,0,12.29-3.08,27.13-12.14,27.55-16.83,74.65-47.18,78.28-49.52,3.27-1.75,9.73-8.46,9.73-33.94v-65.6l-10-6.27v71.87c0,19.92-4.25,24.77-4.78,25.3-.05.03-.1.06-.16.1-.5.32-49.88,32.17-78.3,49.53-10.18,6.22-15.81,8.82-18.79,9.91v-179.24c0-41.16,7.34-51.48,8.43-52.79l67.94-40.44-7.74-7.03-65.79,39.16c-.1.06-.19.12-.29.19-2.1,1.45-12.55,11.21-12.55,60.91v182.78c-.23,1.93.38,4.25,2.38,5.79Z"/>
                    <path fill="url(#logoGradient)" d="M445.94,932.71c-19.53,6.17-44.12-1.55-48.19-2.93-16.11-11.32-351.14-246.81-370.96-262.25-18.12-14.12-16.77-39.08-16.75-39.32,0-.11.01-.23.01-.34v-286.4c0-38.58,9.78-47.86,10.35-48.36l124.92-87.53v-12.21L14.64,284.94c-1.49,1.01-14.6,11.2-14.6,56.54v286.25c-.15,2.81-1.1,30.79,20.59,47.69,20.4,15.89,357.59,252.87,371.93,262.95.36.25.75.45,1.16.6.91.33,16.98,6.11,35.16,6.11,6.62,0,13.52-.76,20.06-2.83,37.35-11.81,117.56-59.25,120.79-61.17l-9.25-6.07c-.78.46-78.3,46.24-114.56,57.7ZM20.32,293.17l.06-.04c-.08.06-.12.08-.06.04Z"/>
                    <path fill="url(#logoGradient)" d="M855.65,617.34c0-2.67-.4-267.43,0-301.8.41-35.44-16.3-47.51-18.61-49.01-15.06-10.69-335.13-237.68-357.85-252.07-31.36-19.87-50.22-13.57-51.01-13.29-.2.07-.39.15-.58.25l-134.5,67.66,9.94,6.19L431.69,10.55c2.05-.52,17.16-3.49,42.15,12.35,22.56,14.29,354.17,249.48,357.52,251.85.11.08.16.12.28.18.59.37,14.37,9.45,14.01,40.48-.4,34.43,0,299.26,0,301.98,0,.22.05,21.61-15.82,31.73-18.3,11.67-116.31,81.41-120.48,84.37l5.8,8.15c1.02-.72,101.97-72.55,120.06-84.09,20.51-13.08,20.46-39.17,20.44-40.22Z"/>
                    <path fill="url(#logoGradient)" d="M697.62,604.61c0-5.45-.6-13.01-5.76-15.78-2.94-1.58-6.03-.83-7.86.32-2.72,1.6-75.37,44.5-88.69,52.35-15.42,9.09-18.32,26.39-18.43,27.13-.04.26-.06.52-.06.78v76l10,6.87v-82.4c.44-2.1,3.29-13.7,13.57-19.76,12.25-7.22,74.74-44.12,86.76-51.22.24,1.12.46,2.92.46,5.71v223.6c0,.29-.03.24,0,.42-.08.89-1.03,6.96-13.01,13.61-17.87,9.92-58.6,33.77-58.96,33.99l9.1,6.29c.37-.22,36.96-21.68,54.72-31.54,17.65-9.8,18.26-20.48,18.15-22.92v-223.46Z"/>
                    <path fill="url(#logoGradient)" d="M333.51,610.38l-9.05-6.18-161.83,94.14c-1.59.42-4.58.74-5.94-.24-1.09-.78-1.32-2.79-1.32-4.34v-38.98c10.73-1.95,18.87-11.33,18.87-22.62,0-12.7-10.3-23-23-23s-23,10.3-23,23c0,10.67,7.27,19.65,17.13,22.24v39.36c0,7.05,2.98,10.67,5.48,12.46,2.73,1.96,5.89,2.53,8.65,2.53,3.43,0,6.22-.88,6.73-1.05.32-.11.63-.25.92-.42l166.4-96.8-.05-.09ZM138.25,632.15c0-7.17,5.83-13,13-13s13,5.83,13,13-5.83,13-13,13-13-5.83-13-13Z"/>
                    <path fill="url(#logoGradient)" d="M715.92,296.04v-39.36c0-7.05-2.98-10.67-5.48-12.46-2.73-1.96-5.89-2.53-8.65-2.53-3.43,0-6.22.88-6.73,1.05-.32.11-.63.25-.92.42l-166.4,96.8.05.09,9.05,6.18,161.83-94.14c1.59-.42,4.58-.74,5.94.24,1.09.78,1.32,2.79,1.32,4.34v38.98c-10.73,1.95-18.87,11.33-18.87,22.62,0,12.7,10.3,23,23,23s23-10.3,23-23c0-10.67-7.27-19.65-17.13-22.24ZM710.05,331.28c-7.17,0-13-5.83-13-13s5.83-13,13-13,13,5.83,13,13-5.83,13-13,13Z"/>
                  </g>
                </svg>
                <div style={{ color: '#38bdf8', fontSize: 24, fontWeight: 800, letterSpacing: '1px', display: 'flex' }}>BPOC.IO</div>
                <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.2)', margin: '0 15px', display: 'flex' }} />
                <div style={{ color: '#e0f2fe', fontSize: 20, fontWeight: 500, display: 'flex' }}>Where BPO Careers Begin</div>
              </div>

              {/* Name - Massive & Bright */}
              <div
                style={{
                  fontSize: 84,
                  fontWeight: 900,
                  color: '#ffffff',
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  marginBottom: 20,
                  display: 'flex',
                  textShadow: '0 4px 30px rgba(0,0,0,0.8)',
                }}
              >
                {displayName}
              </div>

              {/* Role - Gradient Text */}
              <div
                style={{
                  fontSize: 42,
                  fontWeight: 700,
                  background: 'linear-gradient(90deg, #38bdf8, #c084fc, #34d399)',
                  backgroundClip: 'text',
                  color: 'transparent',
                  display: 'flex',
                  marginBottom: 30,
                  letterSpacing: '-0.01em',
                }}
              >
                {title}
              </div>

              {/* Location with Icon */}
              {location && (
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 50 }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.1)',
                      marginRight: 12,
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div style={{ color: '#e2e8f0', fontSize: 26, fontWeight: 500, display: 'flex' }}>{location}</div>
                </div>
              )}

              {/* High Contrast CTA Button */}
              <div
                style={{
                  background: 'white',
                  padding: '20px 40px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  width: 'auto',
                  boxShadow: '0 0 40px rgba(14, 165, 233, 0.2)',
                }}
              >
                <div style={{ color: 'black', fontSize: 28, fontWeight: 800, marginRight: 10, display: 'flex' }}>Join {displayName.split(' ')[0]}</div>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>

            {/* Right: Avatar Spotlight */}
            <div style={{ display: 'flex', width: '38%', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
              {/* Concentric Glow Rings */}
              <div
                style={{
                  position: 'absolute',
                  width: '420px',
                  height: '420px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)',
                  border: '1px solid rgba(14, 165, 233, 0.1)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  width: '340px',
                  height: '340px',
                  borderRadius: '50%',
                  border: '1px solid rgba(168, 85, 247, 0.2)',
                  animation: 'spin 10s linear infinite',
                }}
              />

              {/* Avatar Image - Using standard img for consistent rendering */}
              <div
                style={{
                  display: 'flex',
                  width: '252px', // Container size
                  height: '252px',
                  padding: '6px',
                  background: 'linear-gradient(135deg, #0ea5e9, #a855f7)',
                  borderRadius: '50%',
                  boxShadow: '0 0 50px rgba(14, 165, 233, 0.3)',
                  overflow: 'hidden',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {avatarUrl ? (
                  /* using img tag with explicit dimensions and object-fit to prevent tiling/collage effect */
                  <img
                    src={avatarUrl}
                    width="240"
                    height="240"
                    style={{
                      borderRadius: '50%',
                      objectFit: 'cover',
                      backgroundColor: '#000',
                      border: '4px solid #000',
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: '240px',
                      height: '240px',
                      borderRadius: '50%',
                      backgroundColor: '#000',
                      border: '4px solid #000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #111, #222)',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '96px',
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
    console.error('Error generating OG image:', error);
    return new Response('Error generating image', { status: 500 });
  }
}
