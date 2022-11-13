"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var tsyringe_1 = require("tsyringe");
var Http = /** @class */ (function () {
    function Http() {
    }
    Http.prototype.Response = function (_a) {
        var res = _a.res, statuscode = _a.statuscode, message = _a.message, data = _a.data;
        var response = res.json({
            status: statuscode,
            message: message,
            data: data
        });
        return response;
    };
    Http = __decorate([
        (0, tsyringe_1.injectable)()
    ], Http);
    return Http;
}());
exports["default"] = Http;
