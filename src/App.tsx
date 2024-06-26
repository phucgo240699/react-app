import Loader from "components/Loader";
import Toasts from "components/Toasts";
import { PageRoutes } from "constants/routes";
import withErrorBoundary from "hocs/errorBoundary";
import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { dispatch } from "store";
import sessionSlice from "store/reducers/session";
import { useRootSelector } from "store/selectors";

const HomePage = lazy(() => import("pages/home"));
const SignInPage = lazy(() => import("pages/signIn"));

const RoutedComponent = () => {
  const selectors = useRootSelector();
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path={PageRoutes.Home}
            element={
              selectors.authentication.isAuthenticated ? (
                <HomePage />
              ) : (
                <Navigate to={PageRoutes.SignIn} />
              )
            }
          />
          <Route path={PageRoutes.SignIn} element={<SignInPage />} />
        </Routes>
      </Suspense>
      {selectors.session.loading && <Loader />}
      <Toasts toasts={selectors.session.toasts} />
    </BrowserRouter>
  );
};

const RoutedComponentWithErrorBoundary = withErrorBoundary(RoutedComponent);

function App() {
  useEffect(() => {
    dispatch(sessionSlice.actions.hideLoading());
  }, []);
  return <RoutedComponentWithErrorBoundary />;
}

export default App;
