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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class PayStack {
    constructor() {
        this.hostname = 'https://api.paystack.co';
        this.SECRET_KEY = 'sk_test_70ee6fc0c1e234888ba4dab22794b6b0ac758638';
    }
    //initialize transaction
    initializeTransaction(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                "email": payload.email,
                "amount": payload.amount,
                "reference": payload.reference
            };
            return yield axios_1.default.post(this.hostname + '/transaction/initialize', params, {
                headers: {
                    Authorization: 'Bearer ' + this.SECRET_KEY,
                    'Content-Type': 'application/json'
                }
            }).then((success) => {
                console.log(success);
            }).catch((error) => {
                console.log(error);
            });
        });
    }
    //create transaction receipent 
    createTransferRecipient(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                "type": payload.type,
                "name": payload.name,
                "account_number": payload.account_number,
                "bank_code": payload.bank_code,
                "currency": payload.currency
            };
            return yield axios_1.default.post(this.hostname + '/transferrecipient', params, {
                headers: {
                    Authorization: 'Bearer ' + this.SECRET_KEY,
                    'Content-Type': 'application/json'
                }
            });
        });
    }
    //fetch transaction receipent
    fetchTransferRecipient(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield axios_1.default.get(this.hostname + `/transferrecipient/${payload.id_or_code}`, {
                headers: {
                    Authorization: 'Bearer ' + this.SECRET_KEY,
                    'Content-Type': 'application/json'
                }
            });
        });
    }
    //delete transaction recipient
    deleteTransferRecipient(id_or_code) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield axios_1.default.delete(this.hostname + `/transferrecipient/${id_or_code}`, {
                headers: {
                    Authorization: 'Bearer ' + this.SECRET_KEY,
                }
            });
        });
    }
    //check transaction status
    verifyTransaction(reference) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(this.hostname + `/transaction/verify/${reference}`, {
                headers: {
                    Authorization: 'Bearer ' + this.SECRET_KEY,
                    'Content-Type': 'application/json'
                }
            });
            return response;
        });
    }
    //initialize withdrawal
    initializeWithdrawal(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                "source": payload.source,
                "reason": payload.reason,
                "amount": payload.amount,
                "recipient": payload.recipient
            };
            return yield axios_1.default.post(this.hostname + '/transfer', params, {
                headers: {
                    Authorization: 'Bearer ' + this.SECRET_KEY,
                    'Content-Type': 'application/json'
                }
            });
        });
    }
    //finalize withdrawal 
    finalizeWithdrawal(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                "transfer_code": payload.transfer_code,
                "otp": payload.otp
            };
            return yield axios_1.default.post(this.hostname + '/transfer/finalize_transfer', params, {
                headers: {
                    Authorization: 'Bearer ' + this.SECRET_KEY,
                    'Content-Type': 'application/json'
                }
            });
        });
    }
    //deposit money 
    deposit(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                "email": payload.email,
                "amount": payload.amount,
                "bank": {
                    "code": payload.bank,
                    "account_number": payload.account_no
                },
                "birthday": payload.birthday
            };
            return yield axios_1.default.post(this.hostname + '/charge', params, {
                headers: {
                    Authorization: 'Bearer ' + this.SECRET_KEY,
                    'Content-Type': 'application/json'
                }
            });
        });
    }
    //submit otp to finish transaction
    submitOTP(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                "otp": payload.otp,
                "reference": payload.reference
            };
            const response = yield axios_1.default.post(this.hostname + '/charge/submit_otp', params, {
                headers: {
                    Authorization: 'Bearer ' + this.SECRET_KEY,
                    'Content-Type': 'application/json'
                }
            });
            return response;
        });
    }
    //get all banks
    getBanks() {
        return __awaiter(this, void 0, void 0, function* () {
            yield axios_1.default.get(this.hostname + '/bank', {
                headers: {
                    Authorization: 'Bearer ' + this.SECRET_KEY,
                }
            }).then((response) => console.log(response.data)).catch((response) => console.log(response));
        });
    }
}
exports.default = PayStack;
