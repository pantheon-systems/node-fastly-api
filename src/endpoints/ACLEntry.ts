import { AxiosInstance } from 'axios';
import { IEndpointFactory, GenericEndpoint, staticImplements } from './GenericEndpoint';

@staticImplements<IEndpointFactory>()
export default class ACLEntry {
  static instantiate({jsonRequest, formRequest}: { jsonRequest: AxiosInstance; formRequest: AxiosInstance }): ACLEntryWorker {
    return new ACLEntryWorker({ jsonRequest, formRequest });
  }
}

class ACLEntryWorker extends GenericEndpoint {
  request: AxiosInstance;
  request_form: AxiosInstance;
  namespace: string = "ACLEntry";
  publicMethods: Array<string> = [
    'readACLEntries',
    'readACLEntry',
    'createACLEntry',
    'deleteACLEntry',
    'updateACLEntry',
    'updateACLEntries',
  ];

  readACLEntries(service_id: string, acl_id: string) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/acl/${acl_id}/entries`,
    });
  }

  readACLEntry(service_id: string, acl_id: string, entry_id: string) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/acl/${acl_id}/entry/${entry_id}`,
    });
  }

  createACLEntry(service_id: string, acl_id: string, data: object) {
    return this.request({
      method: 'POST',
      url: `/service/${service_id}/acl/${acl_id}/entry`,
      data,
    });
  }

  deleteACLEntry(service_id: string, acl_id: string, entry_id: string) {
    return this.request({
      method: 'DELETE',
      url: `/service/${service_id}/acl/${acl_id}/entry/${entry_id}`,
    });
  }

  updateACLEntry(service_id: string, acl_id: string, entry_id: string, data: object) {
    return this.request({
      method: 'PATCH',
      url: `/service/${service_id}/acl/${acl_id}/entry/${entry_id}`,
      data,
    });
  }

  updateACLEntries(service_id: string, acl_id: string, data: object) {
    return this.request({
      method: 'PATCH',
      url: `/service/${service_id}/acl/${acl_id}/entries`,
      data,
    });
  }
}
