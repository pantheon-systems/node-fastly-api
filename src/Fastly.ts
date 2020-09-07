import axios, { AxiosInstance } from 'axios';
import { IEndpointFactory } from './endpoints/GenericEndpoint'

import ACL from './endpoints/ACL'

class Fastly {
  request: AxiosInstance = null;
  request_form: AxiosInstance = null;

  [k: string]: any;

  constructor(apiKey: string | boolean = false, timeout: number = 15000) {
    if (!apiKey) {
      throw new Error('Fastly API key must be provided.');
    }

    const baseURL = 'https://api.fastly.com/';
    const headers = {
      'Fastly-Key': apiKey,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    this.request = axios.create({
      baseURL,
      timeout,
      headers,
    });

    this.request_form = axios.create({
      baseURL,
      timeout,
      headers: {
        ...headers,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    this.use(ACL);
  }

  use(endpointClass: IEndpointFactory, addNamespace: boolean = true): void {
    const instantiated = endpointClass.instantiate({ jsonRequest: this.request, formRequest: this.request_form });
    const methods = instantiated.publicMethods;

    methods.forEach(method => {
      this[method] = instantiated[method];
      if (addNamespace) {
        if (!(instantiated.namespace in this)) {
          this[instantiated.namespace] = {};
        }
        this[instantiated.namespace][method] = instantiated[method];
      }
    });
  }
}

const foo = new Fastly('asdf');

foo.readAcls('123', 1).then((d: { data: any; }) => {
  console.log(d.data);
});
