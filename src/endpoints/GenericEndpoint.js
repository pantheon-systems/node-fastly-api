"use strict";
exports.__esModule = true;
exports.GenericEndpoint = exports.staticImplements = void 0;
function staticImplements() {
    return function (constructor) { constructor; };
}
exports.staticImplements = staticImplements;
exports.GenericEndpoint = /** @class */ (function () {
    function GenericEndpoint(_a) {
        var jsonRequest = _a.jsonRequest, formRequest = _a.formRequest;
        this.namespace = '';
        this.publicMethods = [];
        this.request = jsonRequest;
        this.request_form = formRequest;
    }
    return GenericEndpoint;
}());
