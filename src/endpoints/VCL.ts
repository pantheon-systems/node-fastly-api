import { AxiosInstance } from 'axios';
import { IEndpointFactory, GenericEndpoint, staticImplements } from './GenericEndpoint';

@staticImplements<IEndpointFactory>()
export default class VCL {
  static instantiate({ jsonRequest, formRequest }: { jsonRequest: AxiosInstance; formRequest: AxiosInstance }): VCLWorker {
    return new VCLWorker({ jsonRequest, formRequest });
  }
}

class VCLWorker extends GenericEndpoint {
  namespace: string = 'VCL';
  publicMethods: Array<string> = [
    'readVcls',
    'readVcl',
    'readGeneratedVcl',
    'createVcl',
    'updateVcl',
    'deleteVcl',
    'setMainVcl',
  ];

  readVcls(service_id: string, version: number) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/vcl`,
    });
  }

  readVcl(service_id: string, version: number, name: string) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/vcl/${name}`,
    });
  }

  readGeneratedVcl(service_id: string, version: number) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/generated_vcl`,
    });
  }

  createVcl(service_id: string, version: number, data: object) {
    return this.request({
      method: 'POST',
      url: `/service/${service_id}/version/${version}/vcl`,
      data,
    });
  }

  updateVcl(service_id: string, version: number, old_name: string, data: object) {
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}/vcl/${old_name}`,
      data,
    });
  }

  deleteVcl(service_id: string, version: number, name: string) {
    return this.request({
      method: 'DELETE',
      url: `/service/${service_id}/version/${version}/vcl/${name}`,
    });
  }

  setMainVcl(service_id: string, version: number, name: string) {
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}/vcl/${name}/main`,
    });
  }
}
