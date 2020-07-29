import React, { useContext, useEffect, useState } from "react";
import "./CartCard.scss";
import { CartContext } from "../../../../contexts/CartContext";
import { countObjectsWithEqualProperty } from "../../../../utils/helperFunctions";

const CartCard = ({ restaurantName }) => {
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
      <div className="CartCardHeader">
        <h2>Cart</h2>
      </div>
      <div className="CartRestaurantName">
        <h3>{restaurantName}</h3>
      </div>
      <div></div>
      <div className="LineBreak"></div>
      <table>
        <tbody>
          {Object.keys(displayItemsObj).map(item => (
            <tr>
              <td>
                <button onClick={() => onRemoveMenuHandler(item)}>-</button>
                <span >{displayItemsObj[item]}</span>
                <button onClick={() => onAddMenuHandler(item)}>+</button>
              </td>
              <td>
                {item}
              </td>
              <td>
                {countprice(item, displayItemsObj[item])}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartCard;
