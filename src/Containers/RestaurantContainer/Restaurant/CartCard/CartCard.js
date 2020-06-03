import React, { useContext, useEffect, useState } from "react";
import "./CartCard.scss";
import { CartContext } from "../../../../contexts/CartContext";

const countObjectsWithEqualProperty = arrayOfObjects => {
  return arrayOfObjects.reduce((acc, elem) => {
    acc[elem.name] ? acc[elem.name]++ : (acc[elem.name] = 1);
    return acc;
  }, {});
};

const CartCard = () => {
  const [displayItemsObj, setDisplayItemsObj] = useState({});
  const context = useContext(CartContext);
  const { itemsInCart } = context;

  useEffect(() => {
    setDisplayItemsObj(countObjectsWithEqualProperty(itemsInCart));
  }, [itemsInCart]);

  return (
    <div className="CartCard">
      <h2>Cart</h2>
      <p>{itemsInCart.length}</p>
      <div>
        {Object.keys(displayItemsObj).map(item => (
          <p>
            {item} : {displayItemsObj[item]}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CartCard;
