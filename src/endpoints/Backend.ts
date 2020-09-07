import { AxiosInstance } from 'axios';
import { IEndpointFactory, GenericEndpoint, staticImplements } from './GenericEndpoint';

@staticImplements<IEndpointFactory>()
export default class Backend {
  static instantiate({ jsonRequest, formRequest }: { jsonRequest: AxiosInstance; formRequest: AxiosInstance }): BackendWorker {
    return new BackendWorker({ jsonRequest, formRequest });
  }
}

class BackendWorker extends GenericEndpoint {
  namespace: string = 'Backend';
  publicMethods: Array<string> = [
    'readBackends',
    'readBackend',
    'createBackend',
    'updateBackend',
    'deleteBackend',
  ];

  readBackends(service_id: string, version: number) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/backend`,
    });
  }

  readBackend(service_id: string, version: number, name: string) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/backend/${name}`,
    });
  }

  createBackend(service_id: string, version: number, data: object) {
    return this.request({
      method: 'POST',
      url: `/service/${service_id}/version/${version}/backend`,
      data,
    });
  }

  updateBackend(service_id: string, version: number, old_name: string, data: object) {
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}/backend/${old_name}`,
      data,
    });
  }

  deleteBackend(service_id: string, version: number, name: string) {
    return this.request({
      method: 'DELETE',
      url: `/service/${service_id}/version/${version}/backend/${name}`,
    });
  }
}
