"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require('express-jwt');
var jwtAuthz = require('express-jwt-authz');
var jwksRsa = require('jwks-rsa');
var TokenVerify = /** @class */ (function () {
    function TokenVerify() {
        this.checkJwt = jwt({
            secret: jwksRsa.expressJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: "https://paynet.auth0.com/.well-known/jwks.json"
            }),
            issuer: "https://paynet.auth0.com/",
            algorithms: ['RS256']
        });
        this.checkJwt;
    }
    return TokenVerify;
}());
var tv = new TokenVerify();
exports.default = tv;
