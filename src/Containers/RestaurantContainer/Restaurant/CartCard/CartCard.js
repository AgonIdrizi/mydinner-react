import React, { useContext, useEffect, useState } from "react";
import "./CartCard.scss";
import { CartContext } from "../../../../contexts/CartContext";
import { countObjectsWithEqualProperty } from "../../../../utils/helperFunctions";

const CartCard = () => {
  const [displayItemsObj, setDisplayItemsObj] = useState({});
  const context = useContext(CartContext);
  const { itemsInCart, onAddMenuHandler, onRemoveMenuHandler } = context;

  useEffect(() => {
    if (itemsInCart.length === 0) {
      setDisplayItemsObj({});
      return;
    }
    setDisplayItemsObj(countObjectsWithEqualProperty(itemsInCart));
  }, [itemsInCart]);

  const countprice = (item, count) => {
    const elem = itemsInCart.find(elem => elem.name === item);
    return elem !== undefined ? elem.price * displayItemsObj[item] : null;
  };

  return (
    <div className="CartCard">
      <h2>Cart</h2>
      <div>
        {Object.keys(displayItemsObj).map(item => (
          <div>
            <p>
              {item} : {displayItemsObj[item]}
            </p>
            {countprice(item, displayItemsObj[item])}
            <button onClick={() => onRemoveMenuHandler(item)}>-</button>
            <button onClick={() => onAddMenuHandler(item)}>+</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartCard;
