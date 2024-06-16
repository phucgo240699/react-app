import {
  getFormatedHeaders,
  getUrlWithQueryParams,
} from "services/config/utils";
import baseAxios from "services/config";
import {
  IDeleteRequestParameters,
  IGetRequestParameters,
  IPostRequestParameters,
  IPutRequestParameters,
} from "services/types";

const getRequest = async ({ url, params, headers }: IGetRequestParameters) => {
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
}: IPostRequestParameters) => {
  const queryUrl = getUrlWithQueryParams(url, params);
  const response = await baseAxios.post(queryUrl, body, {
    headers: {
      ...getFormatedHeaders(headers),
    },
  });
  return response;
};

const putRequest = async ({
  url,
  params,
  body,
  headers = {},
}: IPutRequestParameters) => {
  const queryUrl = getUrlWithQueryParams(url, params);
  const response = await baseAxios.put(queryUrl, body, {
    headers: {
      ...getFormatedHeaders(headers),
    },
  });
  return response;
};

const deleteRequest = async ({
  url,
  params,
  headers = {},
}: IDeleteRequestParameters) => {
  const queryUrl = getUrlWithQueryParams(url, params);
  const response = await baseAxios.delete(queryUrl, {
    headers: {
      ...getFormatedHeaders(headers),
    },
  });
  return response;
};

export { getRequest, postRequest, putRequest, deleteRequest };
