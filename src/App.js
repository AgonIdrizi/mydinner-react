import React from "react";
import MyDinnerBuilder from "./Containers/MyDinnerBuilder/MyDinnerBuilder";
import { ToastProvider } from "react-toast-notifications";
import "./App.css";
import {
  QueryCache,
  ReactQueryCacheProvider,
  ReactQueryConfigProvider
} from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import ContextProviders from "./contexts/index";

const queryConfig = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false
  }
};
const queryCache = new QueryCache();

function App() {
  return (
    <div className="App">
      <ReactQueryConfigProvider config={queryConfig}>
        <ReactQueryCacheProvider queryCache={queryCache}>
          <ToastProvider>
            <ContextProviders>
              <MyDinnerBuilder />
            </ContextProviders>
          </ToastProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </ReactQueryCacheProvider>
      </ReactQueryConfigProvider>
    </div>
  );
}

export default App;
