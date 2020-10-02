import { AxiosInstance } from 'axios';
import { IEndpointFactory, GenericEndpoint, staticImplements } from './GenericEndpoint';

@staticImplements<IEndpointFactory>()
export default class TlsSubscription {
  static instantiate({ jsonRequest, formRequest }: { jsonRequest: AxiosInstance; formRequest: AxiosInstance }): TlsSubscriptionWorker {
    return new TlsSubscriptionWorker({ jsonRequest, formRequest });
  }
}

class TlsSubscriptionWorker extends GenericEndpoint {
  namespace: string = 'TlsSubscription';
  publicMethods: Array<string> = [
    'readSubscriptions',
    'readSubscription',
    'createSubscription',
    'deleteSubscription',
  ];

  readSubscriptions() {
    return this.request({
      method: 'GET',
      url: `/tls/subscriptions`,
    });
  }

  readSubscription(subscription_id: string) {
    return this.request({
      method: 'GET',
      url: `/tls/subscriptions/${subscription_id}?include=tls_authorizations`,
    });
  }

  createSubscription(data: object) {
    return this.request({
      method: 'POST',
      url: `/tls/subscriptions`,
      data,
    });
  }

  deleteSubscription(subscription_id: string) {
    return this.request({
      method: 'DELETE',
      url: `/tls/subscriptions/${subscription_id}`,
    });
  }
}
