import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = props => {
  const [itemsInCart, setItemsInCart] = useState([]);

  const onAddMenuHandler = item => {
    if (typeof item == "string") {
      const newitem = itemsInCart.find(elem => elem.name === item);
      setItemsInCart([...itemsInCart, newitem]);
      return;
    }
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
