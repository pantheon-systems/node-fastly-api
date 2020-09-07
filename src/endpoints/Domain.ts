import { AxiosInstance } from 'axios';
import { IEndpointFactory, GenericEndpoint, staticImplements } from './GenericEndpoint';

@staticImplements<IEndpointFactory>()
export default class Domain {
  static instantiate({ jsonRequest, formRequest }: { jsonRequest: AxiosInstance; formRequest: AxiosInstance }): DomainWorker {
    return new DomainWorker({ jsonRequest, formRequest });
  }
}

class DomainWorker extends GenericEndpoint {
  namespace: string = 'Domain';
  publicMethods: Array<string> = [
    'readDomainStatus',
    'readDomains',
    'readDomain',
    'createDomain',
    'updateDomain',
    'deleteDomain',
  ];

  readDomainStatus(service_id: string, version: number, name: string | boolean = false) {
    const url = name
      ? `/service/${service_id}/version/${version}/domain/${name}/check`
      : `/service/${service_id}/version/${version}/domain/check_all`;
    return this.request({
      method: 'GET',
      url,
    });
  }

  readDomains(service_id: string, version: number) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/domain`,
    });
  }

  readDomain(service_id: string, version: number, name: string) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/domain/${name}`,
    });
  }

  createDomain(service_id: string, version: number, data: object) {
    return this.request({
      method: 'POST',
      url: `/service/${service_id}/version/${version}/domain`,
      data,
    });
  }

  updateDomain(service_id: string, version: number, old_name: string, data: object) {
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}/domain/${old_name}`,
      data,
    });
  }

  deleteDomain(service_id: string, version: number, name: string) {
    return this.request({
      method: 'DELETE',
      url: `/service/${service_id}/version/${version}/domain/${name}`,
    });
  }
}
