import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "store/reducers";
import defaultMiddleware from "store/middlewares";

const persistConfig = {
  key: "root",
  storage,
};

const combinedReducers = combineReducers({
  ...rootReducer,
});

const store = configureStore({
  reducer: persistReducer(persistConfig, combinedReducers),
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(defaultMiddleware),
});

export const persistedStore = persistStore(store);

export const dispatch = store.dispatch;

export default store;
