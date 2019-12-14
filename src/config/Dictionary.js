/* eslint-disable camelcase */
class Dictionary {
  /**
   * Dictionary methods.
   */

  readDictionaries(service_id, version) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/dictionary`,
    });
  }

  readDictionary(service_id, version, name) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/dictionary/${name}`,
    });
  }

  createDictionary(service_id, version, data) {
    return this.request({
      method: 'POST',
      url: `/service/${service_id}/version/${version}/dictionary`,
      data,
    });
  }

  updateDictionary(service_id, version, old_name, data) {
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}/dictionary/${old_name}`,
      data,
    });
  }

  deleteDictionary() {
    return this.request({
      method: 'DELETE',
      url: `/service/${service_id}/version/${version}/dictionary/${name}`,
    });
  }
}

module.exports = Dictionary;
