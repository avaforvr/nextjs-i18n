const express = require('express');
const next = require('next');
const { parse } = require('url');
const nextI18NextMiddleware = require('next-i18next/middleware').default;
const nextI18next = require('./utils/i18n');

const nextServer = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = nextServer.getRequestHandler();

/*function render(req, res, url) {
    const parsed = parse(url, true);
    // 中间件创建的 query 与 url 中的 query 合并
    parsed.query = Object.assign({}, req.query, parsed.query);
    // console.log('before handler', parsed)
    return handler(req, res, parsed);
}*/

(async () => {
    //prepare or make the next.js code ready to use another server for handling SSR
    await nextServer.prepare();

    const app = express();
    app.use(nextI18NextMiddleware(nextI18next));

    app.get('*', (req, res) => {
        // return render(req, res, req.url);
        return handler(req, res, parse(req.url, true))
    });

    await app.listen(3000);
    console.log(`> Ready on http://localhost:3000`);
})();
