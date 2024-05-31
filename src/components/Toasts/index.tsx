import React from "react";
import classes from "./index.module.css";
import { IToast, InfoToast, WarningToast, ErrorToast } from "models/toasts";
import i18n from "locales";
import Toast from "./Toast";

interface Props {
  toasts: IToast[];
}

const Toasts: React.FC<Props> = ({ toasts }) => {
  return (
    <div className={classes.container}>
      {toasts.map((toast) => (
        <Toast toast={toast} />
      ))}
    </div>
  );
};

export default Toasts;
