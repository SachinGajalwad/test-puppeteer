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

const app = express();
const CHROME_PATH = "/usr/bin/google-chrome-stable";

app.get("/test", async (req:any, res:any) => {
    try {
        const browser = await puppeteer.launch({
            executablePath: CHROME_PATH,
            headless: "new",
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
        });

        const page = await browser.newPage();
        await page.goto("https://developer.chrome.com/");
        const title = await page.title();

        await browser.close();
        res.json({ title });
    } catch (error:any) {
        res.status(500).json({ error: error.message || "Unknown error" });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));