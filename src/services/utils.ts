import { isNil } from "utils";

export const getFormatedHeaders = (headers: any) => {
  const accessToken = localStorage.getItem("accessToken");
  if (!isNil(accessToken)) {
    return {
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    };
  }
  return headers;
};

export const getUrlWithQueryParams = (url: string, params?: any[]) => {
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
