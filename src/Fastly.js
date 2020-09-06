"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var axios_1 = require("axios");
var ACL_1 = require("./endpoints/ACL");
var Fastly = /** @class */ (function () {
    function Fastly(apiKey, timeout) {
        if (apiKey === void 0) { apiKey = false; }
        if (timeout === void 0) { timeout = 15000; }
        this.request = null;
        this.request_form = null;
        if (!apiKey) {
            throw new Error('Fastly API key must be provided.');
        }
        var baseURL = 'https://api.fastly.com/';
        var headers = {
            'Fastly-Key': apiKey,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        };
        this.request = axios_1["default"].create({
            baseURL: baseURL,
            timeout: timeout,
            headers: headers
        });
        this.request_form = axios_1["default"].create({
            baseURL: baseURL,
            timeout: timeout,
            headers: __assign(__assign({}, headers), { 'Content-Type': 'application/x-www-form-urlencoded' })
        });
        this.use(ACL_1["default"]);
    }
    Fastly.prototype.use = function (endpointClass, addNamespace) {
        if (addNamespace === void 0) { addNamespace = true; }
        // console.log(endpointClass);
        var instantiated = endpointClass.instantiate({ jsonRequest: this.request, formRequest: this.request_form });
        var methods = Object.getOwnPropertyNames(instantiated);
        console.log(methods);
        // methods.forEach(method => {
        //   this[method] = instantiated[method];
        //   if (addNamespace) {
        //     this[instantiated.namespace][method] = instantiated[method];
        //   }
        // });
    };
    return Fastly;
}());
var foo = new Fastly('asdf');
