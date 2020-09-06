import axios, { AxiosInstance } from 'axios';

interface IEndpointConstructor {
  new (apiKey: string, timeout: number): IEndpoint;
}

interface IEndpoint {
  request: AxiosInstance;
  request_form: AxiosInstance;
}

const GenericEndpoint: IEndpointConstructor = class GenericEndpoint implements IEndpoint {
  request: AxiosInstance;
  request_form: AxiosInstance;

  constructor(apiKey: string, timeout: number) {
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
  }
}

export default GenericEndpoint
