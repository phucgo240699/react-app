import { getFormatedHeaders, getUrlWithQueryParams } from "./utils";
import baseAxios from "./config";

interface IGenericRequest {
  url: string;
  params?: any[];
  headers?: any;
}

interface IGetRequest extends IGenericRequest {}
interface IPostRequest extends IGenericRequest {
  body?: any;
}
interface IPutRequest extends IGenericRequest {
  body?: any;
}
interface IDeleteRequest extends IGenericRequest {
  body?: any;
}

const getRequest = async ({ url, params, headers }: IGetRequest) => {
  const queryUrl = getUrlWithQueryParams(url, params);
  const response = await baseAxios.get(queryUrl, {
    headers: {
      ...getFormatedHeaders(headers),
    },
  });
  return response;
};

const postRequest = async ({
  url,
  params,
  body,
  headers = {},
}: IPostRequest) => {
  const queryUrl = getUrlWithQueryParams(url, params);
  const response = await baseAxios.post(queryUrl, body, {
    headers: {
      ...getFormatedHeaders(headers),
    },
  });
  return response;
};

const putRequest = async ({ url, params, body, headers = {} }: IPutRequest) => {
  const queryUrl = getUrlWithQueryParams(url, params);
  const response = await baseAxios.put(queryUrl, body, {
    headers: {
      ...getFormatedHeaders(headers),
    },
  });
  return response;
};

const deleteRequest = async ({ url, params, headers = {} }: IDeleteRequest) => {
  const queryUrl = getUrlWithQueryParams(url, params);
  const response = await baseAxios.delete(queryUrl, {
    headers: {
      ...getFormatedHeaders(headers),
    },
  });
  return response;
};

export { getRequest, postRequest, putRequest, deleteRequest };
