"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericEndpoint_1 = require("./GenericEndpoint");
class ACL {
    instantiate({ jsonRequest, formRequest }) {
        return new ACLWorker({ jsonRequest, formRequest });
    }
}
class ACLWorker extends GenericEndpoint_1.GenericEndpoint {
    constructor({ jsonRequest, formRequest }) {
        super({ jsonRequest, formRequest });
    }
    readAcls(service_id, version) {
        return this.request({
            method: 'GET',
            url: `/service/${service_id}/version/${version}/acl`,
        });
    }
    readAcl(service_id, version, name) {
        return this.request({
            method: 'GET',
            url: `/service/${service_id}/verison/${version}/acl/${name}`,
        });
    }
    createAcl(service_id, version, data) {
        return this.request({
            method: 'POST',
            url: `/service/${service_id}/version/${version}/acl`,
            data,
        });
    }
    updateAcl(service_id, version, old_name, data) {
        return this.request({
            method: 'PUT',
            url: `/service/${service_id}/version/${version}/acl/${old_name}`,
            data,
        });
    }
    deleteAcl(service_id, version, name) {
        return this.request({
            method: 'DELETE',
            url: `/service/${service_id}/version/${version}/acl/${name}`,
        });
    }
}
exports.default = ACL;
//# sourceMappingURL=ACL.js.map