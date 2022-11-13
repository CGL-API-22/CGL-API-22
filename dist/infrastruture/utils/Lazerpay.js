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
const lazerpay_node_sdk_1 = __importDefault(require("lazerpay-node-sdk"));
class LazerPay {
    constructor() {
        this.lazerpay = new lazerpay_node_sdk_1.default("pk_test_g1iGzCBLTPLwbEFdLis3t5iQDuGEYTqyBKanRQSOenYFzUzLVa", "pk_test_g1iGzCBLTPLwbEFdLis3t5iQDuGEYTqyBKanRQSOenYFzUzLVa");
    }
    //start depositing
    initialPayment(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transactionpayload = {
                    reference: payload.reference,
                    customer_name: payload.customer_name,
                    customer_email: payload.customer_email,
                    coin: 'BUSD',
                    currency: 'NGN',
                    amount: payload.amount,
                };
                const response = yield this.lazerpay.Payment.initializePayment(transactionpayload);
                return response;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    ;
    //finanlize depositing
    finalizePayment(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newpayload = {
                    identifier: payload.reference
                };
                const response = yield this.lazerpay.Payment.confirmPayment(newpayload);
                return response;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    //crypto withdrawal
    withdrawal(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction_payload = {
                amount: payload.amount,
                recipient: payload.recipient,
                coin: 'BUSD',
                blockchain: 'Binance Smart Chain',
            };
            try {
                const response = yield this.lazerpay.Payout.transferCrypto(transaction_payload);
                return response;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.default = LazerPay;
