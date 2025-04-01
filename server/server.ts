const nodeHtmlToImage = require("node-html-to-image");

const puppeteer = require('puppeteer');

(async () => {
    try {
        console.log('Launching Puppeteer...');

        const browser = await puppeteer.launch({ 
            headless: true, 
            args: ['--no-sandbox', '--disable-setuid-sandbox'] 
        });

        console.log('Browser launched successfully.');

        const page = await browser.newPage();
        console.log('New page created.');

        await page.setContent("<h1>HI</h1>");
        console.log('Page content set.');

        const buffer = await page.screenshot({ type: 'png', fullPage: true });
        console.log('Screenshot taken.');

        await browser.close();
        console.log('Browser closed.');
        
        // If you want to save or use the buffer
        // You can return or do something with the buffer here.
    } catch (error:any) {
        console.error('Error occurred:', error.message);
        if (error.stack) {
            console.error('Stack Trace:', error.stack);
        }
    }
})();
// const puppeteer = require('puppeteer');


// (async () => {
//   try {
//     console.log('Checking Puppeteer default executable path...');
//     console.log('Default path:', puppeteer.executablePath());
  
//     const browser = await puppeteer.launch({
//       headless: true,
//       executablePath: '/opt/render/.cache/puppeteer/chrome/linux-128.0.6613.119/chrome-linux64/chrome',
//     });
  
//     console.log('Puppeteer successfully launched!');
    
//     const page = await browser.newPage();
//     await page.goto('https://example.com');
//     console.log('Page loaded successfully!');
  
//     await browser.close();
//   } catch (error) {
//     console.error('Error occurred:', error.message);
//   }
// })();

const html = `<style data-mantine-styles="classes">
    @media (max-width: 35.99375em) {
        .mantine-visible-from-xs {
            display: none !important;
        }
    }

    @media (min-width: 36em) {
        .mantine-hidden-from-xs {
            display: none !important;
        }
    }

    @media (max-width: 47.99375em) {
        .mantine-visible-from-sm {
            display: none !important;
        }
    }

    @media (min-width: 48em) {
        .mantine-hidden-from-sm {
            display: none !important;
        }
    }

    @media (max-width: 61.99375em) {
        .mantine-visible-from-md {
            display: none !important;
        }
    }

    @media (min-width: 62em) {
        .mantine-hidden-from-md {
            display: none !important;
        }
    }

    @media (max-width: 74.99375em) {
        .mantine-visible-from-lg {
            display: none !important;
        }
    }

    @media (min-width: 75em) {
        .mantine-hidden-from-lg {
            display: none !important;
        }
    }

    @media (max-width: 87.99375em) {
        .mantine-visible-from-xl {
            display: none !important;
        }
    }

    @media (min-width: 88em) {
        .mantine-hidden-from-xl {
            display: none !important;
        }
    }
</style>
<div style="--stack-gap:calc(1.25rem * var(--mantine-scale));--stack-align:stretch;--stack-justify:flex-start"
    class="m_6d731127 mantine-Stack-root">
    <div style="--group-gap:var(--mantine-spacing-md);--group-align:center;--group-justify:space-between;--group-wrap:nowrap"
        class="m_4081bf90 mantine-Group-root">
        <p style="--text-fz:var(--mantine-font-size-xl);--text-lh:var(--mantine-line-height-xl);font-weight:700"
            class="mantine-focus-auto m_b6d8b162 mantine-Text-root" data-size="xl">$203.97K</p>
        <div style="--group-gap:calc(0.25rem * var(--mantine-scale));--group-align:center;--group-justify:space-between;--group-wrap:nowrap;border-radius:4px;border:1px solid #ff8787;padding-block:calc(0.125rem * var(--mantine-scale));padding-left:calc(0.25rem * var(--mantine-scale));padding-right:calc(0.5rem * var(--mantine-scale));background:var(--mantine-color-red-1)"
            class="m_4081bf90 mantine-Group-root">
            <div style="--ti-size:var(--ti-size-sm);--ti-bg:var(--mantine-color-red-7);--ti-color:var(--mantine-color-white);--ti-bd:calc(0.0625rem * var(--mantine-scale)) solid transparent"
                class="m_7341320d mantine-ThemeIcon-root" data-size="sm" color="red.7"><svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="tabler-icon tabler-icon-arrow-up-right ">
                    <path d="M17 7l-10 10"></path>
                    <path d="M8 7l9 0l0 9"></path>
                </svg></div>
            <p style="color:var(--mantine-color-red-7);font-size:var(--mantine-font-size-sm)"
                class="mantine-focus-auto m_b6d8b162 mantine-Text-root">+1.5%</p>
        </div>
    </div>
    <div style="--stack-gap:calc(0.5rem * var(--mantine-scale));--stack-align:stretch;--stack-justify:flex-start"
        class="m_6d731127 mantine-Stack-root">
        <div class="m_db6d6462 mantine-Progress-root">
            <div style="--progress-section-width:51.325760456593706%;--progress-section-color:var(--mantine-color-blue-filled)"
                class="m_2242eb65 mantine-Progress-section" role="progressbar" aria-valuemax="100" aria-valuemin="0"
                aria-valuenow="51.325760456593706" aria-valuetext="51.325760456593706%"></div>
        </div>
        <div style="--group-gap:var(--mantine-spacing-md);--group-align:center;--group-justify:space-between;--group-wrap:nowrap"
            class="m_4081bf90 mantine-Group-root">
            <p style="white-space:normal;overflow-wrap:break-word;word-break:break-word"
                class="mantine-focus-auto m_b6d8b162 mantine-Text-root">GCP</p>
            <div style="--group-gap:calc(0.25rem * var(--mantine-scale));--group-align:center;--group-justify:space-between;--group-wrap:nowrap;border-radius:4px;border:1px solid #ff8787;padding-block:calc(0.125rem * var(--mantine-scale));padding-left:calc(0.25rem * var(--mantine-scale));padding-right:calc(0.5rem * var(--mantine-scale));background:var(--mantine-color-red-1)"
                class="m_4081bf90 mantine-Group-root">
                <div style="--ti-size:var(--ti-size-sm);--ti-bg:var(--mantine-color-red-7);--ti-color:var(--mantine-color-white);--ti-bd:calc(0.0625rem * var(--mantine-scale)) solid transparent"
                    class="m_7341320d mantine-ThemeIcon-root" data-size="sm" color="red.7"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="tabler-icon tabler-icon-arrow-up-right ">
                        <path d="M17 7l-10 10"></path>
                        <path d="M8 7l9 0l0 9"></path>
                    </svg></div>
                <p style="color:var(--mantine-color-red-7);font-size:var(--mantine-font-size-sm)"
                    class="mantine-focus-auto m_b6d8b162 mantine-Text-root">+28.8%</p>
            </div>
        </div>
    </div>
    <div style="--stack-gap:calc(0.5rem * var(--mantine-scale));--stack-align:stretch;--stack-justify:flex-start"
        class="m_6d731127 mantine-Stack-root">
        <div class="m_db6d6462 mantine-Progress-root">
            <div style="--progress-section-width:48.67423954340629%;--progress-section-color:var(--mantine-color-blue-filled)"
                class="m_2242eb65 mantine-Progress-section" role="progressbar" aria-valuemax="100" aria-valuemin="0"
                aria-valuenow="48.67423954340629" aria-valuetext="48.67423954340629%"></div>
        </div>
        <div style="--group-gap:var(--mantine-spacing-md);--group-align:center;--group-justify:space-between;--group-wrap:nowrap"
            class="m_4081bf90 mantine-Group-root">
            <p style="white-space:normal;overflow-wrap:break-word;word-break:break-word"
                class="mantine-focus-auto m_b6d8b162 mantine-Text-root">AWS</p>
            <div style="--group-gap:calc(0.25rem * var(--mantine-scale));--group-align:center;--group-justify:space-between;--group-wrap:nowrap;border-radius:4px;border:1px solid #69db7c;padding-block:calc(0.125rem * var(--mantine-scale));padding-left:calc(0.25rem * var(--mantine-scale));padding-right:calc(0.5rem * var(--mantine-scale));background:var(--mantine-color-green-1)"
                class="m_4081bf90 mantine-Group-root">
                <div style="--ti-size:var(--ti-size-sm);--ti-bg:var(--mantine-color-green-7);--ti-color:var(--mantine-color-white);--ti-bd:calc(0.0625rem * var(--mantine-scale)) solid transparent"
                    class="m_7341320d mantine-ThemeIcon-root" data-size="sm" color="green.7"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="tabler-icon tabler-icon-arrow-down-right ">
                        <path d="M7 7l10 10"></path>
                        <path d="M17 8l0 9l-9 0"></path>
                    </svg></div>
                <p style="color:var(--mantine-color-green-7);font-size:var(--mantine-font-size-sm)"
                    class="mantine-focus-auto m_b6d8b162 mantine-Text-root">-17.1%</p>
            </div>
        </div>
    </div>
</div>
`
const mantineStyles = `
    <style data-mantine-styles="classes">
        .mantine-Stack-root {
            display: flex;
            flex-direction: column;
            font-family:'Montserrat' !important;
        }

        .mantine-Group-root {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 10px 0px;
        }
        
        .tabler-icon-arrow-up-right{
          color: #fa5252;
        }
        
        .tabler-icon-arrow-down-right{
          color: #40c057;
        }

        .mantine-Progress-section {
            width: var(--progress-section-width, 0%);
        }

        .mantine-Progress-root {
            height: 8px;
            background-color: #e9ecef;
            border-radius: 4px;
            overflow: hidden;
        }

        .mantine-Progress-section {
            height: 100%;
            background-color: #4f46e5;
            transition: width 0.2s ease;
            width: var(--progress-section-width, 0%);
        }
        
        .mantine-ThemeIcon-root {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
        }

        .mantine-Text-root {
            margin: 0;
        }
    </style>
`
const htmlToPng = async () => {
    const fullHtml = `
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet">
      <style>
          :root {
              --mantine-scale: 1;
              --mantine-spacing-md: 1rem;
              --mantine-font-size-xl: 1.25rem;
              --mantine-line-height-xl: 1.4;
              --mantine-font-size-sm: 0.875rem;
              --mantine-color-red-1: #fff5f5;
              --mantine-color-red-7: #fa5252;
              --mantine-color-green-1: #ebfbee;
              --mantine-color-green-7: #40c057;
              --mantine-color-blue-filled: #228be6;
              --ti-size-sm: 1.5rem;
          }
          body {
              margin: 0;
              padding: 20px;
              background-color: #ffffff;
              font-family: 'Montserrat', sans-serif;
          }
      </style>
      ${mantineStyles}
  </head>
  <body>
      ${html}
  </body>
  </html>
`
    const imageOptions = {
        html: fullHtml,
        type: "png",
        quality: 100,
        pixelRatio: 2,
        width: 800,
        height: 600,
        backgroundColor: "#ffffff",
        puppeteer: {
            executablePath:
              "/opt/render/.cache/puppeteer/chrome/linux-134.0.6998.35/chrome-linux64/chrome",
              headless: true,
              args: ["--no-sandbox", "--disable-setuid-sandbox"],
          }
    }
    const buffer = (await nodeHtmlToImage(imageOptions))
    return buffer
}

// Importing required modules
const express = require('express');
const app = express();

// Middleware to parse JSON request body
app.use(express.json());

// Sample endpoint to fetch user data
app.get('/api/users', (req: any, res: { json: (arg0: { id: number; name: string; email: string; }[]) => void; }) => {
    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
    ];

    res.json(users); // Sending a response with the users data
});

// Sample endpoint to add a new user
app.get('/get-image', (req: any, res: { setHeader: (arg0: string, arg1: string) => void; send: (arg0: any) => void; status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; }) => {
    htmlToPng()
        .then((buffer) => {
            res.setHeader('Content-Type', 'image/png');
            res.send(buffer);
        })
        .catch((error) => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        });
});

// Server listening on port 3000
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});