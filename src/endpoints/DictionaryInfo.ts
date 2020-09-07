import { AxiosInstance } from 'axios';
import { IEndpointFactory, GenericEndpoint, staticImplements } from './GenericEndpoint';

@staticImplements<IEndpointFactory>()
export default class DictionaryInfo {
  static instantiate({ jsonRequest, formRequest }: { jsonRequest: AxiosInstance; formRequest: AxiosInstance }): DictionaryInfoWorker {
    return new DictionaryInfoWorker({ jsonRequest, formRequest });
  }
}

class DictionaryInfoWorker extends GenericEndpoint {
  namespace: string = 'DictionaryInfo';
  publicMethods: Array<string> = [ 'readDictionaryInfo' ];

  readDictionaryInfo(service_id: string, version: number, id: string) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/dictionary/${id}/info`,
    });
  }
}
