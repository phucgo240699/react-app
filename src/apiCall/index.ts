import { AxiosError } from "axios";
import { dispatch } from "store";
import sessionSlice from "store/reducers/session";

interface IAPICall<IRequest, IResponse> {
  data: IRequest;
  request: (data: IRequest) => Promise<IResponse>;
  loading?: boolean;
}

const apiCall = async <IRequest, IResponse>({
  loading,
  request,
  data,
}: IAPICall<IRequest, IResponse>) => {
  try {
    if (loading === true) {
      dispatch(sessionSlice.actions.showLoading());
    }
    const response = await request(data);
    if (loading === true) {
      dispatch(sessionSlice.actions.showLoading());
    }
    return response;
  } catch (error) {
    if (loading === true) {
      dispatch(sessionSlice.actions.hideLoading());
    }
    (
      (error as AxiosError)?.response?.data as { errors?: string[] }
    )?.errors?.forEach((_error) => {
      dispatch(
        sessionSlice.actions.addErrorToastWithTranslation(`backend.${_error}`)
      );
    });
  }
};

export default apiCall;
