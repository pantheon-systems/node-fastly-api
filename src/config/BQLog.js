/* eslint-disable camelcase */
class BQLog {
  /**
   * BigQuery Methods
   */

  readBqLogs(service_id, version) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/logging/bigquery`,
    });
  }

  readBqLog(service_id, version, name) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/logging/bigquery/${name}`,
    });
  }

  createBqLog(service_id, version, data) {
    return this.request({
      method: 'POST',
      url: `/service/${service_id}/version/${version}/logging/bigquery`,
      data,
    });
  }

  updateBqLog(service_id, version, old_name, data) {
    const _data = new URLSearchParams(data).toString();
    return this.request_form({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}/logging/bigquery/${old_name}`,
      data: _data,
    });
  }

  deleteBqLog(service_id, version, name) {
    return this.request({
      method: 'DELETE',
      url: `/service/${service_id}/version/${version}/logging/bigquery/${name}`,
    });
  }
}

module.exports = BQLog;
