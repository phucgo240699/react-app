import { AxiosError } from "axios";
import { NEED_TO_FORMAT_API_RESPONSE_ERROR } from "constants/index";
import { RequestStatusCode } from "constants/statusCodes";
import { t } from "i18next";
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
    const typedError = error as AxiosError;
    if (typedError.status === RequestStatusCode.InternalServerError) {
      dispatch(
        sessionSlice.actions.addErrorToast(t("error.internalServerError"))
      );
    } else {
      (
        (typedError as AxiosError)?.response?.data as { errors?: string[] }
      )?.errors?.forEach((_error) => {
        if (NEED_TO_FORMAT_API_RESPONSE_ERROR) {
          dispatch(
            sessionSlice.actions.addErrorToastWithTranslation(
              `backend.${_error}`
            )
          );
        } else {
          dispatch(sessionSlice.actions.addErrorToast(_error));
        }
      });
    }
  }
};

export default apiCall;
