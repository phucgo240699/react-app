import { Middleware } from "@reduxjs/toolkit";
import authenticationSlice from "store/reducers/authentication";
import sessionSlice from "store/reducers/session";

const defaultMiddleware: Middleware = (store) => (next) => (action) => {
  if (typeof action === "function" && action.name === "logout") {
    // Reset redux store
    store.dispatch(authenticationSlice.actions.reset());
    store.dispatch(sessionSlice.actions.reset());
    localStorage.clear();
  }
  return next(action);
};

export default defaultMiddleware;
