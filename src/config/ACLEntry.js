/* eslint-disable camelcase */
class ACLEntry {
  /**
   * ACL Entry Methods
   */
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
      url: `/service/${service_id}/acl/${acl_id}`,
      data,
    });
  }
}

module.exports = ACLEntry;
