import React from "react";
import MyDinnerBuilder from "./Containers/MyDinnerBuilder/MyDinnerBuilder";
import "./App.css";
import CartContextProvider from "./contexts/CartContext";
import UserContextProvider from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <CartContextProvider>
          <MyDinnerBuilder />
        </CartContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
