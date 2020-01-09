/* eslint-disable camelcase */
class DictionaryItem {
  /**
   * Dictionary Item Methods
   */
  readDictionaryItems(service_id, dictionary_id) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/dictionary/${dictionary_id}/items`,
    });
  }

  readDictionaryItem(service_id, dictionary_id, item_key) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/dictionary/${dictionary_id}/item/${item_key}`,
    });
  }

  createDictionaryItem(service_id, dictionary_id, data) {
    return this.request({
      method: 'POST',
      url: `/service/${service_id}/dictionary/${dictionary_id}/item`,
      data,
    });
  }

  deleteDictionaryItem(service_id, dictionary_id, item_key) {
    return this.request({
      method: 'DELETE',
      url: `/service/${service_id}/dictionary/${dictionary_id}/item/${item_key}`,
    });
  }

  updateDictionaryItem(service_id, dictionary_id, item_key, data) {
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/dictionary/${dictionary_id}/item/${item_key}`,
      data,
    });
  }

  updateDictionaryItems(service_id, dictionary_id, data) {
    return this.request({
      method: 'PATCH',
      url: `/service/${service_id}/dictionary/${dictionary_id}/items`,
      data,
    });
  }
}

module.exports = DictionaryItem;
