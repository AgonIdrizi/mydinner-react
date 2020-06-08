import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = props => {
  const [itemsInCart, setItemsInCart] = useState([]);

  const onAddMenuHandler = item => {
    setItemsInCart([...itemsInCart, item]);
  };

  const onRemoveMenuHandler = item => {
    let indexOfObject = itemsInCart.findIndex(elem => elem.name === item);
    itemsInCart.splice(indexOfObject, 1);
    setItemsInCart([...itemsInCart]);
  };
  return (
    <CartContext.Provider
      value={{ itemsInCart, onAddMenuHandler, onRemoveMenuHandler }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
