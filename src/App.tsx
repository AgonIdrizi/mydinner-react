import React from "react";
import MyDinnerBuilder from "./Containers/MyDinnerBuilder/MyDinnerBuilder";
import "./App.css";
import CartContextProvider from "./contexts/CartContext";

function App() {
  return (
    <div className="App">
      <CartContextProvider >
          <MyDinnerBuilder />
      </CartContextProvider>
      
    </div>
  );
}

export default App;
