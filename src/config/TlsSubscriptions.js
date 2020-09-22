const { timeStamp } = require('console');

class TlsSubscription {
  readSubscriptions() {
    return this.request({
      method: 'GET',
      url: `/tls/subscriptions`,
    });
  }

  readSubscription(subscription_id) {
    return this.request({
      method: 'GET',
      url: `/tls/subscriptions/${subscription_id}`,
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
