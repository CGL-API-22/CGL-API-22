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
var axios_1 = require("axios");
var PayStack = /** @class */ (function () {
    function PayStack() {
        this.hostname = 'https://api.paystack.co';
        this.SECRET_KEY = 'sk_test_70ee6fc0c1e234888ba4dab22794b6b0ac758638';
    }
    //initialize transaction
    PayStack.prototype.initializeTransaction = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            "email": payload.email,
                            "amount": payload.amount,
                            "reference": payload.reference
                        };
                        return [4 /*yield*/, axios_1["default"].post(this.hostname + '/transaction/initialize', params, {
                                headers: {
                                    Authorization: 'Bearer ' + this.SECRET_KEY,
                                    'Content-Type': 'application/json'
                                }
                            }).then(function (success) {
                                console.log(success);
                            })["catch"](function (error) {
                                console.log(error);
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //create transaction receipent 
    PayStack.prototype.createTransferRecipient = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            "type": payload.type,
                            "name": payload.name,
                            "account_number": payload.account_number,
                            "bank_code": payload.bank_code,
                            "currency": payload.currency
                        };
                        return [4 /*yield*/, axios_1["default"].post(this.hostname + '/transferrecipient', params, {
                                headers: {
                                    Authorization: 'Bearer ' + this.SECRET_KEY,
                                    'Content-Type': 'application/json'
                                }
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //fetch transaction receipent
    PayStack.prototype.fetchTransferRecipient = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1["default"].get(this.hostname + "/transferrecipient/".concat(payload.id_or_code), {
                            headers: {
                                Authorization: 'Bearer ' + this.SECRET_KEY,
                                'Content-Type': 'application/json'
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //delete transaction recipient
    PayStack.prototype.deleteTransferRecipient = function (id_or_code) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1["default"]["delete"](this.hostname + "/transferrecipient/".concat(id_or_code), {
                            headers: {
                                Authorization: 'Bearer ' + this.SECRET_KEY
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //check transaction status
    PayStack.prototype.verifyTransaction = function (reference) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1["default"].get(this.hostname + "/transaction/verify/".concat(reference), {
                            headers: {
                                Authorization: 'Bearer ' + this.SECRET_KEY,
                                'Content-Type': 'application/json'
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    //initialize withdrawal
    PayStack.prototype.initializeWithdrawal = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            "source": payload.source,
                            "reason": payload.reason,
                            "amount": payload.amount,
                            "recipient": payload.recipient
                        };
                        return [4 /*yield*/, axios_1["default"].post(this.hostname + '/transfer', params, {
                                headers: {
                                    Authorization: 'Bearer ' + this.SECRET_KEY,
                                    'Content-Type': 'application/json'
                                }
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //finalize withdrawal 
    PayStack.prototype.finalizeWithdrawal = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            "transfer_code": payload.transfer_code,
                            "otp": payload.otp
                        };
                        return [4 /*yield*/, axios_1["default"].post(this.hostname + '/transfer/finalize_transfer', params, {
                                headers: {
                                    Authorization: 'Bearer ' + this.SECRET_KEY,
                                    'Content-Type': 'application/json'
                                }
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //deposit money 
    PayStack.prototype.deposit = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            "email": payload.email,
                            "amount": payload.amount,
                            "bank": {
                                "code": payload.bank,
                                "account_number": payload.account_no
                            },
                            "birthday": payload.birthday
                        };
                        return [4 /*yield*/, axios_1["default"].post(this.hostname + '/charge', params, {
                                headers: {
                                    Authorization: 'Bearer ' + this.SECRET_KEY,
                                    'Content-Type': 'application/json'
                                }
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //submit otp to finish transaction
    PayStack.prototype.submitOTP = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var params, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            "otp": payload.otp,
                            "reference": payload.reference
                        };
                        return [4 /*yield*/, axios_1["default"].post(this.hostname + '/charge/submit_otp', params, {
                                headers: {
                                    Authorization: 'Bearer ' + this.SECRET_KEY,
                                    'Content-Type': 'application/json'
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    //get all banks
    PayStack.prototype.getBanks = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1["default"].get(this.hostname + '/bank', {
                            headers: {
                                Authorization: 'Bearer ' + this.SECRET_KEY
                            }
                        }).then(function (response) { return console.log(response.data); })["catch"](function (response) { return console.log(response); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return PayStack;
}());
exports["default"] = PayStack;
