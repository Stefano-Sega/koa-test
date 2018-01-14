'use strict';

const json = require('koa-json');

module.exports = (app, route) => {
    app.use(json());
    
    app.use(route.get('/heartbeat', async (ctx) => {
        ctx.body = {
            ok: true
        };
    }));
};
