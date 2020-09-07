import { AxiosInstance } from 'axios';
import { IEndpointFactory, GenericEndpoint, staticImplements } from './GenericEndpoint';

@staticImplements<IEndpointFactory>()
export default class Settings {
  static instantiate({ jsonRequest, formRequest }: { jsonRequest: AxiosInstance; formRequest: AxiosInstance }): SettingsWorker {
    return new SettingsWorker({ jsonRequest, formRequest });
  }
}

class SettingsWorker extends GenericEndpoint {
  namespace: string = 'Settings';
  publicMethods: Array<string> = [ 'readSettings', 'updateSettings' ];

  readSettings(service_id: string, version: number) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/settings`,
    });
  }

  updateSettings(service_id: string, version: number, data: object) {
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}/settings`,
      data,
    });
  }
}
