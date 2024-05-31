import { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from "axios";
import { dispatch } from "store";
import authenticationSlice from "store/reducers/authentication";
import sessionSlice from "store/reducers/session";

export const responseInterceptor = (response: AxiosResponse) => {
  const url = response.config.url;
  const accessToken = response.data?.data?.accessToken as string;
  if (url === "/users/signIn" && accessToken != null) {
    dispatch(authenticationSlice.actions.setIsAuthenticated(true));
    localStorage.setItem("accessToken", accessToken);
  }
  return Promise.resolve(response.data?.data);
};

export const errorInterceptor = (error: AxiosError) => {
  (error.response?.data as any)?.errors?.forEach((_error: string) => {
    dispatch(sessionSlice.actions.addErrorToast(`backend.${_error}`));
  });
  return Promise.resolve(error);
};

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  return config;
};
