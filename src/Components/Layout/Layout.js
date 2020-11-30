import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";
import { useErrorResetBoundary, ReactQueryErrorResetBoundary } from "react-query";
import "./Layout.scss";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={() => resetErrorBoundary()}>Try again</button>
    </div>
  );
}

const Layout = ({ children }) => {
  //const { reset } = useErrorResetBoundary()
  return (
    <>
      <Header />
      <ReactQueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
            {children}
          </ErrorBoundary>
        )}
      </ReactQueryErrorResetBoundary>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Layout;
