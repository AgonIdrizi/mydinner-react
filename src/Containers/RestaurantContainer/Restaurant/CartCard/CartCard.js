import React, { useEffect, useState } from "react";
import {useDispatch, useSelector, useStore} from 'react-redux'
import LineBreak from "../../../../Components/UI/LineBreak/LineBreak";
import {withRouter} from "react-router-dom";
import { countObjectsWithEqualProperty } from "../../../../utils/helperFunctions";
import {Button} from "antd"

import {checkout, addToCart, removeFromCart} from '../../../../store/actions/index';
import  emptyCartImg from "../../../../assets/empty-cart.svg"
import "./CartCard.scss";

const CartCard = ({ restaurantName, history }) => {
  const [displayItemsObj, setDisplayItemsObj] = useState({});
  const itemsInCart = useSelector(state => state.CardReducer.itemsInCart)
  const totalAmount = useSelector(state => state.CardReducer.totalAmount)
  const dispatch = useDispatch();


  useEffect(() => {
    if (itemsInCart === undefined) {
      dispatch({type:""})
    }
    if (itemsInCart) {
      if (itemsInCart.length === 0) {
        setDisplayItemsObj({});
        return;
      }
      setDisplayItemsObj(countObjectsWithEqualProperty(itemsInCart));
    }
  }, [itemsInCart]);

  const countprice = (item, count) => {
    const elem = itemsInCart.find(elem => elem.name === item);
    return elem !== undefined ? elem.price * displayItemsObj[item] : null;
  };

  const handleCheckout = () => {
    dispatch(checkout());
    history.push("/cart")
  }
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
                  <button onClick={() => dispatch(removeFromCart(item))}>-</button>
                  <span>{displayItemsObj[item]}</span>
                  <button onClick={() => dispatch(addToCart(item))}>+</button>
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
        <div className="CardCheckout">
          <div><span>SubTotal</span><span>{totalAmount}</span></div>
          <div className="DeliveryFee"><span>Delivery Fee</span><span>Free</span></div>
          <div><span>Total Amount</span><span>{totalAmount}</span></div>
          <Button onClick={() => handleCheckout()} style={{backgroundColor:"#00a53c", color: 'white'}}>PROCEED TO CHECKOUT</Button>
        </div>
      )}
    </div>
  );
};

export default withRouter(CartCard);
