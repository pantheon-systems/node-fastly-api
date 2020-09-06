import { AxiosInstance } from 'axios';
import { IEndpointFactory, GenericEndpoint, staticImplements } from './GenericEndpoint';

@staticImplements<IEndpointFactory>()
export default class ACL {
  static instantiate({jsonRequest, formRequest}: { jsonRequest: AxiosInstance; formRequest: AxiosInstance }): ACLWorker {
    return new ACLWorker({ jsonRequest, formRequest });
  }
}

class ACLWorker extends GenericEndpoint {
  request: AxiosInstance;
  request_form: AxiosInstance;
  namespace: string = 'ACL';
  publicMethods: Array<string> = [
    'readAcls',
    'readAcl',
    'createAcl',
    'updateAcl',
    'deleteAcl',
  ];

  constructor({ jsonRequest, formRequest }: { jsonRequest: AxiosInstance; formRequest: AxiosInstance }) {
    super({ jsonRequest, formRequest });
  }

  readAcls(service_id: string, version: number) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/acl`,
    });
  }

  readAcl(service_id: string, version: number, name: string) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/verison/${version}/acl/${name}`,
    });
  }

  createAcl(service_id: string, version: number, data: object) {
    return this.request({
      method: 'POST',
      url: `/service/${service_id}/version/${version}/acl`,
      data,
    });
  }

  updateAcl(service_id: string, version: number, old_name: string, data: object) {
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}/acl/${old_name}`,
      data,
    });
  }

  deleteAcl(service_id: string, version: number, name: string) {
    return this.request({
      method: 'DELETE',
      url: `/service/${service_id}/version/${version}/acl/${name}`,
    });
  }
}
