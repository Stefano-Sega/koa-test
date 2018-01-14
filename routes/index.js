'use strict';

const heartbeat = require(__dirname + '/heartbeat');

module.exports = (app, route) => {
    heartbeat(app, route);
};
