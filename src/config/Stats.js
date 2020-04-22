class Stats {
  constructor() {
    this._fields = [
      "requests",
      "hits",
      "hits_time",
      "miss",
      "miss_time",
      "pass",
      "pass_time",
      "errors",
      "restarts",
      "hit_ratio",
      "bandwidth",
      "body_size",
      "header_size",
      "req_body_bytes",
      "req_header_bytes",
      "resp_body_bytes",
      "resp_header_bytes",
      "bereq_body_bytes",
      "bereq_header_bytes",
      "uncacheable",
      "pipe",
      "tls",
      "tls_v10",
      "tls_v11",
      "tls_v12",
      "tls_v13",
      "shield",
      "shield_resp_body_bytes",
      "shield_resp_header_bytes",
      "ipv6",
      "otfp",
      "otfp_resp_body_bytes",
      "otfp_resp_header_bytes",
      "otfp_shield_resp_body_bytes",
      "otfp_shield_resp_header_bytes",
      "otfp_manifests",
      "otfp_deliver_time",
      "otfp_shield_time",
      "video",
      "pci",
      "log",
      "http2",
      "waf_logged",
      "waf_blocked",
      "waf_passed",
      "attack_req_body_bytes",
      "attack_req_header_bytes",
      "attack_logged_req_body_bytes",
      "attack_logged_req_header_bytes",
      "attack_blocked_req_body_bytes",
      "attack_blocked_req_header_bytes",
      "attack_passed_req_body_bytes",
      "attack_passed_req_header_bytes",
      "attack_resp_synth_bytes",
      "imgopto",
      "imgopto_resp_body_bytes",
      "imgopto_resp_header_bytes",
      "imgopto_shield_resp_body_bytes",
      "imgopto_shield_resp_header_bytes",
      "status_200",
      "status_204",
      "status_301",
      "status_302",
      "status_304",
      "status_400",
      "status_401",
      "status_403",
      "status_404",
      "status_416",
      "status_500",
      "status_501",
      "status_502",
      "status_503",
      "status_504",
      "status_505",
      "status_1xx",
      "status_2xx",
      "status_3xx",
      "status_4xx",
      "status_5xx",
      "object_size_1k",
      "object_size_10k",
      "object_size_100k",
      "object_size_1m",
      "object_size_10m",
      "object_size_100m",
      "object_size_1g",
      "recv_sub_time",
      "recv_sub_count",
      "hash_sub_time",
      "hash_sub_count",
      "miss_sub_time",
      "miss_sub_count",
      "fetch_sub_time",
      "fetch_sub_count",
      "pass_sub_time",
      "pass_sub_count",
      "pipe_sub_time",
      "pipe_sub_count",
      "deliver_sub_time",
      "deliver_sub_count",
      "error_sub_time",
      "error_sub_count",
      "hit_sub_time",
      "hit_sub_count",
      "prehash_sub_time",
      "prehash_sub_count",
      "predeliver_sub_time",
      "predeliver_sub_count",
      "tls_handshake_bytes"
    ];

    // Set some default parameters
    const rn = Math.floor((+new Date) / 1000);
    this._defaultParams = {
      to: rn,
      from: rn - (24 * 60 * 60),
      by: "day",
      region: null,
    };

    const filterEmpty = obj =>
      Object
        .keys(obj)
        .filter(k => obj[k] != null)
        .reduce((newObj, k) => {
          return typeof obj[k] === "object"
            ? { ...newObj, [k]: filterEmpty(obj[k]) }
            : { ...newObj, [k]: obj[k] };
          }, {});

    this.muxParams = p => ({ ...this._defaultParams, ...filterEmpty(p) });
  }

  readStats (field, params = {
    to: null,
    from: null,
    by: null,
    region: null
  }) {
    let baseUrl = '/stats';
    if (field && this._fields.includes(field)) {
      baseUrl += `/field/${field}`;
    }
    return this.request({
      method: 'GET',
      url: baseUrl,
      params: this.muxParams(params),
    });
  }

  readAggregate(params = {
    to: null,
    from: null,
    by: null,
    region: null
  }) {
    return this.request({
      method: 'GET',
      url: '/stats/aggregate',
      params: this.muxParams(params),
    });
  }

  readServiceStats(service_id, field, params = {
    to: null,
    from: null,
    by: null,
    region: null
  }) {
    let baseUrl = `/stats/service/${service_id}`;
    if (field && this._fields.includes(field)) {
      baseUrl += `/field/${field}`;
    }
    return this.request({
      method: 'GET',
      url: baseUrl,
      params: this.muxParams(params),
    });
  }

  readUsage(params = {
    to: null,
    from: null,
    by: null,
    region: null
  }) {
    return this.request({
      method: 'GET',
      url: '/stats/usage',
      params: this.muxParams(params),
    });
  }

  readUsageByService(params = {
    to: null,
    from: null,
    by: null,
    region: null
  }) {
    return this.request({
      method: 'GET',
      url: '/stats/usage_by_service',
      params: this.muxParams(params),
    });
  }

  readUsageByMonth(params = {
    month: `00${(new Date).getMonth()}`.slice(-2),
    year: (new Date).getFullYear(),
    billable_units: false,
  }) {
    return this.request({
      method: 'GET',
      url: '/stats/usage_by_month',
      params,
    });
  }

  readStatsRegions() {
    return this.request({
      method: 'GET',
      url: '/stats/regions',
    });
  }
}

module.exports = Stats;
