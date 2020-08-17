import React from "react";
import MyDinnerBuilder from "./Containers/MyDinnerBuilder/MyDinnerBuilder";
import "./App.css";
import CartContextProvider from "./contexts/CartContext";
import UserContextProvider from "./contexts/UserContext";
import OrderContextProvider from "./contexts/OrderContext"

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <CartContextProvider>
          <OrderContextProvider>
            <MyDinnerBuilder />
          </OrderContextProvider>
        </CartContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
