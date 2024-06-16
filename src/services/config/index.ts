import axios from "axios";
import { BASE_API_URL } from "constants/index";
import { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from "axios";
import authenticationSlice from "store/reducers/authentication";
import { dispatch } from "store";
import { RequestStatusCode } from "constants/statusCodes";
import { getFormatedHeaders } from "./utils";

const baseAxios = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  validateStatus: function (status) {
    return (
      status === RequestStatusCode.Success ||
      status === RequestStatusCode.ExpiredAccessToken ||
      status === RequestStatusCode.ExpiredRefreshToken
    );
  },
});

const responseInterceptor = async (response: AxiosResponse) => {
  if (response.status === RequestStatusCode.Success) {
    const url = response.config.url;
    const accessToken: string = response.data.data?.accessToken;
    const refreshToken: string = response.data.data?.refreshToken;
    if (url === "/users/signIn" && accessToken != null) {
      dispatch(authenticationSlice.actions.setIsAuthenticated(true));
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    }
    return Promise.resolve(response.data?.data);
  } else if (response.status === RequestStatusCode.ExpiredAccessToken) {
    const refreshTokenResponse = await axios.post(
      "/users/refreshToken",
      {
        refreshToken: localStorage.getItem("refreshToken"),
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        baseURL: BASE_API_URL,
        validateStatus: (status) =>
          status === RequestStatusCode.Success ||
          status === RequestStatusCode.ExpiredRefreshToken,
      }
    );
    const accessToken: string = refreshTokenResponse.data.data?.accessToken;
    const refreshToken: string = refreshTokenResponse.data.data?.refreshToken;
    if (accessToken != null && refreshToken != null) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      const recalledResponse = await axios.request({
        baseURL: BASE_API_URL,
        url: response.config.url,
        params: response.config.params,
        data: response.data,
        headers: getFormatedHeaders(response.headers),
      });
      return Promise.resolve(recalledResponse.data.data);
    } else {
      dispatch(authenticationSlice.actions.logout());
      return Promise.resolve({});
    }
  }
};

const errorInterceptor = (error: AxiosError) => Promise.reject(error);

const requestInterceptor = (config: InternalAxiosRequestConfig) => config;

baseAxios.interceptors.request.use(requestInterceptor, errorInterceptor);
baseAxios.interceptors.response.use(responseInterceptor, errorInterceptor);

export default baseAxios;
