// const express = require("express");
// const puppeteer = require("puppeteer-core");
// // const chromium = require("chromium");

// const app = express();

// app.get("/test", async (req: any, res: any) => {
//     try {
//         const browser = await puppeteer.launch({
//             executablePath: '/opt/render/project/src/server/node_modules/chromium/lib/chromium/chrome-linux/chrome',
//             headless: "new",
//             args: ["--no-sandbox", "--disable-setuid-sandbox"],
//         });
// // console.log(chromium.path);

//         const page = await browser.newPage();
//         await page.goto("https://developer.chrome.com/");
//         const title = await page.title();

//         await browser.close();
//         res.json({ title });
//     } catch (error) {
//         res.status(500).json({ error: error instanceof Error ? error.message : "An unknown error occurred" });
//     }
// });

// app.listen(3000, () => console.log("Server running on port 3000"));

const express = require("express");
const puppeteer = require("puppeteer-core");
// const { execSync } = require("child_process");
const chromium = require("chromium");
const app = express();
// const CHROME_PATH = "/usr/bin/google-chrome-stable";

// try {
//     const chromePath = execSync("which google-chrome-stable").toString().trim();
//     console.log("Google Chrome Path:", chromePath);
// } catch (error:any) {
//     console.error("Google Chrome not found:", error.message);
// }
const fullHtml = `<!DOCTYPE html>
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

  </head>
  <body>
      <svg viewBox="0 0 1000 400" width="1000" height="400"><style>
		.s0 { fill: #000000 } 
		.s1 { fill: #ebfbee;stroke: #2fc149;stroke-miterlimit:100 } 
		.s2 { fill: #59d66e } 
		.s3 { fill: #59d76e } 
		.s4 { fill: #e9ecef } 
		.s5 { fill: #4f46e5 } 
		.s6 { fill: none;stroke: #808080;stroke-miterlimit:100 } 
	</style><text id="period" class="s0" x="100" y="70" font-size="24" text-anchor="middle" fill="black">Last Month</text><text id="value" class="s0" x="90" y="125" font-size="24" text-anchor="middle" fill="black">$203.97K</text><g id="trend" transform="translate(679, 97)"><rect width="79" height="30" rx="2" class="s1"></rect><path class="s2" d="M692 115h2l8-8v7h2v-11h-11v2h8l-9 8z"></path><text class="s3" x="40" y="18" font-size="14" text-anchor="middle" fill="black">+1.5%</text></g><g id="Row"><path id="Shape 5" fill-rule="evenodd" class="s4" d="m41.5 161h642c2.5 0 4.5 2 4.5 4.5 0 2.5-2 4.5-4.5 4.5h-642c-2.5 0-4.5-2-4.5-4.5 0-2.5 2-4.5 4.5-4.5z"></path><path id="Shape 5 copy" fill-rule="evenodd" class="s5" d="m41.5 161h419.5v9h-419.5c-2.5 0-4.5-2-4.5-4.5 0-2.5 2-4.5 4.5-4.5z"></path><text id="$270.67K" class="s0" x="730" y="171" font-size="16" text-anchor="middle" fill="black">$270.67K</text><g id="trend" transform="translate(679, 97)"><rect width="79" height="30" rx="2" class="s1"></rect><path class="s2" d="M692 115h2l8-8v7h2v-11h-11v2h8l-9 8z"></path><text class="s3" x="40" y="18" font-size="14" text-anchor="middle" fill="black">+28.8%</text></g><text id="All Others" class="s0" x="80" y="200" font-size="16" text-anchor="middle" fill="black">All Others</text></g><g id="Row"><path id="Shape 5" fill-rule="evenodd" class="s4" d="m41.5 161h642c2.5 0 4.5 2 4.5 4.5 0 2.5-2 4.5-4.5 4.5h-642c-2.5 0-4.5-2-4.5-4.5 0-2.5 2-4.5 4.5-4.5z"></path><path id="Shape 5 copy" fill-rule="evenodd" class="s5" d="m41.5 161h419.5v9h-419.5c-2.5 0-4.5-2-4.5-4.5 0-2.5 2-4.5 4.5-4.5z"></path><text id="$270.67K" class="s0" x="730" y="171" font-size="16" text-anchor="middle" fill="black">$270.67K</text><g id="trend" transform="translate(679, 97)"><rect width="79" height="30" rx="2" class="s1"></rect><path class="s2" d="M692 105h2l8 8v-7h2v11h-11v-2h8l-9-8z"></path><text class="s3" x="40" y="18" font-size="14" text-anchor="middle" fill="black">-17.1%</text></g><text id="All Others" class="s0" x="80" y="200" font-size="16" text-anchor="middle" fill="black">All Others</text></g></svg>
  </body>
  </html>`
app.get("/test", async (req: any, res: any) => {
    try {
        const browser = await puppeteer.launch({
            executablePath: chromium.path,
            headless: "shell",
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
        })

        const page = await browser.newPage()
        await page.setContent(fullHtml, { waitUntil: "load" })
        const screenshot = await page.screenshot({ type: "png" })
        const buffer = Buffer.from(screenshot)

        await browser.close()
        res.send(buffer)
        // const browser = await puppeteer.launch({
        //     executablePath: chromium.path,
        //     headless: "new",
        //     args: ["--no-sandbox", "--disable-setuid-sandbox"],
        // });

        // const page = await browser.newPage();
        // await page.goto("https://developer.chrome.com/");
        // const title = await page.title();

        // await browser.close();
        // res.json({ title });
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Unknown error" });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));