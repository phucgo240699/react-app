import axios from "axios";
import { isNil } from "utils/index";
import { BASE_API_URL } from "constants/index";
import {
  errorInterceptor,
  requestInterceptor,
  responseInterceptor,
} from "./interceptors";
import { dispatch } from "store";
import sessionSlice from "store/reducers/session";

const baseAxios = axios.create({
  baseURL: BASE_API_URL,
  validateStatus: function (status) {
    return status === 200 || status === 201;
  },
});
baseAxios.interceptors.request.use(requestInterceptor, errorInterceptor);
baseAxios.interceptors.response.use(responseInterceptor, errorInterceptor);

const defaultHeader = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const getFormatedHeaders = (headers: any) => {
  const accessToken = headers?.accessToken;
  if (!isNil(accessToken)) {
    delete headers.accessToken;
    return {
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    };
  }
  return headers;
};

const getUrlWithQueryParams = (url: string, params?: any[]) => {
  if (params && params.length > 0) {
    const queryParams = params.reduce((prev, cur) => {
      const key = Object.keys(cur);
      const value = cur.key;
      return prev + `${key}=${value}`;
    });
    return `${url}?${queryParams}`;
  }
  return url;
};

interface IGenericRequest {
  url: string;
  params?: any[];
  headers?: any;
  loading?: boolean;
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

const getRequest = async ({ url, params, headers, loading }: IGetRequest) => {
  const queryUrl = getUrlWithQueryParams(url, params);
  if (loading) {
    dispatch(sessionSlice.actions.showLoading());
  }
  const response = await baseAxios.get(queryUrl, {
    headers: {
      ...defaultHeader,
      ...getFormatedHeaders(headers),
    },
  });
  if (loading) {
    dispatch(sessionSlice.actions.hideLoading());
  }
  return response;
};

const postRequest = async ({
  url,
  params,
  body,
  headers = {},
  loading = false,
}: IPostRequest) => {
  const queryUrl = getUrlWithQueryParams(url, params);
  if (loading) {
    dispatch(sessionSlice.actions.showLoading());
  }
  const response = await baseAxios.post(queryUrl, body, {
    headers: {
      ...defaultHeader,
      ...getFormatedHeaders(headers),
    },
  });
  if (loading) {
    dispatch(sessionSlice.actions.hideLoading());
  }
  return response;
};

const putRequest = async ({
  url,
  params,
  body,
  headers = {},
  loading = false,
}: IPutRequest) => {
  const queryUrl = getUrlWithQueryParams(url, params);
  if (loading) {
    dispatch(sessionSlice.actions.showLoading());
  }
  const response = await baseAxios.put(queryUrl, body, {
    headers: {
      ...defaultHeader,
      ...getFormatedHeaders(headers),
    },
  });
  if (loading) {
    dispatch(sessionSlice.actions.hideLoading());
  }
  return response;
};

const deleteRequest = async ({
  url,
  params,
  headers = {},
  loading = false,
}: IDeleteRequest) => {
  const queryUrl = getUrlWithQueryParams(url, params);
  if (loading) {
    dispatch(sessionSlice.actions.showLoading());
  }
  const response = await baseAxios.delete(queryUrl, {
    headers: {
      ...defaultHeader,
      ...getFormatedHeaders(headers),
    },
  });
  if (loading) {
    dispatch(sessionSlice.actions.hideLoading());
  }
  return response;
};

export { getRequest, postRequest, putRequest, deleteRequest };
