import { ComponentType } from "react";
import ErrorBoundary from "components/ErrorBoundary";

const withErrorBoundary = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  return (props: P) => (
    <ErrorBoundary>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );
};

export default withErrorBoundary;
