import React, { useContext, useEffect } from "react";
import "./CartCard.scss";
import { CartContext } from "../../../../contexts/CartContext";

const CartCard = () => {
  const context = useContext(CartContext);
  const { itemsInCart } = context;
  const displayItemsObj = {};

  useEffect(() => {
    itemsInCart.map(cartObj => {
      displayItemsObj[cartObj.name] === undefined
        ? (displayItemsObj[cartObj.name] = 1)
        : displayItemsObj[cartObj.name]++;
    });
  }, [itemsInCart]);
  console.log(displayItemsObj);

  console.log("agon", itemsInCart);
  return (
    <div className="CartCard">
      <h2>Cart</h2>
      <p>{itemsInCart.length}</p>
      <div>
        {Object.keys(displayItemsObj).map(item => (
          <p>
          {item} : {displayItemsObj[item].value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CartCard;
