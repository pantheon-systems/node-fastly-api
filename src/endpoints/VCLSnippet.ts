import { AxiosInstance } from 'axios';
import { IEndpointFactory, GenericEndpoint, staticImplements } from './GenericEndpoint';

@staticImplements<IEndpointFactory>()
export default class VCLSnippet {
  static instantiate({ jsonRequest, formRequest }: { jsonRequest: AxiosInstance; formRequest: AxiosInstance }): VCLSnippetWorker {
    return new VCLSnippetWorker({ jsonRequest, formRequest });
  }
}


class VCLSnippetWorker extends GenericEndpoint {
  namespace: string = 'VCLSnippet';
  publicMethods: Array<string> = [
    'readVclSnippets',
    'readVclSnippet',
    'createVclSnippet',
    'updateVclSnippet',
    'deleteVclSnippet',
  ];

  readVclSnippets(service_id: string, version: number) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/snippet`,
    });
  }

  readVclSnippet(service_id: string, version: number, snippet_id: string) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/snippet/${snippet_id}`,
    });
  }

  createVclSnippet(service_id: string, version: number, data: object) {
    return this.request({
      method: 'POST',
      url: `/service/${service_id}/version/${version}/snippet`,
      data,
    });
  }

  updateVclSnippet(service_id: string, version: number, snippet_id: string, data: object) {
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}/snippet/${snippet_id}`,
      data,
    });
  }

  deleteVclSnippet(service_id: string, version: number, name: string) {
    return this.request({
      method: 'DELETE',
      url: `/service/${service_id}/version/${version}/snippet/${name}`,
    });
  }
}
