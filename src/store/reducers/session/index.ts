import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IToast, InfoToast, WarningToast, ErrorToast } from "models/toasts";

interface SessionState {
  loading: boolean;
  toasts: IToast[];
  toastsAmount: number;
}

const initialState = {
  loading: false,
  toasts: [],
  toastsAmount: 0,
} satisfies SessionState as SessionState;

const sessionSlice = createSlice({
  name: "session",
  initialState: initialState,
  reducers: {
    showLoading(state) {
      state.loading = true;
    },
    hideLoading(state) {
      state.loading = false;
    },
    addInfoToast(state, action: PayloadAction<string>) {
      const toast: IToast = new InfoToast(action.payload, state.toastsAmount);
      state.toasts.push(toast);
      state.toastsAmount += 1;
    },
    addInfoToastWithTranslation(state, action: PayloadAction<string>) {
      const toast: IToast = new InfoToast(
        action.payload,
        state.toastsAmount,
        true
      );
      state.toasts.push(toast);
      state.toastsAmount += 1;
    },
    addWarningToast(state, action: PayloadAction<string>) {
      const toast: IToast = new WarningToast(
        action.payload,
        state.toastsAmount
      );
      state.toasts.push(toast);
      state.toastsAmount += 1;
    },
    addWarningToastWithTranslation(state, action: PayloadAction<string>) {
      const toast: IToast = new WarningToast(
        action.payload,
        state.toastsAmount,
        true
      );
      state.toasts.push(toast);
      state.toastsAmount += 1;
    },
    addErrorToast(state, action: PayloadAction<string>) {
      const toast: IToast = new ErrorToast(action.payload, state.toastsAmount);
      state.toasts.push(toast);
      state.toastsAmount += 1;
    },
    addErrorToastWithTranslation(state, action: PayloadAction<string>) {
      const toast: IToast = new ErrorToast(
        action.payload,
        state.toastsAmount,
        true
      );
      state.toasts.push(toast);
      state.toastsAmount += 1;
    },
    removeToast(state, action: PayloadAction<number | undefined>) {
      state.toasts = state.toasts.filter(
        (toast) => toast.id !== action.payload
      );
    },
    clearToasts(state) {
      state.toasts = [];
      state.toastsAmount = 0;
    },
    reset(state) {
      state = initialState;
    },
  },
});

export default sessionSlice;
