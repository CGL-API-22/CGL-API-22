"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var userschema = new mongoose_1.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    email_token: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    verified: {
        type: Boolean,
        "default": false
    },
    created_at: {
        type: Date,
        "default": function () {
            return Date.now();
        }
    },
    updated_at: {
        type: Date,
        "default": function () {
            return Date.now();
        }
    }
});
exports["default"] = mongoose_1["default"].model('User', userschema);
