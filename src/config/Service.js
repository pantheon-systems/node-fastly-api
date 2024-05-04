/* eslint-disable camelcase */
class Service {
  /**
   * Service Methods
   */
  readServices({ page = 1, per_page = 1000, direction = 'ascend', sort = 'created' } = {}) {
    return this.request({
      method: 'GET',
      url: `/service?direction=${direction}&sort=${sort}&page=${page}&per_page=${per_page}`,
    });
  }

  readServiceDetails(service_id) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/details`,
    });
  }

  readService(service_id) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}`,
    });
  }

  readServiceDomains(service_id) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/domain`,
    });
  }

  createService(data) {
    return this.request({
      method: 'POST',
      url: `/service`,
      data,
    });
  }

  updateService(service_id, data) {
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}`,
      data,
    });
  }

  deleteService(service_id) {
    return this.request({
      method: 'DELETE',
      url: `/service/${service_id}`,
    });
  }

  purgeService(service_id) {
    return this.request({
      method: 'POST',
      url: `/service/${service_id}/purge_all`,
    });
  }
}

module.exports = Service;
