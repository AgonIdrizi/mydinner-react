import React, { useContext, useEffect, useState } from "react";
import path from 'path';
import LineBreak from "../../../../Components/UI/LineBreak/LineBreak";
import "./CartCard.scss";
import { CartContext } from "../../../../contexts/CartContext";
import { countObjectsWithEqualProperty } from "../../../../utils/helperFunctions";
import {Button} from "antd"

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
        <div className="CardCheckout" style={{ height: "120px" }}>
          <div><span>SubTotal</span><span>{1000}</span></div>
          <div><span>Delivery Fee</span><span>Free</span></div>
          <div><span>Total Amount</span><span>{1000}</span></div>
          <Button style={{backgroundColor:"#00a53c", color: 'white'}}>PROCEED TO CHECKOUT</Button>
        </div>
      )}
    </div>
  );
};

export default CartCard;
