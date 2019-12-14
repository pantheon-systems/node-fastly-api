/* eslint-disable camelcase */
class CacheSetting {
  /**
   * ACL Entry Methods
   */
  readCacheSettings(service_id, version) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/cache_settings`,
    });
  }

  readCacheSetting(service_id, version, name) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/cache_settings/${name}`,
    });
  }

  createCacheSetting(service_id, version, data) {
    return this.request({
      method: 'POST',
      url: `/service/${service_id}/version/${version}/cache_settings`,
      data,
    });
  }

  updateCacheSetting(service_id, version, old_name, data) {
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}/cache_settings/${old_name}`,
      data,
    });
  }

  deleteCacheSetting(service_id, version, name) {
    return this.request({
      method: 'DELETE',
      url: `/service/${service_id}/version/${version}/cache_settings/${name}`,
    });
  }
}

module.exports = CacheSetting;
