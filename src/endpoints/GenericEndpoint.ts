import { AxiosInstance } from "axios";

export function staticImplements<T>() {
  return <U extends T>(constructor: U) => { constructor };
}

export interface IEndpointFactory {
  instantiate({ jsonRequest, formRequest }: { jsonRequest: AxiosInstance, formRequest: AxiosInstance }): IEndpoint;
}

interface IEndpointConstructor {
  new ({jsonRequest, formRequest}: {jsonRequest: AxiosInstance, formRequest: AxiosInstance}): IEndpoint;
}

interface IEndpoint {
  [k: string]: any;
  request: AxiosInstance;
  request_form: AxiosInstance;
  namespace: string;
  publicMethods: Array<string>
}

export const GenericEndpoint: IEndpointConstructor = class GenericEndpoint implements IEndpoint {
  request: AxiosInstance;
  request_form: AxiosInstance;
  namespace: string = '';
  publicMethods: Array<string> = [];

  constructor({jsonRequest, formRequest}: {jsonRequest: AxiosInstance, formRequest: AxiosInstance}) {
    this.request = jsonRequest;
    this.request_form = formRequest;
  }
}
