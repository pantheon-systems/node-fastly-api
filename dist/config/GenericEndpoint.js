"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const GenericEndpoint = class GenericEndpoint {
    constructor(apiKey, timeout) {
        const baseURL = 'https://api.fastly.com/';
        const headers = {
            'Fastly-Key': apiKey,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        this.request = axios_1.default.create({
            baseURL,
            timeout,
            headers,
        });
        this.request_form = axios_1.default.create({
            baseURL,
            timeout,
            headers: Object.assign(Object.assign({}, headers), { 'Content-Type': 'application/x-www-form-urlencoded' }),
        });
    }
};
exports.default = GenericEndpoint;
//# sourceMappingURL=GenericEndpoint.js.map