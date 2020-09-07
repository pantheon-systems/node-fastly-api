import { AxiosInstance } from 'axios';
import { IEndpointFactory, GenericEndpoint, staticImplements } from './GenericEndpoint';

@staticImplements<IEndpointFactory>()
export default class Version {
  static instantiate({ jsonRequest, formRequest }: { jsonRequest: AxiosInstance; formRequest: AxiosInstance }): VersionWorker {
    return new VersionWorker({ jsonRequest, formRequest });
  }
}

class VersionWorker extends GenericEndpoint {
  namespace: string = 'Version';
  publicMethods: Array<string> = [
    'readVersions',
    'readVersion',
    'validateVersion',
    'createVersion',
    'updateVersion',
    'activateVersion',
    'deactivateVersion',
    'cloneVersion',
    'lockVersion',
  ];

  readVersions(service_id: string) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version`,
    });
  }

  readVersion(service_id: string, version: string | number) {
    if (typeof version === 'undefined') {
      version = service_id;
      service_id = this.service_id;
    }
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}`,
    });
  }

  validateVersion(service_id: string, version: string | number) {
    if (typeof version === 'undefined') {
      version = service_id;
      service_id = this.service_id;
    }
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/validate`,
    });
  }

  createVersion(service_id: string, data: string | object) {
    if (typeof data === 'undefined') {
      data = service_id;
      service_id = this.service_id;
    }
    return this.request({
      method: 'POST',
      url: `/service/${service_id}/version`,
      data,
    });
  }

  updateVersion(service_id: string, version: string | number, data: string | object | number) {
    if (typeof data === 'undefined') {
      data = version;
      version = service_id;
      service_id = this.service_id;
    }
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}`,
      data,
    });
  }

  activateVersion(service_id: string, version: string | number) {
    if (typeof version === 'undefined') {
      version = service_id;
      service_id = this.service_id;
    }
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}/activate`,
    });
  }

  deactivateVersion(service_id: string, version: string | number) {
    if (typeof version === 'undefined') {
      version = service_id;
      service_id = this.service_id;
    }
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}/deactivate`,
    });
  }

  cloneVersion(service_id: string, version: string | number) {
    if (typeof version === 'undefined') {
      version = service_id;
      service_id = this.service_id;
    }
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}/clone`,
    });
  }

  lockVersion(service_id: string, version: string | number) {
    if (typeof version === 'undefined') {
      version = service_id;
      service_id = this.service_id;
    }
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}/lock`,
    });
  }
}
