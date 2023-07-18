const CrawlerAbstract = require('./CrawlerAbstract');
const JSDOM = require("jsdom").JSDOM;

class CrawlerSEO extends CrawlerAbstract {

    /**
     * Constructor for the CrawlerSEO class
     *
     * @param url The URL to crawl
     */
    constructor(url) {
        super(url);
        this.report = {};
    }

    getURLsFromHTML(htmlBody, baseURL) {
        const dom = new JSDOM(htmlBody);
        const links = dom.window.document.querySelectorAll("a");
        const urls = [];
        for (let i = 0; i < links.length; i++) {
            let url = links[i].href;

            if (url.startsWith('/')) {
                url = baseURL + url;
            }

            if (url) {
                urls.push(url);
            }
        }
        return urls;
    }

    async crawl() {
        return Promise.resolve(undefined);
    }
}

module.exports = CrawlerSEO;