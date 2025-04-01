const express = require("express");
const puppeteer = require("puppeteer-core");
const chromium = require("chromium");

const app = express();

app.get("/test", async (req: any, res: any) => {
    try {
        const browser = await puppeteer.launch({
            executablePath: chromium.path,
            headless: "new",
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
        });

        const page = await browser.newPage();
        await page.goto("https://developer.chrome.com/");
        const title = await page.title();

        await browser.close();
        res.json({ title });
    } catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : "An unknown error occurred" });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));