"use strict";
exports.__esModule = true;
var InvestorRoutes_1 = require("../modules/Auth/InvestorRoutes");
function setModuleRouters(app) {
    //Investor
    app.use('/api/v1/auth', InvestorRoutes_1["default"]);
}
exports["default"] = setModuleRouters;
