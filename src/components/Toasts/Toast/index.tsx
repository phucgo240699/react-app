import React, { useEffect } from "react";
import classes from "./index.module.css";
import { IToast, InfoToast, WarningToast, ErrorToast } from "models/toasts";
import i18n from "locales";
import { dispatch } from "store";
import sessionSlice from "store/reducers/session";

interface Props {
  toast: IToast;
}
const Toast: React.FC<Props> = ({ toast }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(sessionSlice.actions.removeToast(toast.id));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [toast]);
  return (
    <React.Fragment key={toast.id?.toString()}>
      {toast instanceof InfoToast && (
        <div className={classes.info}>
          {toast.needTranslation ? i18n.t(toast.message) : toast.message}
        </div>
      )}
      {toast instanceof WarningToast && (
        <div className={classes.warning}>
          {toast.needTranslation ? i18n.t(toast.message) : toast.message}
        </div>
      )}
      {toast instanceof ErrorToast && (
        <div className={classes.error}>
          {toast.needTranslation ? i18n.t(toast.message) : toast.message}
        </div>
      )}
    </React.Fragment>
  );
};

export default Toast;
