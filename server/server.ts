import express from "express"
import puppeteer from "puppeteer-extra"
import StealthPlugin from "puppeteer-extra-plugin-stealth"

const app = express()

async function generateHelloWorldScreenshot() {
    puppeteer.use(StealthPlugin())

    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()

    // Set page content with <h1>Hello World</h1>
    await page.setContent(`<html><body><h1>Hello World</h1></body></html>`, {
        waitUntil: "domcontentloaded",
    })

    const imageBuffer = await page.screenshot({ type: "png" })

    await browser.close()
    return imageBuffer
}

// API endpoint to generate and return the screenshot buffer
app.get("/generate-hello-world-image", async (req: express.Request, res: express.Response) => {
    console.log(req);

    try {
        const imageBuffer = await generateHelloWorldScreenshot()
        res.setHeader("Content-Type", "image/png")
        res.send(imageBuffer)
    } catch (error) {
        console.error("Error generating Hello World image:", error)
        res.status(500).send("Failed to generate image")
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})