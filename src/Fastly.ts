import axios, { AxiosInstance } from 'axios';
import { IEndpointFactory } from './endpoints/GenericEndpoint'

import ACL from './endpoints/ACL'

class Fastly {
  request: AxiosInstance = null;
  request_form: AxiosInstance = null;

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

  use(endpointClass: IEndpointFactory, addNamespace: boolean = true) {
    // console.log(endpointClass);
    const instantiated = endpointClass.instantiate({ jsonRequest: this.request, formRequest: this.request_form });
    const methods = instantiated.publicMethods;
    console.log(methods);

    methods.forEach(method => {
      this.prototype[method] = instantiated.prototype[method];
      // this[method] = instantiated[method];
      if (addNamespace) {
        this[instantiated.namespace][method] = instantiated[method];
      }
    });
  }
}

const foo = new Fastly('asdf');
