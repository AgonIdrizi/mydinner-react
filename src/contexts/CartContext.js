import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = props => {
  const [itemsInCart, setItemsInCart] = useState([])

  const onAddMenuHandler = item => {
    setItemsInCart([...itemsInCart, item]);
    console.log("addMenu")
  }

  const onRemoveMenuHandler = id => {
    console.log("removeMenu")
  }
  return (
    <CartContext.Provider value={{ itemsInCart, onAddMenuHandler }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
