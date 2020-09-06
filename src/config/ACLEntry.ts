import GenericEndpoint from './GenericEndpoint';

/**
 * ACL Entry Methods
 */
class ACLEntry extends GenericEndpoint {

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

export default ACLEntry;
