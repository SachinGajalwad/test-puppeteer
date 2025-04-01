import express from "express"
const puppeteer = require("puppeteer");

const app = express()

app.get("/scrape", async(req:any, res:any) => {
    const browser = await puppeteer.launch({
        args: [
          "--disable-setuid-sandbox",
          "--no-sandbox",
          "--single-process",
          "--no-zygote",
        ],
        executablePath:'/usr/bin/google-chrome-stable',
      });
      try {
        const page = await browser.newPage();
    
        await page.goto("https://developer.chrome.com/");
    
        // Set screen size
        await page.setViewport({ width: 1080, height: 1024 });
    
        // Type into search box
        await page.type(".search-box__input", "automate beyond recorder");
    
        // Wait and click on first result
        const searchResultSelector = ".search-box__link";
        await page.waitForSelector(searchResultSelector);
        await page.click(searchResultSelector);
    
        // Locate the full title with a unique string
        const textSelector = await page.waitForSelector(
          "text/Customize and automate"
        );
        const fullTitle = await textSelector.evaluate((el:any) => el.textContent);
    
        // Print the full title
        const logStatement = `The title of this blog post is ${fullTitle}`;
        console.log(logStatement);
        res.send(logStatement);
      } catch (e:any) {
        console.error(e);
        res.send(`Something went wrong while running Puppeteer: ${e}`);
      } finally {
        await browser.close();
      }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})