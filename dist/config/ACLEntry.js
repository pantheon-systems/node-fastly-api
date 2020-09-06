"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GenericEndpoint_1 = __importDefault(require("./GenericEndpoint"));
/**
 * ACL Entry Methods
 */
class ACLEntry extends GenericEndpoint_1.default {
    readACLEntries(service_id, acl_id) {
        return this.request({
            method: 'GET',
            url: `/service/${service_id}/acl/${acl_id}/entries`,
        });
    }
    readACLEntry(service_id, acl_id, entry_id) {
        return this.request({
            method: 'GET',
            url: `/service/${service_id}/acl/${acl_id}/entry/${entry_id}`,
        });
    }
    createACLEntry(service_id, acl_id, data) {
        return this.request({
            method: 'POST',
            url: `/service/${service_id}/acl/${acl_id}/entry`,
            data,
        });
    }
    deleteACLEntry(service_id, acl_id, entry_id) {
        return this.request({
            method: 'DELETE',
            url: `/service/${service_id}/acl/${acl_id}/entry/${entry_id}`,
        });
    }
    updateACLEntry(service_id, acl_id, entry_id, data) {
        return this.request({
            method: 'PATCH',
            url: `/service/${service_id}/acl/${acl_id}/entry/${entry_id}`,
            data,
        });
    }
    updateACLEntries(service_id, acl_id, data) {
        return this.request({
            method: 'PATCH',
            url: `/service/${service_id}/acl/${acl_id}/entries`,
            data,
        });
    }
}
exports.default = ACLEntry;
//# sourceMappingURL=ACLEntry.js.map