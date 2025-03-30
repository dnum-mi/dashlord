onst puppeteer = require('puppeteer');
const process = require( 'process' );

(async () => {
    site = process.argv[2];
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(site);

    // Exécuter dsfr.version dans la console de la page
    const dsfrVersion = await page.evaluate(() => {
        return window.dsfr?.version || 'Version non trouvée';
    });

    console.log(`${dsfrVersion}`);

    await browser.close();
})();
