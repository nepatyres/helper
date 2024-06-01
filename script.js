const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://dmarket.com/ingame-items/item-list/dota2-skins?title=onibi');

    const text = await page.evaluate(() => {
        const element = document.querySelector('price.ng-star-inserted');
        return element ? element.innerText : '';
    });
    await browser.close();
    return text
})().then(text => {
    console.log(text);
}).catch(error => {
    console.error('Error:', error);
});


// (async () => {
//     // Launch the browser
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();

//     // Go to the webpage
//     await page.goto('https://steamcommunity.com/market/search?appid=730&q=Kilowatt+Case');
//     // Extract the desired element
//     const text = await page.evaluate(() => {
//         const element = document.querySelector('.sale_price');
//         return element ? element.innerText : '';
//     });

//     console.log(text);

//     // Close the browser
//     await browser.close();

//     // Here you can write the text to a file or database if needed
// })();








// (async () => {
//     // Launch the browser
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();

//     // Go to the webpage
//     await page.goto('https://steamcommunity.com/market/listings/570/Onibi?filter=onibi+NOT+%22upgrade+style+15+locked%22');
//     // Extract the desired element
//     const text = await page.evaluate(() => {
//         const element = document.querySelector('span.market_listing_price');
//         return element ? element.innerText : '';
//     });

//     console.log(text);
//     if(text.slice(-4) === 'pуб.'){
//         console.log(text.slice(0, 4))
//     }

    

//     // Close the browser
//     await browser.close();

//     // Here you can write the text to a file or database if needed
// })();