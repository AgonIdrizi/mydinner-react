import React, { useContext, useEffect, useState } from "react";
import "./CartCard.scss";
import { CartContext } from "../../../../contexts/CartContext";
import { countObjectsWithEqualProperty } from "../../../../utils/helperFunctions";

const CartCard = () => {
  const [displayItemsObj, setDisplayItemsObj] = useState({});
  const context = useContext(CartContext);
  const { itemsInCart, onRemoveMenuHandler } = context;

  useEffect(() => {
    if (itemsInCart.length === 0) {
      setDisplayItemsObj({});
      return;
    }
    setDisplayItemsObj(countObjectsWithEqualProperty(itemsInCart));
  }, [itemsInCart]);

  return (
    <div className="CartCard">
      <h2>Cart</h2>
      <div>
        {Object.keys(displayItemsObj).map(item => (
          <div>
            <p>
              {item} : {displayItemsObj[item]}
            </p>
            <button onClick={() => onRemoveMenuHandler(item)}>-</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartCard;
