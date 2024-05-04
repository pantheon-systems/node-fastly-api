class TlsSubscription {
  readSubscriptions({ page = 1, size = 100 } = {}) {
    return this.request({
      method: 'GET',
      url: `/tls/subscriptions?page[number]=${page}&page[size]=${size}`,
    });
  }

  readSubscription(subscription_id) {
    return this.request({
      method: 'GET',
      url: `/tls/subscriptions/${subscription_id}?include=tls_authorizations`,
    });
  }

  createSubscription(data) {
    return this.request({
      method: 'POST',
      url: `/tls/subscriptions`,
      data,
    });
  }

  deleteSubscription(subscription_id) {
    return this.request({
      method: 'DELETE',
      url: `/tls/subscriptions/${subscription_id}`,
    });
  }
}

module.exports = TlsSubscription;
