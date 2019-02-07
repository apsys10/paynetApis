"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var PostGetRouter_1 = require("./routes/PostGetRouter");
var tokenverify_1 = require("./controllers/tokenverify");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    };
    Server.prototype.routes = function () {
        var router;
        router = express.Router();
        //this.app.use('/' , router);
        this.app.use('/', tokenverify_1.default.checkJwt, PostGetRouter_1.default);
    };
    return Server;
}());
exports.default = new Server().app;
// import express = require('express');
// // Create a new express application instance
// const app: express.Application = express();
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });
