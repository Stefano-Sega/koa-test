const Koa = require('koa');
const route = require('koa-route');
const compress = require('koa-compress');
const serve = require('koa-static');
const path = require('path');

const app = new Koa();

require(__dirname + '/routes/')(app, route);

// Serve static files
app.use(serve(path.join(__dirname, 'public')));

// Compress
app.use(compress());

const serverPort = process.env.PORT || 3333;
app.listen(serverPort, () => {
    console.log(`Listeining on Port ${serverPort}`);
});