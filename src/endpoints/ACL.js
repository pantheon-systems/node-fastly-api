"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var GenericEndpoint_1 = require("./GenericEndpoint");
var ACL = /** @class */ (function () {
    function ACL() {
    }
    ACL.instantiate = function (_a) {
        var jsonRequest = _a.jsonRequest, formRequest = _a.formRequest;
        return new ACLWorker({ jsonRequest: jsonRequest, formRequest: formRequest });
    };
    ACL = __decorate([
        GenericEndpoint_1.staticImplements()
    ], ACL);
    return ACL;
}());
exports["default"] = ACL;
var ACLWorker = /** @class */ (function (_super) {
    __extends(ACLWorker, _super);
    function ACLWorker(_a) {
        var jsonRequest = _a.jsonRequest, formRequest = _a.formRequest;
        return _super.call(this, { jsonRequest: jsonRequest, formRequest: formRequest }) || this;
    }
    ACLWorker.prototype.readAcls = function (service_id, version) {
        return this.request({
            method: 'GET',
            url: "/service/" + service_id + "/version/" + version + "/acl"
        });
    };
    ACLWorker.prototype.readAcl = function (service_id, version, name) {
        return this.request({
            method: 'GET',
            url: "/service/" + service_id + "/verison/" + version + "/acl/" + name
        });
    };
    ACLWorker.prototype.createAcl = function (service_id, version, data) {
        return this.request({
            method: 'POST',
            url: "/service/" + service_id + "/version/" + version + "/acl",
            data: data
        });
    };
    ACLWorker.prototype.updateAcl = function (service_id, version, old_name, data) {
        return this.request({
            method: 'PUT',
            url: "/service/" + service_id + "/version/" + version + "/acl/" + old_name,
            data: data
        });
    };
    ACLWorker.prototype.deleteAcl = function (service_id, version, name) {
        return this.request({
            method: 'DELETE',
            url: "/service/" + service_id + "/version/" + version + "/acl/" + name
        });
    };
    return ACLWorker;
}(GenericEndpoint_1.GenericEndpoint));
