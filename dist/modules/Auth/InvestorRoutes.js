"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const InvestorController_1 = __importDefault(require("./controller/InvestorController"));
const tsyringe_1 = require("tsyringe");
const authRouter = (0, express_1.Router)();
const authController = tsyringe_1.container.resolve(InvestorController_1.default);
authRouter.post('/register', (req, res) => authController.register(req, res));
authRouter.post('/login', (req, res) => authController.Login(req, res));
authRouter.post('/forgotpassword', (req, res) => authController.Forgotpassword(req, res));
authRouter.patch('/changepassword', (req, res) => authController.Changepassword(req, res));
authRouter.post('/verifyaccount', (req, res) => authController.verify(req, res));
exports.default = authRouter;
