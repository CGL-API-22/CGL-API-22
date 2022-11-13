"use strict";
exports.__esModule = true;
exports.verifyToken = exports.generateToken = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var generateToken = function (payload, secret) {
    var token = jsonwebtoken_1["default"].sign(payload, secret);
    return token;
};
exports.generateToken = generateToken;
var verifyToken = function (payload, secret) {
    var result = jsonwebtoken_1["default"].verify(payload, secret);
    if (!result) {
        return false;
    }
    return true;
};
exports.verifyToken = verifyToken;
