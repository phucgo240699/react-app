import productsSlice from "store/reducers/products";
import categoriesSlice from "store/reducers/categories";
import authenticationSlice from "store/reducers/authentication";
import sessionSlice from "./session";

const rootReducer = {
  session: sessionSlice.reducer,
  authentication: authenticationSlice.reducer,
  categories: categoriesSlice.reducer,
  products: productsSlice.reducer,
};

export default rootReducer;
