"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InvestorRoutes_1 = __importDefault(require("../modules/Auth/InvestorRoutes"));
function setModuleRouters(app) {
    //Investor
    app.use('/api/v1/auth', InvestorRoutes_1.default);
}
exports.default = setModuleRouters;
