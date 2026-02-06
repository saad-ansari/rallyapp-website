#!/usr/bin/env node
/**
 * Rally Screenshot Generator
 * Generates App Store screenshots using Puppeteer with local server
 *
 * Usage: node generate-screenshots.js [ios|android|all]
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const http = require('http');

// Screenshot configurations
const screenshots = [
  { id: 1, badge: "Rally", image: "home.jpg" },
  { id: 2, badge: "Starter", image: "profile.jpg" },
  { id: 3, badge: "Rising", image: "activity.jpg" },
  { id: 4, badge: "Builder", image: "squad-detail.jpg" },
  { id: 5, badge: "Bronze", image: "event-details.jpeg" },
  { id: 6, badge: "Silver", image: "reliability.jpeg" },
  { id: 7, badge: "Gold", image: "leaderboard.jpg" },
  { id: 8, badge: "Platinum", image: "achievments.jpeg" },
  { id: 9, badge: "Check In", image: "event-details.jpeg" },
  { id: 10, badge: "Compete", image: "leaderboard.jpg" },
];

// Platform configurations
// iOS 6.7" = 1284 × 2778px (iPhone 12/13/14/15 Pro Max)
// Android = 1242 × 2208px (Play Store requirement)
const platforms = {
  ios: { width: 1284, height: 2778, folder: 'exports/ios' },
  android: { width: 1242, height: 2208, folder: 'exports/android' },
};

// Tier/glow configurations
const tierConfig = {
  1: { glow: 'orange', badge: 'orange', highlight: 'orange', type: 'icon', iconType: 'checkmark', iconColor: '#f97316', headline: 'No More', highlight2: 'Maybes', subtitle: 'See who actually shows up' },
  2: { glow: 'starter', badge: 'starter', highlight: 'starter', type: 'score', score: '0', headline: 'Begin Your', highlight2: 'Journey', subtitle: 'Everyone starts here' },
  3: { glow: 'rising', badge: 'rising', highlight: 'rising', type: 'score', score: '25', headline: 'Building', highlight2: 'Momentum', subtitle: "You're showing up more" },
  4: { glow: 'builder', badge: 'builder', highlight: 'builder', type: 'score', score: '40', headline: 'Showing', highlight2: 'Commitment', subtitle: 'Your squad notices' },
  5: { glow: 'bronze', badge: 'bronze', highlight: 'bronze', type: 'score', score: '55', headline: 'Reliable', highlight2: 'Friend', subtitle: 'People count on you' },
  6: { glow: 'silver', badge: 'silver', highlight: 'silver', type: 'score', score: '65', headline: 'Proven', highlight2: 'Reliable', subtitle: 'Your score speaks for itself' },
  7: { glow: 'gold', badge: 'gold', highlight: 'gold', type: 'score', score: '80', headline: 'The Real', highlight2: 'Deal', subtitle: 'Top tier reliability' },
  8: { glow: 'platinum', badge: 'platinum', highlight: 'platinum', type: 'score', score: '95', headline: 'Elite', highlight2: 'Status', subtitle: 'The most reliable' },
  9: { glow: 'teal', badge: 'teal', highlight: 'teal', type: 'icon', iconType: 'pin', iconColor: '#14b8a6', headline: 'Show Up.', highlight2: 'Build Your Score.', subtitle: 'Location verified automatically' },
  10: { glow: 'orange', badge: 'orange', highlight: 'orange', type: 'icon', iconType: 'trophy', iconColor: '#f97316', headline: 'Climb The', highlight2: 'Ranks', subtitle: 'Friends • City • Global' },
};

// Simple static file server
function startServer(port = 8765) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
      const ext = path.extname(filePath).toLowerCase();
      const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
      };

      fs.readFile(filePath, (error, content) => {
        if (error) {
          res.writeHead(404);
          res.end('File not found');
        } else {
          res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
          res.end(content, 'utf-8');
        }
      });
    });

    server.listen(port, () => {
      resolve(server);
    });
  });
}

// Design 7: Dark Premium + Tier styling
function getScreenshotHTML(screenshot, platform, baseUrl) {
  const isIOS = platform === 'ios';
  const config = platforms[platform];
  const tier = tierConfig[screenshot.id];
  const imageUrl = `${baseUrl}/images/screenshots/${screenshot.image}`;

  // Icon HTML based on type
  let iconHtml = '';
  if (tier.type === 'icon') {
    if (tier.iconType === 'checkmark') {
      iconHtml = `<div class="icon-wrap" style="color: ${tier.iconColor}"><div class="icon-checkmark"></div></div>`;
    } else if (tier.iconType === 'pin') {
      iconHtml = `<div class="icon-wrap" style="color: ${tier.iconColor}"><div class="icon-pin"></div></div>`;
    } else if (tier.iconType === 'trophy') {
      iconHtml = `<div class="icon-wrap" style="color: ${tier.iconColor}"><div class="icon-trophy"></div></div>`;
    }
  }

  let scoreHtml = '';
  if (tier.type === 'score') {
    scoreHtml = `<div class="score">${tier.score}<span class="pct">%</span></div>`;
  }

  return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            width: ${config.width}px;
            height: ${config.height}px;
            overflow: hidden;
        }
        .frame {
            width: ${config.width}px;
            height: ${config.height}px;
            background: linear-gradient(180deg, #0a0a0f 0%, #18181b 100%);
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            overflow: hidden;
        }
        .glow {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            opacity: 0.5;
        }
        .glow-orange { background: radial-gradient(ellipse at 50% 75%, rgba(234, 88, 12, 0.5) 0%, transparent 55%); }
        .glow-teal { background: radial-gradient(ellipse at 50% 75%, rgba(20, 184, 166, 0.4) 0%, transparent 55%); }
        .glow-starter { background: radial-gradient(ellipse at 50% 75%, rgba(148, 163, 184, 0.35) 0%, transparent 55%); }
        .glow-rising { background: radial-gradient(ellipse at 50% 75%, rgba(56, 189, 248, 0.4) 0%, transparent 55%); }
        .glow-builder { background: radial-gradient(ellipse at 50% 75%, rgba(168, 85, 247, 0.45) 0%, transparent 55%); }
        .glow-bronze { background: radial-gradient(ellipse at 50% 75%, rgba(217, 119, 6, 0.45) 0%, transparent 55%); }
        .glow-silver { background: radial-gradient(ellipse at 50% 75%, rgba(161, 161, 170, 0.4) 0%, transparent 55%); }
        .glow-gold { background: radial-gradient(ellipse at 50% 75%, rgba(251, 191, 36, 0.5) 0%, transparent 55%); }
        .glow-platinum { background: radial-gradient(ellipse at 50% 75%, rgba(129, 140, 248, 0.5) 0%, transparent 55%); }
        .content {
            position: relative;
            z-index: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
            padding: ${isIOS ? '120px 80px' : '100px 70px'};
        }
        .badge {
            padding: ${isIOS ? '32px 80px' : '28px 70px'};
            border-radius: 100px;
            font-size: ${isIOS ? '48px' : '42px'};
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: ${isIOS ? '6px' : '5px'};
            margin-bottom: ${isIOS ? '32px' : '28px'};
        }
        .badge-orange { background: #f97316; color: white; }
        .badge-teal { background: #14b8a6; color: white; }
        .badge-starter { background: #94a3b8; color: #0f172a; }
        .badge-rising { background: #38bdf8; color: #082f49; }
        .badge-builder { background: #a855f7; color: #3b0764; }
        .badge-bronze { background: #d97706; color: #451a03; }
        .badge-silver { background: #a1a1aa; color: #27272a; }
        .badge-gold { background: #fbbf24; color: #422006; }
        .badge-platinum { background: #818cf8; color: #312e81; }
        .score {
            font-size: ${isIOS ? '260px' : '220px'};
            font-weight: 900;
            color: white;
            line-height: 1;
            margin-bottom: 16px;
        }
        .score .pct { font-size: ${isIOS ? '140px' : '120px'}; opacity: 0.7; }
        .icon-wrap {
            width: ${isIOS ? '200px' : '170px'};
            height: ${isIOS ? '200px' : '170px'};
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .icon-checkmark {
            width: 180px; height: 180px;
            border: 16px solid currentColor;
            border-radius: 50%;
            position: relative;
        }
        .icon-checkmark::before {
            content: "";
            position: absolute;
            top: 42%; left: 50%;
            transform: translate(-50%, -50%) rotate(45deg);
            width: 45px; height: 85px;
            border-right: 16px solid currentColor;
            border-bottom: 16px solid currentColor;
        }
        .icon-pin {
            width: 120px; height: 160px;
            background: currentColor;
            border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
            position: relative;
        }
        .icon-pin::before {
            content: "";
            position: absolute;
            top: 45px; left: 50%;
            transform: translateX(-50%);
            width: 45px; height: 45px;
            background: #18181b;
            border-radius: 50%;
        }
        .icon-trophy {
            width: 150px; height: 130px;
            background: currentColor;
            border-radius: 0 0 75px 75px;
            position: relative;
        }
        .icon-trophy::before {
            content: "";
            position: absolute;
            top: 15px; left: -45px;
            width: 45px; height: 75px;
            border: 16px solid currentColor;
            border-right: none;
            border-radius: 45px 0 0 45px;
            background: transparent;
        }
        .icon-trophy::after {
            content: "";
            position: absolute;
            top: 15px; right: -45px;
            width: 45px; height: 75px;
            border: 16px solid currentColor;
            border-left: none;
            border-radius: 0 45px 45px 0;
            background: transparent;
        }
        .headline {
            font-size: ${isIOS ? '120px' : '100px'};
            font-weight: 800;
            color: white;
            text-align: center;
            line-height: 1.1;
            margin-bottom: ${isIOS ? '32px' : '28px'};
        }
        .hl-orange { color: #f97316; }
        .hl-teal { color: #14b8a6; }
        .hl-starter { color: #94a3b8; }
        .hl-rising { color: #38bdf8; }
        .hl-builder { color: #a855f7; }
        .hl-bronze { color: #d97706; }
        .hl-silver { color: #a1a1aa; }
        .hl-gold { color: #fbbf24; }
        .hl-platinum { color: #818cf8; }
        .subtitle {
            font-size: ${isIOS ? '56px' : '48px'};
            color: #71717a;
            text-align: center;
            margin-bottom: ${isIOS ? '80px' : '60px'};
        }
        .phone {
            margin-top: auto;
            width: ${isIOS ? '970px' : '870px'};
            height: ${isIOS ? '2105px' : '1549px'};
            background: #000;
            border-radius: ${isIOS ? '130px' : '60px'};
            padding: ${isIOS ? '36px' : '24px'};
            position: relative;
        }
        .phone::before {
            content: "";
            position: absolute;
            top: ${isIOS ? '54px' : '24px'};
            left: 50%;
            transform: translateX(-50%);
            width: ${isIOS ? '280px' : '120px'};
            height: ${isIOS ? '70px' : '12px'};
            background: #000;
            border-radius: ${isIOS ? '35px' : '6px'};
            z-index: 10;
            display: block;
        }
        .phone-glow-orange { box-shadow: 0 0 240px rgba(234, 88, 12, 0.5), 0 0 0 8px #333; }
        .phone-glow-teal { box-shadow: 0 0 240px rgba(20, 184, 166, 0.45), 0 0 0 8px #333; }
        .phone-glow-starter { box-shadow: 0 0 200px rgba(148, 163, 184, 0.35), 0 0 0 8px #333; }
        .phone-glow-rising { box-shadow: 0 0 240px rgba(56, 189, 248, 0.5), 0 0 0 8px #333; }
        .phone-glow-builder { box-shadow: 0 0 240px rgba(168, 85, 247, 0.5), 0 0 0 8px #333; }
        .phone-glow-bronze { box-shadow: 0 0 240px rgba(217, 119, 6, 0.5), 0 0 0 8px #333; }
        .phone-glow-silver { box-shadow: 0 0 200px rgba(161, 161, 170, 0.4), 0 0 0 8px #333; }
        .phone-glow-gold { box-shadow: 0 0 280px rgba(251, 191, 36, 0.55), 0 0 0 8px #333; }
        .phone-glow-platinum { box-shadow: 0 0 280px rgba(129, 140, 248, 0.55), 0 0 0 8px #333; }
        .screen {
            width: 100%;
            height: 100%;
            border-radius: ${isIOS ? '100px' : '78px'};
            overflow: hidden;
        }
        .screen img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
        }
    </style>
</head>
<body>
    <div class="frame">
        <div class="glow glow-${tier.glow}"></div>
        <div class="content">
            <div class="badge badge-${tier.badge}">${screenshot.badge}</div>
            ${scoreHtml}
            ${iconHtml}
            <div class="headline">${tier.headline}<br><span class="hl-${tier.highlight}">${tier.highlight2}</span></div>
            <div class="subtitle">${tier.subtitle}</div>
            <div class="phone phone-glow-${tier.glow}">
                <div class="screen">
                    <img src="${imageUrl}" alt="${screenshot.badge}">
                </div>
            </div>
        </div>
    </div>
</body>
</html>`;
}

async function generateScreenshots(platformName = 'ios') {
  const config = platforms[platformName];
  const outputDir = path.resolve(__dirname, config.folder);
  const PORT = 8765;
  const baseUrl = `http://localhost:${PORT}`;

  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`\n🚀 Starting local server on port ${PORT}...`);
  const server = await startServer(PORT);

  console.log(`📸 Generating ${platformName.toUpperCase()} screenshots (${config.width}x${config.height}px)...\n`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const screenshot of screenshots) {
    const page = await browser.newPage();

    await page.setViewport({
      width: config.width,
      height: config.height,
      deviceScaleFactor: 1,
    });

    const html = getScreenshotHTML(screenshot, platformName, baseUrl);
    await page.setContent(html, { waitUntil: 'networkidle0' });

    // Wait for fonts to load
    await page.evaluateHandle('document.fonts.ready');

    // Wait for images to load
    await page.waitForFunction(() => {
      const images = document.querySelectorAll('img');
      return Array.from(images).every(img => img.complete && img.naturalHeight > 0);
    }, { timeout: 10000 }).catch(() => {
      console.log(`  ⚠️  Image may not have loaded for ${screenshot.badge}`);
    });

    // Extra wait for rendering
    await new Promise(resolve => setTimeout(resolve, 300));

    const filename = `rally-${platformName}-${String(screenshot.id).padStart(2, '0')}-${screenshot.badge.toLowerCase().replace(/\s+/g, '-')}.png`;
    const filepath = path.join(outputDir, filename);

    await page.screenshot({
      path: filepath,
      type: 'png',
    });

    console.log(`  ✅ ${filename}`);
    await page.close();
  }

  await browser.close();
  server.close();

  console.log(`\n🎉 Done! Screenshots saved to: ${outputDir}\n`);
}

async function main() {
  const args = process.argv.slice(2);
  const platform = args[0] || 'ios';

  if (platform === 'all') {
    await generateScreenshots('ios');
    await generateScreenshots('android');
  } else if (platforms[platform]) {
    await generateScreenshots(platform);
  } else {
    console.log('Usage: node generate-screenshots.js [ios|android|all]');
    process.exit(1);
  }
}

main().catch(console.error);
