/* eslint-disable camelcase */
class VCL {
  /**
   * VCL Methods
   */
  readVcls(service_id, version) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/vcl`,
    });
  }

  readVcl(service_id, version, name) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/vcl/${name}`,
    });
  }

  readGeneratedVcl(service_id, version) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/generated_vcl`,
    });
  }

  createVcl(service_id, version, data) {
    return this.request({
      method: 'POST',
      url: `/service/${service_id}/version/${version}/vcl`,
      data,
    });
  }

  updateVcl(service_id, version, old_name, data) {
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}/vcl/${old_name}`,
      data,
    });
  }

  deleteVcl(service_id, version, name) {
    return this.request({
      method: 'DELETE',
      url: `/service/${service_id}/version/${version}/vcl/${name}`,
    });
  }
}

module.exports = VCL;
