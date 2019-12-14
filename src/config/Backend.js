/* eslint-disable camelcase */
class Backend {
  /**
   * Backend Methods
   */
  readBackends(service_id, version) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/backend`,
    });
  }

  readBackend(service_id, version, name) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/backend/${name}`,
    });
  }

  createBackend(service_id, version, data) {
    return this.request({
      method: 'POST',
      url: `/service/${service_id}/version/${version}/backend`,
      data,
    });
  }

  updateBackend(service_id, version, old_name, data) {
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}/backend/${old_name}`,
      data,
    });
  }

  deleteBackend(service_id, version, name) {
    return this.request({
      method: 'DELETE',
      url: `/service/${service_id}/version/${version}/backend/${name}`,
    });
  }
}

module.exports = Backend;
