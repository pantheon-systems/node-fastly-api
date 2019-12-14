/* eslint-disable camelcase */
class Settings {
  /**
   * Settings Methods
   */
  readSettings(service_id, version) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/settings`,
    });
  }

  updateSettings(service_id, version, data) {
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}/settings`,
      data,
    });
  }
}

module.exports = Settings;
