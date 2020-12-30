import * as React from "react";
import { render as rtlRender } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import {
  QueryCache,
  ReactQueryCacheProvider,
  ReactQueryConfigProvider
} from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import ContextProviders from '../contexts/index'

const queryConfig = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false
  }
};
const queryCache = new QueryCache();

function render(ui, { ...options } = {}) {
  const Wrapper = ({ children }) => (
    <Router>
    <ReactQueryConfigProvider config={queryConfig}>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <ToastProvider>
          <ContextProviders>{children}</ContextProviders>
        </ToastProvider>
      </ReactQueryCacheProvider>
    </ReactQueryConfigProvider>
    </Router>
  );
  return rtlRender(ui, { wrapper: Wrapper, options });
}

export * from '@testing-library/react'
// override React Testing Library's render with our own
export {render}