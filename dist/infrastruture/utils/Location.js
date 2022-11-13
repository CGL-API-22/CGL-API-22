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
exports.getCities = exports.getStates = exports.getCountries = exports.getAuth = void 0;
const axios_1 = __importDefault(require("axios"));
const getAuth = () => __awaiter(void 0, void 0, void 0, function* () {
    const header1 = {
        "api-token": "LC1wLTXFS7M4q1u3w2Bydm5nLqHP1Nsu3IK5RtPWcj-kt1popgL1coLIRiQnxnAV_vI",
        'Accept': "application/json",
        "user-email": "benjaminambrose99@gmail.com"
    };
    yield axios_1.default.get("https://www.universal-tutorial.com/api/getaccesstoken", {
        headers: header1
    }).then(response => console.log(response)).catch((response) => console.log(response));
});
exports.getAuth = getAuth;
const header = {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJiZW5qYW1pbmFtYnJvc2U5OUBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJMQzF3TFRYRlM3TTRxMXUzdzJCeWRtNW5McUhQMU5zdTNJSzVSdFBXY2ota3QxcG9wZ0wxY29MSVJpUW54bkFWX3ZJIn0sImV4cCI6MTY2MDczMDU2MX0.haooxdt07uTehKRGVPBPffTlsat5sfejEWDf6xkeUPQ",
    'Accept': "application/json"
};
const getCountries = () => __awaiter(void 0, void 0, void 0, function* () {
    yield axios_1.default.get("https://www.universal-tutorial.com/api/countries", {
        headers: header
    }).then((response) => {
        console.log(response);
    }).catch((response) => {
        console.log(response);
    });
});
exports.getCountries = getCountries;
const getStates = (country) => {
    axios_1.default.get(`https://www.universal-tutorial.com/api/states/${country}`, {
        headers: header
    }).then(response => { return response; }).catch((response) => { return response; });
};
exports.getStates = getStates;
const getCities = (state) => {
    axios_1.default.get(`https://www.universal-tutorial.com/api/cities/${state}`, {
        headers: header
    }).then(response => { return response; }).catch((response) => { return response; });
};
exports.getCities = getCities;
