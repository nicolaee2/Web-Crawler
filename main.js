const CrawlerSEO = require('./app/Crawler/CrawlerSEO');

async function main() {

    if (process.argv.length < 3) {
        console.log('Usage: node main.js <url>');
        process.exit(-1);
    }

    if (process.argv.length > 3) {
        console.log('Usage: node main.js <url>');
        process.exit(-2);
    }

    const url = process.argv[2];

    const crawler = new CrawlerSEO(url);
}

main()
    .then(() => {
        console.log('Done!');
    })
    .catch((e) => {
        console.log(e);
    });