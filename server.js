const express = require('express');
const next = require('next');
const { parse } = require('url');
const nextI18NextMiddleware = require('next-i18next/middleware').default;
const nextI18next = require('./utils/i18n');

const nextServer = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = nextServer.getRequestHandler();

(async () => {
    //prepare or make the next.js code ready to use another server for handling SSR
    await nextServer.prepare();

    const app = express();
    app.use(nextI18NextMiddleware(nextI18next));

    app.get('*', (req, res) => {
        return handler(req, res, parse(req.url, true))
    });

    await app.listen(3000);
    console.log(`> Ready on http://localhost:3000`);
})();
