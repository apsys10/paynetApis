"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pgp = require('pg-promise')();
var db = pgp({
    database: 'users',
    port: 5432,
    user: 'postgres',
    password: 'server.123'
});
exports.default = db;
