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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const tsyringe_1 = require("tsyringe");
let Emailer = class Emailer {
    constructor(accessKeyId, secretAccessKey, region) {
        aws_sdk_1.default.config.update({ region: 'us-east-1' });
        this.AWS_SES = new aws_sdk_1.default.SES({ accessKeyId, secretAccessKey, region });
    }
    sendEmail(recipientEmail, recipientName) {
        let params = {
            Source: 'deborah@sunglo.io',
            Destination: {
                ToAddresses: [
                    recipientEmail
                ],
            },
            ReplyToAddresses: [],
            Message: {
                Body: {
                    Html: {
                        Charset: 'UTF-8',
                        Data: '',
                    },
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: `Hello, ${recipientName}!`,
                }
            },
        };
        return this.AWS_SES.sendEmail(params).promise();
    }
    sendTemplateEmail(payload, otp) {
        var templatePromise = new aws_sdk_1.default.SES({ apiVersion: '2010-12-01' }).getTemplate({ TemplateName: 'ExampleTemplate' }).promise();
        templatePromise.then((data) => {
            var _a;
            let params = {
                Source: 'deborah@sunglo.io',
                Template: (_a = data.Template) === null || _a === void 0 ? void 0 : _a.TemplateName,
                Destination: {
                    ToAddresses: [
                        'maceteligolden@gmail.com'
                    ],
                },
                ReplyToAddresses: [],
                TemplateData: `{ \"name\":\"${otp}\"}`
            };
            return this.AWS_SES.sendTemplatedEmail(params).promise();
        }).catch(function (err) {
            console.error(err, err.stack);
        });
    }
};
Emailer = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [String, String, String])
], Emailer);
exports.default = Emailer;
