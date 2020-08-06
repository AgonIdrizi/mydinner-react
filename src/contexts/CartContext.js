import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = props => {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const onAddMenuHandler = item => {
    if (typeof item == "string") {
      const newitem = itemsInCart.find(elem => elem.name === item);
      setItemsInCart([...itemsInCart, newitem]);
      setTotalAmount(totalAmount + item.price)
      return;
    }
    setItemsInCart([...itemsInCart, item]);
    setTotalAmount(totalAmount + item.price)
  };

  const onRemoveMenuHandler = item => {
    let indexOfObject = itemsInCart.findIndex(elem => elem.name === item);
    console.log(item)
    itemsInCart.splice(indexOfObject, 1);
    setItemsInCart([...itemsInCart]);
    console.log(item)
    //setTotalAmount(totalAmount - item.price);
  
  };
  return (
    <CartContext.Provider
      value={{ itemsInCart, totalAmount, onAddMenuHandler, onRemoveMenuHandler }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
