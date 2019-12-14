/* eslint-disable camelcase */
class Domain {
  /**
   * Domain Methods
   */
  readDomainStatus(service_id, version, name = false) {
    const url = name
      ? `/service/${service_id}/version/${version}/domain/${name}/check`
      : `/service/${service_id}/version/${version}/domain/check_all`;
    return this.request({
      method: 'GET',
      url,
    });
  }

  readDomains(service_id, version) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/domain`,
    });
  }

  readDomain(service_id, version, name) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/domain/${name}`,
    });
  }

  createDomain(service_id, version, data) {
    return this.request({
      method: 'POST',
      url: `/service/${service_id}/version/${version}/domain`,
      data,
    });
  }

  updateDomain(service_id, version, old_name, data) {
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}/domain/${old_name}`,
      data,
    });
  }

  deleteDomain(service_id, version, name) {
    return this.request({
      method: 'DELETE',
      url: `/service/${service_id}/version/${version}/domain/${name}`,
    });
  }
}

module.exports = Domain;
