/* eslint-disable camelcase */
class ACL {
  /**
   * ACL methods.
   */

  readAcls(service_id, version) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/acl`,
    });
  }

  readAcl(service_id, version, name) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/acl/${name}`,
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

  deleteAcl() {
    return this.request({
      method: 'DELETE',
      url: `/service/${service_id}/version/${version}/acl/${name}`,
    });
  }
}

module.exports = ACL;
