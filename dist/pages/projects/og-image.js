"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateOgImage = generateOgImage;
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const {
  createHash
} = require('crypto');
async function generateOgImage(props) {
  const params = new URLSearchParams(props);
  const url = `file:${path.join(process.cwd(), `src/pages/projects/og-image.html?${params}`)}`;
  const hash = createHash('md5').update(url).digest('hex');
  const ogImageDir = path.join(process.cwd(), `public/og`);
  const imageName = `${hash}.png`;
  const imagePath = `${ogImageDir}/${imageName}`;
  const publicPath = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/og/${imageName}`;
  try {
    fs.statSync(imagePath);
    return publicPath;
  } catch (error) {
    // file does not exists, so we create it
  }
    (async () => {
      const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });
      const browser = await puppeteer.launch({
        headless: true
      });
      const page = await browser.newPage();
      await page.setViewport({
        width: 1200,
        height: 630
      });
      await page.goto(url, {
        waitUntil: 'networkidle0'
      });
      const buffer = await page.screenshot();
      await browser.close();
      fs.mkdirSync(ogImageDir, {
        recursive: true
      });
      fs.writeFileSync(imagePath, buffer);
      return publicPath;
    })();
  
}