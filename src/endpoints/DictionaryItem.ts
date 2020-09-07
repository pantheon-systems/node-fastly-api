import { AxiosInstance } from 'axios';
import { IEndpointFactory, GenericEndpoint, staticImplements } from './GenericEndpoint';

@staticImplements<IEndpointFactory>()
export default class DictionaryItem {
  static instantiate({ jsonRequest, formRequest }: { jsonRequest: AxiosInstance; formRequest: AxiosInstance }): DictionaryItemWorker {
    return new DictionaryItemWorker({ jsonRequest, formRequest });
  }
}

class DictionaryItemWorker extends GenericEndpoint {
  namespace: string = 'DictionaryItem';
  publicMethods: Array<string> = [
    'readDictionaryItems',
    'readDictionaryItem',
    'createDictionaryItem',
    'deleteDictionaryItem',
    'updateDictionaryItem',
    'updateDictionaryItems',
  ];

  readDictionaryItems(service_id: string, dictionary_id: string) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/dictionary/${dictionary_id}/items`,
    });
  }

  readDictionaryItem(service_id: string, dictionary_id: string, item_key: string) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/dictionary/${dictionary_id}/item/${item_key}`,
    });
  }

  createDictionaryItem(service_id: string, dictionary_id: string, data: object) {
    return this.request({
      method: 'POST',
      url: `/service/${service_id}/dictionary/${dictionary_id}/item`,
      data,
    });
  }

  deleteDictionaryItem(service_id: string, dictionary_id: string, item_key: string) {
    return this.request({
      method: 'DELETE',
      url: `/service/${service_id}/dictionary/${dictionary_id}/item/${item_key}`,
    });
  }

  updateDictionaryItem(service_id: string, dictionary_id: string, item_key: string, data: object) {
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/dictionary/${dictionary_id}/item/${item_key}`,
      data,
    });
  }

  updateDictionaryItems(service_id: string, dictionary_id: string, data: object) {
    return this.request({
      method: 'PATCH',
      url: `/service/${service_id}/dictionary/${dictionary_id}/items`,
      data,
    });
  }
}

module.exports = DictionaryItem;
