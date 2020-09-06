import { AxiosInstance } from "axios";

export interface IEndpointFactory {
  instantiate({ jsonRequest, formRequest }: { jsonRequest: AxiosInstance, formRequest: AxiosInstance }): IEndpoint;
}

interface IEndpointConstructor {
  new ({jsonRequest, formRequest}: {jsonRequest: AxiosInstance, formRequest: AxiosInstance}): IEndpoint;
}

interface IEndpoint {
  request: AxiosInstance;
  request_form: AxiosInstance;
}

export const GenericEndpoint: IEndpointConstructor = class GenericEndpoint implements IEndpoint {
  request: AxiosInstance;
  request_form: AxiosInstance;

  constructor({jsonRequest, formRequest}: {jsonRequest: AxiosInstance, formRequest: AxiosInstance}) {
    this.request = jsonRequest;
    this.request_form = formRequest;
  }
}
