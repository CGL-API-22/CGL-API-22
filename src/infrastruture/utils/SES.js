"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var aws_sdk_1 = require("aws-sdk");
var tsyringe_1 = require("tsyringe");
var Emailer = /** @class */ (function () {
    function Emailer(accessKeyId, secretAccessKey, region) {
        aws_sdk_1["default"].config.update({ region: 'us-east-1' });
        this.AWS_SES = new aws_sdk_1["default"].SES({ accessKeyId: accessKeyId, secretAccessKey: secretAccessKey, region: region });
    }
    Emailer.prototype.sendEmail = function (recipientEmail, recipientName) {
        var params = {
            Source: 'deborah@sunglo.io',
            Destination: {
                ToAddresses: [
                    recipientEmail
                ]
            },
            ReplyToAddresses: [],
            Message: {
                Body: {
                    Html: {
                        Charset: 'UTF-8',
                        Data: ''
                    }
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: "Hello, ".concat(recipientName, "!")
                }
            }
        };
        return this.AWS_SES.sendEmail(params).promise();
    };
    Emailer.prototype.sendTemplateEmail = function (payload, otp) {
        var _this = this;
        var templatePromise = new aws_sdk_1["default"].SES({ apiVersion: '2010-12-01' }).getTemplate({ TemplateName: 'ExampleTemplate' }).promise();
        templatePromise.then(function (data) {
            var _a;
            var params = {
                Source: 'deborah@sunglo.io',
                Template: (_a = data.Template) === null || _a === void 0 ? void 0 : _a.TemplateName,
                Destination: {
                    ToAddresses: [
                        'maceteligolden@gmail.com'
                    ]
                },
                ReplyToAddresses: [],
                TemplateData: "{ \"name\":\"".concat(otp, "\"}")
            };
            return _this.AWS_SES.sendTemplatedEmail(params).promise();
        })["catch"](function (err) {
            console.error(err, err.stack);
        });
    };
    Emailer = __decorate([
        (0, tsyringe_1.injectable)()
    ], Emailer);
    return Emailer;
}());
exports["default"] = Emailer;
