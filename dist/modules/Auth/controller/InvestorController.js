"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
const tsyringe_1 = require("tsyringe");
const utils_1 = require("../../../infrastruture/utils");
const Register_1 = __importDefault(require("../application/Investor/Register"));
const Login_1 = __importDefault(require("../application/Investor/Login"));
const Forgotpassword_1 = __importDefault(require("../application/Investor/Forgotpassword"));
const Changepassword_1 = __importDefault(require("../application/Investor/Changepassword"));
const VerifyEmail_1 = __importDefault(require("../application/Investor/VerifyEmail"));
let AuthController = class AuthController {
    constructor(addUser, login, forgotpassword, changepassword, verifyEmail) {
        this.addUser = addUser;
        this.login = login;
        this.forgotpassword = forgotpassword;
        this.changepassword = changepassword;
        this.verifyEmail = verifyEmail;
    }
    //Register investor
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createuser = yield this.addUser.execute(req.body);
                if (createuser === "emailExist") {
                    return new utils_1.Http().Response({
                        res: res,
                        statuscode: 401,
                        message: "Email already taken",
                    });
                }
                if (createuser === "phoneExist") {
                    return new utils_1.Http().Response({
                        res: res,
                        statuscode: 402,
                        message: "Phone already taken",
                    });
                }
                new utils_1.Http().Response({
                    res: res,
                    statuscode: 200,
                    message: "User account created",
                    data: createuser
                });
            }
            catch (err) {
                new utils_1.Http().Response({
                    res: res,
                    statuscode: 500,
                    message: err.message
                });
            }
        });
    }
    //login investor
    Login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const token = yield this.login.execute(email, password);
                if (!token) {
                    return new utils_1.Http().Response({
                        res: res,
                        statuscode: 401,
                        message: "User not authorized",
                    });
                }
                const data = {
                    token: token.token,
                    firstname: token.firstname,
                    id: token.id,
                    email: token.email
                };
                new utils_1.Http().Response({
                    res: res,
                    statuscode: 200,
                    message: "User authorized",
                    data: data
                });
            }
            catch (err) {
                new utils_1.Http().Response({
                    res: res,
                    statuscode: 500,
                    message: err.message
                });
            }
        });
    }
    //forgotpassword
    Forgotpassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, url } = req.body;
                const user = yield this.forgotpassword.execute(email, url);
                if (user === false) {
                    return new utils_1.Http().Response({
                        res: res,
                        statuscode: 404,
                        message: "User not found",
                    });
                }
                new utils_1.Http().Response({
                    res: res,
                    statuscode: 200,
                    message: "User authorized",
                    data: user
                });
            }
            catch (err) {
                new utils_1.Http().Response({
                    res: res,
                    statuscode: 500,
                    message: err.message
                });
            }
        });
    }
    //changepassword
    Changepassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { token, password } = req.body;
                const payload = {
                    token,
                    password: password
                };
                const user = yield this.changepassword.execute(payload);
                new utils_1.Http().Response({
                    res: res,
                    statuscode: 200,
                    message: "User password updated",
                    data: user
                });
            }
            catch (err) {
                new utils_1.Http().Response({
                    res: res,
                    statuscode: 500,
                    message: err.message
                });
            }
        });
    }
    verify(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { token } = req.body;
                const user = yield this.verifyEmail.execute(token);
                if (user === false) {
                    new utils_1.Http().Response({
                        res: res,
                        statuscode: 400,
                        message: "Account Not Verified",
                    });
                }
                new utils_1.Http().Response({
                    res: res,
                    statuscode: 200,
                    message: "Account Verified",
                    data: user
                });
            }
            catch (err) {
                new utils_1.Http().Response({
                    res: res,
                    statuscode: 500,
                    message: err.message
                });
            }
        });
    }
};
AuthController = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [Register_1.default,
        Login_1.default,
        Forgotpassword_1.default,
        Changepassword_1.default,
        VerifyEmail_1.default])
], AuthController);
exports.default = AuthController;
