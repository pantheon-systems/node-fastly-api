import GenericEndpoint from './GenericEndpoint';

/**
 * ACL Methods
 */
class ACL extends GenericEndpoint {

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

export default ACL;
