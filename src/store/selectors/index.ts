import store from "store";
import { useSelector } from "react-redux";

export const useRootSelector = () => {
  return useSelector(store.getState);
};
