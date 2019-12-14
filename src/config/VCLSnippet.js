/* eslint-disable camelcase */
class VCLSnippet {
  /**
   * VCLSnippet Methods
   */
  readVclSnippets(service_id, version) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/snippet`,
    });
  }

  readVclSnippet(service_id, version, snippet_id) {
    return this.request({
      method: 'GET',
      url: `/service/${service_id}/version/${version}/snippet/${snippet_id}`,
    });
  }

  createVclSnippet(service_id, version, data) {
    return this.request({
      method: 'POST',
      url: `/service/${service_id}/version/${version}/snippet`,
      data,
    });
  }

  updateVclSnippet(service_id, version, snippet_id, data) {
    return this.request({
      method: 'PUT',
      url: `/service/${service_id}/version/${version}/snippet/${snippet_id}`,
      data,
    });
  }

  deleteVclSnippet(service_id, version, name) {
    return this.request({
      method: 'DELETE',
      url: `/service/${service_id}/version/${version}/snippet/${name}`,
    });
  }
}

module.exports = VCLSnippet;
