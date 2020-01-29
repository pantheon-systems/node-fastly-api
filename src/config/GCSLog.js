/* eslint-disable camelcase */
class GCSLog {
  /**
   * GCSLog Methods
   */
  readLogs(service_id, version) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/logging/gcs`,
    });
  }

  readLog(service_id, version, name) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/logging/gcs/${name}`,
    });
  }

  createLog(service_id, version, data) {
    return this.request({
      method: 'POST',
      url: `/service/${service_id}/version/${version}/logging/gcs`,
      data,
    });
  }

  updateLog(service_id, version, old_name, data) {
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}/logging/gcs/${old_name}`,
      data,
    });
  }

  deleteLog(service_id, version, name) {
    return this.request({
      method: 'DELETE',
      url: `/service/${service_id}/version/${version}/logging/gcs/${name}`,
    });
  }
}

module.exports = GCSLog;
