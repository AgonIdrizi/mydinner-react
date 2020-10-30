import React from "react";
import MyDinnerBuilder from "./Containers/MyDinnerBuilder/MyDinnerBuilder";
import "./App.css";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import CartContextProvider from "./contexts/CartContext";
import UserContextProvider from "./contexts/UserContext";
import OrderContextProvider from "./contexts/OrderContext";

const queryCache = new QueryCache();

function App() {
  return (
    <div className="App">
      <ReactQueryCacheProvider queryCache={queryCache}>
        <UserContextProvider>
          <CartContextProvider>
            <OrderContextProvider>
              <MyDinnerBuilder />
            </OrderContextProvider>
          </CartContextProvider>
        </UserContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </ReactQueryCacheProvider>
    </div>
  );
}

export default App;
