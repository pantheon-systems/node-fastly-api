import { AxiosInstance } from 'axios';
import { IEndpointFactory, GenericEndpoint, staticImplements } from './GenericEndpoint';

@staticImplements<IEndpointFactory>()
export default class Dictionary {
  static instantiate({ jsonRequest, formRequest }: { jsonRequest: AxiosInstance; formRequest: AxiosInstance }): DictionaryWorker {
    return new DictionaryWorker({ jsonRequest, formRequest });
  }
}

class DictionaryWorker extends GenericEndpoint {
  namespace: string = 'Dictionary';
  publicMethods: Array<string> = [
    'readDictionaries',
    'readDictionary',
    'createDictionary',
    'updateDictionary',
    'deleteDictionary',
  ]

  readDictionaries(service_id: string, version: number) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/dictionary`,
    });
  }

  readDictionary(service_id: string, version: number, name: string) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/dictionary/${name}`,
    });
  }

  createDictionary(service_id: string, version: number, data: string) {
    return this.request({
      method: 'POST',
      url: `/service/${service_id}/version/${version}/dictionary`,
      data,
    });
  }

  updateDictionary(service_id: string, version: number, old_name: string, data: string) {
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}/dictionary/${old_name}`,
      data,
    });
  }

  deleteDictionary(service_id: string, version: number, name: string) {
    return this.request({
      method: 'DELETE',
      url: `/service/${service_id}/version/${version}/dictionary/${name}`,
    });
  }
}
