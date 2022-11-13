"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getCities = exports.getStates = exports.getCountries = exports.getAuth = void 0;
var axios_1 = require("axios");
var getAuth = function () { return __awaiter(void 0, void 0, void 0, function () {
    var header1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                header1 = {
                    "api-token": "LC1wLTXFS7M4q1u3w2Bydm5nLqHP1Nsu3IK5RtPWcj-kt1popgL1coLIRiQnxnAV_vI",
                    'Accept': "application/json",
                    "user-email": "benjaminambrose99@gmail.com"
                };
                return [4 /*yield*/, axios_1["default"].get("https://www.universal-tutorial.com/api/getaccesstoken", {
                        headers: header1
                    }).then(function (response) { return console.log(response); })["catch"](function (response) { return console.log(response); })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.getAuth = getAuth;
var header = {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJiZW5qYW1pbmFtYnJvc2U5OUBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJMQzF3TFRYRlM3TTRxMXUzdzJCeWRtNW5McUhQMU5zdTNJSzVSdFBXY2ota3QxcG9wZ0wxY29MSVJpUW54bkFWX3ZJIn0sImV4cCI6MTY2MDczMDU2MX0.haooxdt07uTehKRGVPBPffTlsat5sfejEWDf6xkeUPQ",
    'Accept': "application/json"
};
var getCountries = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1["default"].get("https://www.universal-tutorial.com/api/countries", {
                    headers: header
                }).then(function (response) {
                    console.log(response);
                })["catch"](function (response) {
                    console.log(response);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.getCountries = getCountries;
var getStates = function (country) {
    axios_1["default"].get("https://www.universal-tutorial.com/api/states/".concat(country), {
        headers: header
    }).then(function (response) { return response; })["catch"](function (response) { return response; });
};
exports.getStates = getStates;
var getCities = function (state) {
    axios_1["default"].get("https://www.universal-tutorial.com/api/cities/".concat(state), {
        headers: header
    }).then(function (response) { return response; })["catch"](function (response) { return response; });
};
exports.getCities = getCities;
