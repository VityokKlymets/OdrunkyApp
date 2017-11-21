'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    albumFolder: __dirname + '/static/media/albums',
    serverRoot: __dirname,
    apiPrefix: 'http://localhost:3001',
    serverPort: process.env.PORT,
    db: {
        name: 'odrunky_app',
        host: 'vityokklymets-odrunky-school-5675027',
        port: 27017
    }
};