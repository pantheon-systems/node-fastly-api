/* eslint-disable camelcase */
class DictionaryInfo {
  /**
   * DictionaryInfo methods.
   */

  readDictionaryInfo(service_id, version, id) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/dictionary/${id}/info`,
    });
  }
}

module.exports = DictionaryInfo;
