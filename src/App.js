import React from "react";
import MyDinnerBuilder from "./Containers/MyDinnerBuilder/MyDinnerBuilder";
import { ToastProvider } from "react-toast-notifications";
import "./App.css";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import CartContextProvider from "./contexts/CartContext";
import {UserContextProvider} from "./contexts/UserContext";
import OrderContextProvider from "./contexts/OrderContext";

const queryCache = new QueryCache();

function App() {
  return (
    <div className="App">
      <ReactQueryCacheProvider queryCache={queryCache}>
        <ToastProvider>
          <UserContextProvider>
            <CartContextProvider>
              <OrderContextProvider>
                <MyDinnerBuilder />
              </OrderContextProvider>
            </CartContextProvider>
          </UserContextProvider>
        </ToastProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </ReactQueryCacheProvider>
    </div>
  );
}

export default App;
