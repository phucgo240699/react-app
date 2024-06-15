import authenticationSlice from "store/reducers/authentication";
import sessionSlice from "./session";

const rootReducer = {
  session: sessionSlice.reducer,
  authentication: authenticationSlice.reducer,
};

export default rootReducer;
