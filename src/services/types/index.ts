interface IRequestParameters {
  url: string;
  params?: any[];
  headers?: any;
}

export interface IGetRequestParameters extends IRequestParameters {}
export interface IPostRequestParameters extends IRequestParameters {
  body?: any;
}
export interface IPutRequestParameters extends IRequestParameters {
  body?: any;
}
export interface IDeleteRequestParameters extends IRequestParameters {
  body?: any;
}
