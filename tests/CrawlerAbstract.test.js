const CrawlerAbstract = require('../app/Crawler/CrawlerAbstract');
const { test, expect, describe } = require('@jest/globals');

describe('Normalize URL', () => {
    const crawler = new CrawlerAbstract();

    test('A normalized URL should return itself', () => {
        const input = "example.com";
        const expected = "example.com";
        const output = crawler._normalizeUrl(input);

        expect(output).toBe(expected);
    });

    test('The protocol https should be deleted', () => {
        const input = "https://example.com";
        const expected = "example.com";
        const output = crawler._normalizeUrl(input);

        expect(output).toBe(expected);
    });

    test('The protocol http should be deleted', () => {
        const input = "http://example.com";
        const expected = "example.com";
        const output = crawler._normalizeUrl(input);

        expect(output).toBe(expected);
    });

    test('The path shouldn\'t be deleted', () => {
        const input = "example.com/path";
        const expected = "example.com/path";
        const output = crawler._normalizeUrl(input);

        expect(output).toBe(expected);
    });

    test('Trailling slash should be deleted', () => {
        const input = "example.com/path/";
        const expected = "example.com/path";
        const output = crawler._normalizeUrl(input);

        expect(output).toBe(expected);
    });

    test('The URL should be case insensitive', () => {
        const input = "ExAmPlE.cOm/pAtH";
        const expected = "example.com/path";
        const output = crawler._normalizeUrl(input);

        expect(output).toBe(expected);
    });

    test('The URL shouldn\'t have www', () => {
        const input = "www.example.com";
        const expected = "example.com";
        const output = crawler._normalizeUrl(input);

        expect(output).toBe(expected);
    });

    test('Invalid URL should return null', () => {
        const input = "invalid url";
        const expected = null;
        const output = crawler._normalizeUrl(input);

        expect(output).toBe(expected);
    });

    test('The URL shouldn\'t contain encoded characters', () => {
        const input = "example.com/%41";
        const expected = "example.com/A";
        const output = crawler._normalizeUrl(input);

        expect(output).toBe(expected);
    });
});
