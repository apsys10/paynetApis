"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var db_1 = require("../db");
var PostGetRouter = /** @class */ (function () {
    function PostGetRouter() {
        this.router = express_1.Router();
        this.getAllUsers = function (req, res, next) {
            db_1.default.any('select * from user_info')
                .then(function (data) {
                res.status(200)
                    .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL users'
                });
            })
                .catch(function (err) {
                return next(err);
            });
        };
        this.getUserById = function (req, res, next) {
            var id = parseInt(req.query.userId);
            db_1.default.one('select * from user_info where id = $1', id)
                .then(function (data) {
                res.status(200)
                    .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ONE user'
                });
            })
                .catch(function (err) {
                return next(err);
            });
        };
        this.routes();
    }
    PostGetRouter.prototype.routes = function () {
        this.router.post('/signup', this.controlSignUp);
        this.router.get('/user', this.getUserById);
        this.router.get('/users', this.getAllUsers);
    };
    PostGetRouter.prototype.controlSignUp = function (req, res, next) {
        db_1.default.none('insert into user_info(username, email, uniqueId,email_verified)' +
            'values(${username}, ${email},${uniqueId} ,${email_verified})', req.body)
            .then(function () {
            res.status(200)
                .json({
                status: 'success',
                message: 'Inserted user'
            });
        })
            .catch(function (err) {
            return next(err);
        });
    };
    return PostGetRouter;
}());
var pgRoutes = new PostGetRouter();
pgRoutes.routes();
exports.default = pgRoutes.router;
