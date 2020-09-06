"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const ACL_1 = __importDefault(require("./endpoints/ACL"));
class Fastly {
    constructor(apiKey = false, timeout = 15000) {
        this.request = null;
        this.request_form = null;
        if (!apiKey) {
            throw new Error('Fastly API key must be provided.');
        }
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
        this.use(ACL_1.default);
    }
    use(endpointClass, addNamespace = true) {
        console.log(endpointClass);
        const instantiated = endpointClass.instantiate({ jsonRequest: this.request, formRequest: this.request_form });
        const methods = Object.getOwnPropertyNames(instantiated);
        console.log(methods);
        // methods.forEach(method => {
        //   this[method] = instantiated[method];
        //   if (addNamespace) {
        //     this[instantiated.namespace][method] = instantiated[method];
        //   }
        // });
    }
}
const foo = new Fastly('asdf');
//# sourceMappingURL=Fastly.js.map