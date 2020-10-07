import { AxiosInstance } from 'axios';
import { IEndpointFactory, GenericEndpoint, staticImplements } from './GenericEndpoint';

@staticImplements<IEndpointFactory>()
export default class BQLog {
  static instantiate({ jsonRequest, formRequest }: { jsonRequest: AxiosInstance; formRequest: AxiosInstance }): BQLogWorker {
    return new BQLogWorker({ jsonRequest, formRequest });
  }
}

class BQLogWorker extends GenericEndpoint {
  namespace: string = 'BQLog';
  publicMethods: Array<string> = [
    'readLogs',
    'readLog',
    'createLog',
    'updateLog',
    'deleteLog',
  ];

  readLogs(service_id: string, version: number) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/logging/bigquery`,
    });
  }

  readLog(service_id: string, version: number, name: string) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/logging/bigquery/${name}`,
    });
  }

  createLog(service_id: string, version: number, data: object) {
    return this.request({
      method: 'POST',
      url: `/service/${service_id}/version/${version}/logging/bigquery`,
      data,
    });
  }

  updateLog(service_id: string, version: number, old_name: string, data: string | string[][]) {
    const _data = new URLSearchParams(data).toString();
    return this.request_form({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}/logging/bigquery/${old_name}`,
      data: _data,
    });
  }

  deleteLog(service_id: string, version: number, name: string) {
    return this.request({
      method: 'DELETE',
      url: `/service/${service_id}/version/${version}/logging/bigquery/${name}`,
    });
  }
}
