import { AxiosInstance } from 'axios';
import { IEndpointFactory, GenericEndpoint, staticImplements } from './GenericEndpoint';

@staticImplements<IEndpointFactory>()
export default class CacheSetting {
  static instantiate({ jsonRequest, formRequest }: { jsonRequest: AxiosInstance; formRequest: AxiosInstance }): CacheSettingWorker {
    return new CacheSettingWorker({ jsonRequest, formRequest });
  }
}

class CacheSettingWorker extends GenericEndpoint {
  namespace:string = 'CacheSetting';
  publicMethods: Array<string> = [
    'readCacheSettings',
    'readCacheSetting',
    'createCacheSetting',
    'updateCacheSetting',
    'deleteCacheSetting',
  ];

  readCacheSettings(service_id: string, version: number) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/cache_settings`,
    });
  }

  readCacheSetting(service_id: string, version: number, name: string) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/cache_settings/${name}`,
    });
  }

  createCacheSetting(service_id: string, version: number, data: object) {
    return this.request({
      method: 'POST',
      url: `/service/${service_id}/version/${version}/cache_settings`,
      data,
    });
  }

  updateCacheSetting(service_id: string, version: number, old_name: string, data: object) {
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}/cache_settings/${old_name}`,
      data,
    });
  }

  deleteCacheSetting(service_id: string, version: number, name: string) {
    return this.request({
      method: 'DELETE',
      url: `/service/${service_id}/version/${version}/cache_settings/${name}`,
    });
  }
}
