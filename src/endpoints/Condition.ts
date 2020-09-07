import { AxiosInstance } from 'axios';
import { IEndpointFactory, GenericEndpoint, staticImplements } from './GenericEndpoint';

@staticImplements<IEndpointFactory>()
export default class Condition {
  static instantiate({ jsonRequest, formRequest }: { jsonRequest: AxiosInstance; formRequest: AxiosInstance }): ConditionWorker {
    return new ConditionWorker({ jsonRequest, formRequest });
  }
}

class ConditionWorker extends GenericEndpoint {
  namespace: string = 'Condition';
  publicMethods: Array<string> = [
    'readConditions',
    'readCondition',
    'createCondition',
    'updateCondition',
    'deleteCondition',
  ];

  readConditions(service_id: string, version: number) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/condition`,
    });
  }

  readCondition(service_id: string, version: number, name: string) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/condition/${name}`,
    });
  }

  createCondition(service_id: string, version: number, data: object) {
    return this.request({
      method: 'POST',
      url: `/service/${service_id}/version/${version}/condition`,
      data,
    });
  }

  updateCondition(service_id: string, version: number, old_name: string, data: object) {
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}/condition/${old_name}`,
      data,
    });
  }

  deleteCondition(service_id: string, version: number, name: string) {
    return this.request({
      method: 'DELETE',
      url: `/service/${service_id}/version/${version}/condition/${name}`,
    });
  }
}
