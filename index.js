const Koa = require('koa');
const route = require('koa-route');
const compress = require('koa-compress');
const serve = require('koa-static');

const app = new Koa();

require(__dirname + '/routes/')(app, route);

// Serve static files
app.use(serve(path.join(__dirname, 'public')));

// Compress
app.use(compress());

app.listen(process.env.PORT || 3333, () => {
    const host = server.address().address;
    const port = server.address().port;
    debug('Example app listening at http://%s:%s', host, port);
});