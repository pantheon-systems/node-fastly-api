"use strict";
exports.__esModule = true;
exports.GenericEndpoint = void 0;
exports.GenericEndpoint = /** @class */ (function () {
    function GenericEndpoint(_a) {
        var jsonRequest = _a.jsonRequest, formRequest = _a.formRequest;
        this.request = jsonRequest;
        this.request_form = formRequest;
    }
    return GenericEndpoint;
}());
