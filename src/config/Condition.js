/* eslint-disable camelcase */
class Condition {
  /**
   * Condition Methods
   */
  readConditions(service_id, version) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/condition`,
    });
  }

  readCondition(service_id, version, name) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/condition/${name}`,
    });
  }

  createCondition(service_id, version, data) {
    return this.request({
      method: 'POST',
      url: `/service/${service_id}/version/${version}/condition`,
      data,
    });
  }

  updateCondition(service_id, version, old_name, data) {
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}/condition/${old_name}`,
      data,
    });
  }

  deleteCondition(service_id, version, name) {
    return this.request({
      method: 'DELETE',
      url: `/service/${service_id}/version/${version}/condition/${name}`,
    });
  }
}
