import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

// Helper function to get Chromium executable path
async function getChromiumPath(): Promise<string | null> {
  try {
    // Try to use Puppeteer's bundled Chromium first
    const puppeteerChromiumPath = puppeteer.executablePath();
    if (puppeteerChromiumPath && fs.existsSync(puppeteerChromiumPath)) {
      console.log('✅ Using Puppeteer bundled Chromium:', puppeteerChromiumPath);
      return puppeteerChromiumPath;
    }
  } catch (e) {
    console.warn('⚠️ Puppeteer bundled Chromium not found, trying alternatives...');
  }

  // Try environment variable
  if (process.env.CHROME_PATH && fs.existsSync(process.env.CHROME_PATH)) {
    console.log('✅ Using CHROME_PATH:', process.env.CHROME_PATH);
    return process.env.CHROME_PATH;
  }

  // Try common system locations
  const commonPaths = [
    // Windows
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    // Linux
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    // macOS
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ];

  for (const chromePath of commonPaths) {
    if (fs.existsSync(chromePath)) {
      console.log('✅ Using system Chrome:', chromePath);
      return chromePath;
    }
  }

  // For serverless environments, Chromium should be installed during build
  // Check if we're in a serverless environment and provide helpful error
  if (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME || process.env.NETLIFY) {
    console.warn('⚠️ Serverless environment detected. Chromium must be installed during build.');
    console.warn('⚠️ Make sure your build script includes: npx puppeteer browsers install chrome');
  }

  return null;
}

export async function POST(request: NextRequest) {
  let browser;
  
  try {
    const { html, fileName } = await request.json();

    if (!html) {
      return NextResponse.json(
        { error: 'HTML content is required' },
        { status: 400 }
      );
    }

    console.log('🚀 Starting Puppeteer PDF generation...');
    console.log('📝 HTML length:', html.length, 'characters');
    console.log('📄 Filename:', fileName || 'resume.pdf');

    // Launch browser with optimized settings
    try {
      const launchOptions: any = {
        headless: true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-accelerated-2d-canvas',
          '--disable-gpu',
          '--disable-web-security',
          '--disable-features=IsolateOrigins,site-per-process',
          '--single-process', // Important for serverless environments
          '--disable-extensions',
          '--disable-plugins',
          '--disable-background-networking',
          '--disable-background-timer-throttling',
          '--disable-backgrounding-occluded-windows',
          '--disable-breakpad',
          '--disable-client-side-phishing-detection',
          '--disable-component-update',
          '--disable-default-apps',
          '--disable-domain-reliability',
          '--disable-features=AudioServiceOutOfProcess',
          '--disable-hang-monitor',
          '--disable-ipc-flooding-protection',
          '--disable-notifications',
          '--disable-offer-store-unmasked-wallet-cards',
          '--disable-popup-blocking',
          '--disable-print-preview',
          '--disable-prompt-on-repost',
          '--disable-renderer-backgrounding',
          '--disable-setuid-sandbox',
          '--disable-speech-api',
          '--disable-sync',
          '--disable-translate',
          '--disable-windows10-custom-titlebar',
          '--metrics-recording-only',
          '--mute-audio',
          '--no-first-run',
          '--no-default-browser-check',
          '--no-pings',
          '--no-zygote',
          '--safebrowsing-disable-auto-update',
          '--use-mock-keychain',
        ],
        timeout: 60000, // 60 second timeout for browser launch
      };

      // Try to find Chromium executable
      const chromiumPath = await getChromiumPath();
      if (chromiumPath) {
        launchOptions.executablePath = chromiumPath;
        console.log('✅ Using Chromium at:', chromiumPath);
      } else {
        console.warn('⚠️ No Chromium found, trying default Puppeteer launch...');
        // Will try to use Puppeteer's default (may fail in serverless)
      }

      browser = await puppeteer.launch(launchOptions);
      console.log('✅ Browser launched successfully');
    } catch (launchError) {
      console.error('❌ Failed to launch browser:', launchError);
      const errorMessage = launchError instanceof Error ? launchError.message : 'Unknown error';
      const errorStack = launchError instanceof Error ? launchError.stack : undefined;
      
      // Try to provide more helpful error message
      let hint = 'Puppeteer requires Chrome/Chromium. ';
      if (errorMessage.includes('executable') || errorMessage.includes('chrome') || errorMessage.includes('Could not find Chrome')) {
        if (process.env.VERCEL) {
          hint += 'For Vercel deployments, add this to your package.json build script: "build": "npx puppeteer browsers install chrome && next build". Or set CHROME_PATH environment variable in Vercel dashboard.';
        } else if (process.env.AWS_LAMBDA_FUNCTION_NAME) {
          hint += 'For AWS Lambda, you need to bundle Chromium with your deployment or use a Lambda layer with Chromium.';
        } else {
          hint += 'For serverless deployments, install Chromium during build: `npx puppeteer browsers install chrome`. For local development, install Chrome browser or set CHROME_PATH environment variable.';
        }
      } else if (errorMessage.includes('timeout')) {
        hint += 'Browser launch timed out. This might be due to system resource constraints.';
      } else {
        hint += 'Check server logs for more details.';
      }
      
      return NextResponse.json(
        { 
          error: 'Failed to launch browser',
          details: errorMessage,
          hint: hint,
          ...(process.env.NODE_ENV === 'development' && errorStack ? { stack: errorStack } : {})
        },
        { status: 500 }
      );
    }

    const page = await browser.newPage();

    // Set viewport for consistent rendering
    await page.setViewport({
      width: 1200,
      height: 1600,
      deviceScaleFactor: 2,
    });

    console.log('📄 Setting page content...');

    // Extract title from HTML for PDF metadata
    let pageTitle = fileName || 'Resume';
    if (pageTitle.endsWith('.pdf')) {
      pageTitle = pageTitle.replace('.pdf', '');
    }
    
    // Try to extract title from HTML <title> tag
    try {
      const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
      if (titleMatch && titleMatch[1]) {
        pageTitle = titleMatch[1].trim();
      }
    } catch (e) {
      // Ignore errors in title extraction
    }
    
    // Set page title for PDF metadata
    try {
      await page.setContent(html, {
        waitUntil: 'networkidle0',
        timeout: 60000, // Increased timeout
      });
      
      // Set the page title explicitly
      await page.evaluate((title) => {
        document.title = title;
      }, pageTitle);
      
      console.log('✅ Page content loaded with title:', pageTitle);
      
      // First, explicitly find and preserve the divider BEFORE any cleanup
      const dividerInfo = await page.evaluate(() => {
        // Find the divider element using multiple methods
        const dividerSelectors = [
          '[data-divider="true"]',
          '[class*="h-0.5"][class*="my-6"]',
          '[class*="h-0.5"]',
          'div[class*="h-0.5"]'
        ];
        
        let dividerElement: HTMLElement | null = null;
        let foundWithSelector = '';
        
        for (const selector of dividerSelectors) {
          try {
            const elements = document.querySelectorAll(selector);
            console.log(`🔍 Checking selector "${selector}": found ${elements.length} elements`);
            
            for (let i = 0; i < elements.length; i++) {
              const el = elements[i] as HTMLElement;
              const computedStyle = window.getComputedStyle(el);
              const height = parseFloat(computedStyle.height);
              const width = computedStyle.width;
              
              // Check if it's a thin horizontal line (divider)
              if (height <= 2 && (width === '100%' || el.style.width === '100%' || width.includes('100%'))) {
                dividerElement = el;
                foundWithSelector = selector;
                console.log(`✅ Found divider with selector "${selector}"`, {
                  height: computedStyle.height,
                  width: width,
                  backgroundColor: computedStyle.backgroundColor,
                  opacity: computedStyle.opacity
                });
                break;
              }
            }
            if (dividerElement) break;
          } catch (e) {
            console.warn(`❌ Error with selector "${selector}":`, e);
            continue;
          }
        }
        
        if (dividerElement) {
          const computedStyle = window.getComputedStyle(dividerElement);
          
          // Get the actual background color - ALWAYS check style attribute first (most reliable)
          let bgColor = '';
          const styleAttr = dividerElement.getAttribute('style');
          if (styleAttr) {
            const bgMatch = styleAttr.match(/background-color:\s*([^;!]+)/i);
            if (bgMatch && bgMatch[1]) {
              bgColor = bgMatch[1].trim();
            }
          }
          
          // Fallback to inline style property
          if (!bgColor || bgColor === 'transparent' || bgColor === 'rgba(0, 0, 0, 0)' || bgColor === '') {
            bgColor = dividerElement.style.backgroundColor;
          }
          
          // If still no color, try computed style
          if (!bgColor || bgColor === 'transparent' || bgColor === 'rgba(0, 0, 0, 0)' || bgColor === '' || bgColor === 'rgba(8, 6, 0, 0)') {
            const computedBg = computedStyle.backgroundColor;
            if (computedBg && computedBg !== 'transparent' && computedBg !== 'rgba(0, 0, 0, 0)' && computedBg !== 'rgba(8, 6, 0, 0)') {
              bgColor = computedBg;
            } else {
              // Only use black as last resort if absolutely no color found
              bgColor = '#000000';
            }
          }
          
          console.log('🎨 Divider color extraction:', {
            styleAttr: styleAttr,
            extractedColor: bgColor,
            inlineStyleColor: dividerElement.style.backgroundColor,
            computedColor: computedStyle.backgroundColor
          });
          
          // Ensure opacity is set - preserve original opacity
          let opacity = dividerElement.style.opacity;
          if (!opacity || opacity === '') {
            const styleAttr = dividerElement.getAttribute('style');
            if (styleAttr) {
              const opacityMatch = styleAttr.match(/opacity:\s*([^;]+)/i);
              if (opacityMatch && opacityMatch[1]) {
                opacity = opacityMatch[1].trim();
              }
            }
          }
          // If still no opacity, check computed style
          if (!opacity || opacity === '') {
            const computedOpacity = computedStyle.opacity;
            if (computedOpacity && computedOpacity !== '1') {
              opacity = computedOpacity;
            } else {
              // Default opacity based on color - if black, use 1, otherwise preserve original (often 0.3)
              opacity = bgColor === '#000000' || bgColor === 'rgb(0, 0, 0)' || bgColor === 'black' ? '1' : '0.3';
            }
          }
          
          const height = dividerElement.style.height || computedStyle.height || '0.5px';
          
          // Build complete style string with !important to override any CSS
          const styleString = `display: block !important; visibility: visible !important; width: 100% !important; height: ${height} !important; margin-top: 24px !important; margin-bottom: 24px !important; background-color: ${bgColor} !important; opacity: ${opacity} !important; box-shadow: none !important; border: none !important; padding: 0 !important;`;
          
          // Set all styles with !important flags
          dividerElement.setAttribute('data-divider', 'true');
          dividerElement.setAttribute('style', styleString);
          dividerElement.style.cssText = styleString;
          
          // Also set individual properties with !important via setProperty
          dividerElement.style.setProperty('display', 'block', 'important');
          dividerElement.style.setProperty('visibility', 'visible', 'important');
          dividerElement.style.setProperty('width', '100%', 'important');
          dividerElement.style.setProperty('height', height, 'important');
          dividerElement.style.setProperty('margin-top', '24px', 'important');
          dividerElement.style.setProperty('margin-bottom', '24px', 'important');
          dividerElement.style.setProperty('background-color', bgColor, 'important');
          dividerElement.style.setProperty('opacity', opacity, 'important');
          dividerElement.style.setProperty('box-shadow', 'none', 'important');
          dividerElement.style.setProperty('border', 'none', 'important');
          dividerElement.style.setProperty('padding', '0', 'important');
          
          // Force a reflow to ensure styles are applied
          void dividerElement.offsetHeight;
          
          const finalComputed = window.getComputedStyle(dividerElement);
          
          return {
            found: true,
            selector: foundWithSelector,
            backgroundColor: bgColor, // Return the set color, not computed
            opacity: opacity, // Return the set opacity, not computed
            height: finalComputed.height,
            width: finalComputed.width,
            display: finalComputed.display,
            visibility: finalComputed.visibility,
            outerHTML: dividerElement.outerHTML.substring(0, 300)
          };
        } else {
          // Try to create a divider if not found
          const body = document.body;
          const firstDiv = body.querySelector('div');
          if (firstDiv) {
            const newDivider = document.createElement('div');
            newDivider.setAttribute('data-divider', 'true');
            newDivider.className = 'w-full h-0.5 my-6';
            newDivider.style.cssText = 'display: block; visibility: visible; width: 100%; height: 0.5px; margin-top: 24px; margin-bottom: 24px; background-color: #000000; opacity: 1; box-shadow: none; border: none; padding: 0;';
            firstDiv.insertAdjacentElement('afterend', newDivider);
            console.log('✅ Created new divider in Puppeteer');
            return {
              found: true,
              selector: 'created',
              backgroundColor: '#000000',
              opacity: '1',
              height: '0.5px',
              width: '100%',
              display: 'block',
              visibility: 'visible',
              outerHTML: newDivider.outerHTML
            };
          }
          
          return {
            found: false,
            message: 'Divider not found and could not be created'
          };
        }
      });
      
      if (dividerInfo.found) {
        console.log('✅ Divider found and preserved in Puppeteer:', dividerInfo);
      } else {
        console.warn('⚠️ Divider not found in Puppeteer:', dividerInfo);
      }
      
      // Remove any black backgrounds, shadows, gradients, or problematic elements
      await page.evaluate(() => {
        // Remove all black backgrounds, shadows, and effects
        const allElements = document.querySelectorAll('*');
        allElements.forEach((el) => {
          const htmlEl = el as HTMLElement;
          
          // Skip divider elements
          if (htmlEl.getAttribute('data-divider') === 'true') {
            return; // Don't modify divider elements
          }
          
          const computedStyle = window.getComputedStyle(htmlEl);
          
          // Check for divider by class, height, or if it's a thin horizontal line with background color
          const hasDividerClass = htmlEl.classList.contains('h-0.5') || 
                                 htmlEl.classList.contains('h-px') ||
                                 htmlEl.classList.contains('my-6');
          const hasDividerHeight = computedStyle.height === '0.5px' ||
                                   computedStyle.height === '1px' ||
                                   (computedStyle.height && parseFloat(computedStyle.height) <= 2);
          const hasDividerStyle = (computedStyle.width === '100%' || htmlEl.style.width === '100%') &&
                                  hasDividerHeight &&
                                  (computedStyle.backgroundColor !== 'transparent' && 
                                   computedStyle.backgroundColor !== 'rgba(0, 0, 0, 0)' &&
                                   computedStyle.backgroundColor !== 'rgba(8, 6, 0, 0)');
          const isDivider = hasDividerClass || hasDividerHeight || hasDividerStyle || htmlEl.getAttribute('data-divider') === 'true';
          
          // Check if background is black (but preserve dividers)
          if (!isDivider && (computedStyle.backgroundColor === 'rgb(0, 0, 0)' || 
              computedStyle.backgroundColor === 'black' ||
              htmlEl.style.backgroundColor === 'black' ||
              htmlEl.style.backgroundColor === '#000000' ||
              htmlEl.style.backgroundColor === 'rgb(0, 0, 0)')) {
            htmlEl.style.backgroundColor = 'transparent';
          }
          
          if (!isDivider) {
            htmlEl.style.boxShadow = 'none';
            htmlEl.style.textShadow = 'none';
            htmlEl.style.filter = 'none';
            htmlEl.style.backdropFilter = 'none';
            htmlEl.style.webkitBackdropFilter = 'none';
          }
          
          // Preserve divider lines - ensure they're visible
          if (isDivider) {
            // Preserve the original background color if it exists
            const originalBg = computedStyle.backgroundColor;
            const inlineBg = htmlEl.style.backgroundColor;
            
            // Check style attribute for original color
            const styleAttr = htmlEl.getAttribute('style');
            let styleAttrBg = '';
            if (styleAttr) {
              const bgMatch = styleAttr.match(/background-color:\s*([^;!]+)/i);
              if (bgMatch && bgMatch[1]) {
                styleAttrBg = bgMatch[1].trim();
              }
            }
            
            // Priority: style attribute > inline style > computed style > default
            if (styleAttrBg && styleAttrBg !== 'transparent' && styleAttrBg !== 'rgba(0, 0, 0, 0)' && styleAttrBg !== 'rgba(8, 6, 0, 0)') {
              // Keep the style attribute background color (highest priority)
              htmlEl.style.backgroundColor = styleAttrBg;
            } else if (inlineBg && inlineBg !== 'transparent' && inlineBg !== 'rgba(0, 0, 0, 0)' && inlineBg !== 'rgba(8, 6, 0, 0)') {
              // Keep the inline style background color
              htmlEl.style.backgroundColor = inlineBg;
            } else if (originalBg && originalBg !== 'transparent' && originalBg !== 'rgba(0, 0, 0, 0)' && originalBg !== 'rgba(8, 6, 0, 0)') {
              // Keep the original background color
              htmlEl.style.backgroundColor = originalBg;
            } else {
              // Use default color for dividers if no color is set
              htmlEl.style.backgroundColor = '#000000'; // Black color
            }
            
            // Ensure divider is visible
            htmlEl.style.height = computedStyle.height || '0.5px' || '1px';
            htmlEl.style.display = 'block';
            htmlEl.style.visibility = 'visible';
            htmlEl.style.width = '100%';
            htmlEl.style.marginTop = computedStyle.marginTop || '24px';
            htmlEl.style.marginBottom = computedStyle.marginBottom || '24px';
            
            // Preserve opacity for dividers (they might have opacity for styling)
            if (htmlEl.style.opacity) {
              // Keep the inline opacity if it exists
              // Don't change it
            } else if (computedStyle.opacity && parseFloat(computedStyle.opacity) < 1) {
              // Keep the computed opacity for dividers as it's part of their design
              htmlEl.style.opacity = computedStyle.opacity;
            } else {
              // Default opacity for dividers (full opacity for black)
              htmlEl.style.opacity = '1';
            }
          }
          
          // Remove gradients
          if (computedStyle.backgroundImage && computedStyle.backgroundImage.includes('gradient')) {
            htmlEl.style.backgroundImage = 'none';
            htmlEl.style.backgroundColor = computedStyle.backgroundColor === 'rgba(0, 0, 0, 0)' 
              ? 'transparent' 
              : '#ffffff';
          }
          
          // Remove pseudo-elements that might have shadows
          const before = window.getComputedStyle(htmlEl, '::before');
          const after = window.getComputedStyle(htmlEl, '::after');
          if (before.content !== 'none' || after.content !== 'none') {
            htmlEl.style.setProperty('--before-display', 'none');
            htmlEl.style.setProperty('--after-display', 'none');
          }
          
          // Ensure body and html have white background
          if (htmlEl.tagName === 'BODY' || htmlEl.tagName === 'HTML') {
            htmlEl.style.backgroundColor = '#ffffff';
          }
        });
        
        // Remove any elements with black backgrounds (but preserve dividers)
        const blackElements = Array.from(allElements).filter((el) => {
          const htmlEl = el as HTMLElement;
          const isDivider = htmlEl.getAttribute('data-divider') === 'true' ||
                           htmlEl.classList.contains('h-0.5') ||
                           htmlEl.classList.contains('h-px') ||
                           htmlEl.classList.contains('my-6');
          
          if (isDivider) return false; // Don't remove dividers
          
          const style = window.getComputedStyle(el);
          return style.backgroundColor === 'rgb(0, 0, 0)' || 
                 style.backgroundColor === 'black';
        });
        
        blackElements.forEach((el) => {
          const htmlEl = el as HTMLElement;
          htmlEl.style.backgroundColor = 'transparent';
        });
        
        // Add global style to remove all shadows and effects (but preserve dividers)
        const style = document.createElement('style');
        style.textContent = `
          *:not([class*="h-0.5"]):not([class*="h-px"]):not([data-divider="true"]) {
            box-shadow: none !important;
            text-shadow: none !important;
            filter: none !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
          }
          *::before,
          *::after {
            display: none !important;
            box-shadow: none !important;
          }
          [class*="shadow"],
          [class*="glass"],
          [class*="backdrop"] {
            box-shadow: none !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
          }
          /* Preserve divider lines - make them highly visible */
          [class*="h-0.5"],
          [class*="h-px"],
          [style*="height: 0.5px"],
          [style*="height: 1px"],
          [data-divider="true"] {
            display: block !important;
            visibility: visible !important;
            width: 100% !important;
            min-height: 0.5px !important;
          }
          /* Ensure divider with my-6 class is visible */
          [class*="h-0.5"][class*="my-6"],
          [data-divider="true"] {
            display: block !important;
            visibility: visible !important;
            width: 100% !important;
            min-height: 0.5px !important;
            margin-top: 24px !important;
            margin-bottom: 24px !important;
          }
        `;
        document.head.appendChild(style);
      });
      
      console.log('✅ Cleaned backgrounds, shadows, and effects');
    } catch (contentError) {
      console.error('❌ Failed to set page content:', contentError);
      await browser.close();
      return NextResponse.json(
        { 
          error: 'Failed to load HTML content',
          details: contentError instanceof Error ? contentError.message : 'Unknown error'
        },
        { status: 500 }
      );
    }

    // Wait for fonts and images to load
    try {
      await page.evaluateHandle('document.fonts.ready');
      // Use a Promise-based delay instead of waitForTimeout
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('✅ Fonts and resources loaded');
    } catch (waitError) {
      console.warn('⚠️ Warning waiting for fonts:', waitError);
      // Continue anyway
    }

    console.log('📄 Generating PDF...');

    // Extract title from HTML or use filename
    let pdfTitle = fileName || 'Resume';
    if (pdfTitle.endsWith('.pdf')) {
      pdfTitle = pdfTitle.replace('.pdf', '');
    }
    
    // Try to extract name from HTML for author
    let pdfAuthor = 'BPOC.IO';
    try {
      const nameMatch = html.match(/<h1[^>]*>([^<]+)<\/h1>/i);
      if (nameMatch && nameMatch[1]) {
        pdfAuthor = nameMatch[1].trim();
      }
    } catch (e) {
      // Ignore errors in name extraction
    }

    // Generate PDF with optimized settings and metadata
    let pdfBuffer: Buffer;
    try {
      pdfBuffer = await page.pdf({
        format: 'A4',
        printBackground: true,
        margin: {
          top: '10mm',
          right: '10mm',
          bottom: '10mm',
          left: '10mm',
        },
        preferCSSPageSize: true,
        displayHeaderFooter: false,
        timeout: 60000, // 60 second timeout
      });
      
      // Add PDF metadata using a library or by modifying the PDF buffer
      // For now, we'll set the title via the response headers and filename
      console.log('✅ PDF generated successfully, size:', pdfBuffer.length, 'bytes');
    } catch (pdfError) {
      console.error('❌ Failed to generate PDF:', pdfError);
      await browser.close();
      return NextResponse.json(
        { 
          error: 'Failed to generate PDF',
          details: pdfError instanceof Error ? pdfError.message : 'Unknown error'
        },
        { status: 500 }
      );
    }

    // Close browser
    try {
      await browser.close();
      console.log('✅ Browser closed');
    } catch (closeError) {
      console.warn('⚠️ Warning closing browser:', closeError);
    }

    // Return PDF as response with proper metadata
    const sanitizedFileName = (fileName || 'resume.pdf').replace(/[^a-zA-Z0-9._-]/g, '_');
    
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${sanitizedFileName}"; filename*=UTF-8''${encodeURIComponent(sanitizedFileName)}`,
        'Content-Length': pdfBuffer.length.toString(),
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (error) {
    console.error('❌ Error generating PDF:', error);
    console.error('❌ Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      name: error instanceof Error ? error.name : 'Unknown',
    });
    
    if (browser) {
      try {
        await browser.close();
      } catch (closeError) {
        console.error('❌ Error closing browser:', closeError);
      }
    }

    return NextResponse.json(
      { 
        error: 'Failed to generate PDF',
        details: error instanceof Error ? error.message : 'Unknown error',
        stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

