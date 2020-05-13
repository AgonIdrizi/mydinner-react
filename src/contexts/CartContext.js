import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = props => {
  const [itemsInCart, setItemsInCart] = useState([])
  return (
    <CartContext.Provider value={{ agon: "agon" }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
