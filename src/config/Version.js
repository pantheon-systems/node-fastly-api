/* eslint-disable camelcase */
class Version {
  /**
   * Version Methods
   */
  readVersions(service_id = this.service_id) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version`,
    });
  }

  readVersion(service_id, version) {
    if (typeof version === 'undefined') {
      version = service_id;
      service_id = this.service_id;
    }
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}`,
    });
  }

  validateVersion(service_id, version) {
    if (typeof version === 'undefined') {
      version = service_id;
      service_id = this.service_id;
    }
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/validate`,
    });
  }

  createVersion(service_id, data) {
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

  updateVersion(service_id, version, data) {
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

  activateVersion(service_id, version) {
    if (typeof version === 'undefined') {
      version = service_id;
      service_id = this.service_id;
    }
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}/activate`,
    });
  }

  deactivateVersion(service_id, version) {
    if (typeof version === 'undefined') {
      version = service_id;
      service_id = this.service_id;
    }
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}/deactivate`,
    });
  }

  cloneVersion(service_id, version) {
    if (typeof version === 'undefined') {
      version = service_id;
      service_id = this.service_id;
    }
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}/clone`,
    });
  }

  lockVersion(service_id, version) {
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

module.exports = Version;
