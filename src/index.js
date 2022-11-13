"use strict";
exports.__esModule = true;
require("reflect-metadata");
require('dotenv').config();
var express_1 = require("express");
var router_1 = require("./infrastruture/router");
var server_1 = require("./infrastruture/config/server");
var app = (0, express_1["default"])();
//Middlewares
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: false }));
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
});
//Routes
(0, router_1["default"])(app);
//Start server 
var server = new server_1["default"](app);
server.start();
