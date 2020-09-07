import { AxiosInstance } from 'axios';
import { IEndpointFactory, GenericEndpoint, staticImplements } from './GenericEndpoint';

@staticImplements<IEndpointFactory>()
export default class Service {
  static instantiate({ jsonRequest, formRequest }: { jsonRequest: AxiosInstance; formRequest: AxiosInstance }): ServiceWorker {
    return new ServiceWorker({ jsonRequest, formRequest });
  }
}

class ServiceWorker extends GenericEndpoint {
  namespace: string = 'Service';
  publicMethods: Array<string> = [
    'readServices',
    'readServiceDetails',
    'readService',
    'readServiceDomains',
    'createService',
    'updateService',
    'deleteService',
    'purgeService',
  ];

  readServices() {
    return this.request({
      method: 'GET',
      url: `/service`,
    });
  }

  readServiceDetails(service_id: string) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/details`,
    });
  }

  readService(service_id: string) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}`,
    });
  }

  readServiceDomains(service_id: string) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/domain`,
    });
  }

  createService(data: object) {
    return this.request({
      method: 'POST',
      url: `/service`,
      data,
    });
  }

  updateService(service_id: string, data: object) {
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}`,
      data,
    });
  }

  deleteService(service_id: string) {
    return this.request({
      method: 'DELETE',
      url: `/service/${service_id}`,
    });
  }

  purgeService(service_id: string) {
    return this.request({
      method: 'POST',
      url: `/service/${service_id}/purge_all`,
    });
  }
}
