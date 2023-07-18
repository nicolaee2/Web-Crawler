/**
 * Abstract class for the crawlers
 *
 * @abstract
 * @class CrawlerAbstract
 */
class CrawlerAbstract {

    /**
     * Constructor for the CrawlerAbstract class
     *
     * @param url The URL to crawl
     */
    constructor(url) {
        this._visited = new Set();
        this._url = url;
        this._crawled = false;
    }

    /**
     * Check if the URL is valid
     *
     * @param url The URL to check
     * @returns {boolean} True if valid, false otherwise
     * @protected
     */
    _isValidUrl(url) {
        try {
            new URL(url);
        } catch (e) {
            return false;
        }
        return true;
    }

    /**
     * Normalize the URL to be crawled
     *
     * @param url The URL to normalize
     * @returns {string|null} The normalized URL or null if invalid
     * @protected
     */
    _normalizeUrl(url) {

        // if the URL isn't valid because of a missing protocol, add it
        if (this._isValidUrl(url) === false) {
            // check if a protocol is missing
            if (url.includes(':')) {
                return null;
            } else {
                url = `http://${url}`;
            }
        }

        let urlObject;
        try {
            urlObject = new URL(url);
        } catch (e) {
            return null;
        }

        url = `${urlObject.hostname}${urlObject.pathname}`;

        if (url.slice(-1) === '/') {
            url = url.slice(0, -1);
        }

        url = url.toLowerCase();

        if (url.startsWith('www.')) {
            url = url.slice(4);
        }
        // encoded characters should be decoded
        url = decodeURI(url);

        return url;
    }

    /**
     * Crawl the URL
     *
     * @returns {Promise<void>}
     * @throws {Error} If not implemented
     * @abstract
     */
    async crawl() {
        throw new Error('Not implemented');
    }

}

module.exports = CrawlerAbstract;
