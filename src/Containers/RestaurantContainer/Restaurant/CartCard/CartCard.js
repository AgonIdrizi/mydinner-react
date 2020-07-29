import React, { useContext, useEffect, useState } from "react";
import path from 'path';
import LineBreak from "../../../../Components/UI/LineBreak/LineBreak";
import "./CartCard.scss";
import { CartContext } from "../../../../contexts/CartContext";
import { countObjectsWithEqualProperty } from "../../../../utils/helperFunctions";

import  emptyCartImg from "../../../../assets/empty-cart.svg"

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
      {Object.keys(displayItemsObj).length === 0 ? null : (
          <div className="CartRestaurantName">
            <h3>{restaurantName}</h3>
          </div>)}
      {Object.keys(displayItemsObj).length !== 0 ? <LineBreak /> : null}
      {Object.keys(displayItemsObj).length === 0 ? (
        <div className="CartNoItemsImage">
          <img src={emptyCartImg} style={{ height: "80px" }} alt="no-items" />
          <p>There are no items in cart</p>
        </div>
      ) : (
        <table>
          <tbody>
            {Object.keys(displayItemsObj).map(item => (
              <tr>
                <td>
                  <button onClick={() => onRemoveMenuHandler(item)}>-</button>
                  <span>{displayItemsObj[item]}</span>
                  <button onClick={() => onAddMenuHandler(item)}>+</button>
                </td>
                <td>{item}</td>
                <td>{countprice(item, displayItemsObj[item])}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {Object.keys(displayItemsObj).length !== 0 ? <LineBreak /> : null}
      {Object.keys(displayItemsObj).length === 0 ? null : (
        <div style={{ height: "100px" }}>Proceed to checkout</div>
      )}
    </div>
  );
};

export default CartCard;
