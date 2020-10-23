import React, { useEffect, useState, useContext } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { OrderContext } from '../../../../contexts/OrderContext';
import LineBreak from "../../../../Components/UI/LineBreak/LineBreak";
import {withRouter, useHistory, useLocation, Link} from "react-router-dom";
import { motion } from 'framer-motion'
import { countObjectsWithEqualProperty } from "../../../../utils/helperFunctions";
import {Button} from "antd"

import {checkout, addToCart, removeFromCart, clearCart, showClearCartModal} from '../../../../store/actions/index';
import  emptyCartImg from "../../../../assets/empty-cart.svg"
import "./CartCard.scss";

const CartCard = ({ restaurantName, showCheckoutButton, match }) => {
  const history = useHistory()
  const location = useLocation()
  const [displayItemsObj, setDisplayItemsObj] = useState({});
  const itemsInCart = useSelector(state => state.CardReducer.itemsInCart)
  const totalAmount = useSelector(state => state.CardReducer.totalAmount)
  const dispatch = useDispatch();


  useEffect(() => {
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

  const handleAddToCart = (item) => {
    // if cartItems is empty, set restaurantSelected to match.params.id
    if (itemsInCart.length == 0) setRestaurantSelected(match.params.id);
    dispatch(addToCart(item))
  }

  const handleRemoveFromCart = (item) => {
    // if cartItems.length is 1 set restaurantSelected to 0
    if (itemsInCart.length == 1) setRestaurantSelected(0)
    dispatch(removeFromCart(item))
  }

  const handleCheckout = () => {
    dispatch(checkout());
  }

  const handleClearCartButtonClick = () => {
    dispatch(showClearCartModal(true))
  }

  const displayItemObjsLength = Object.keys(displayItemsObj).length;

  return (
    <motion.div className="CartCard">
      <div className="CartCardHeader">
        <h2>Cart</h2>
      </div>
      {displayItemObjsLength === 0 ? null : (
          <div className="CartRestaurantName">
            <h3>{restaurantName}</h3>
          </div>)}
      {displayItemObjsLength !== 0 ? <LineBreak /> : null}
      {displayItemObjsLength === 0 ? (
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
                  <button onClick={() => handleRemoveFromCart(item)}>-</button>
                  <span>{displayItemsObj[item]}</span>
                  <button onClick={() => handleAddToCart(item)}>+</button>
                </td>
                <td>{item}</td>
                <td>{countprice(item, displayItemsObj[item])}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {displayItemObjsLength !== 0 ? <LineBreak /> : null}
      {displayItemObjsLength === 0 ? null : (
        <div className="CardCheckout">
          <div><span>SubTotal</span><span>{totalAmount}</span></div>
          <div className="DeliveryFee"><span>Delivery Fee</span><span>Free</span></div>
          <div><span>Total Amount</span><span>{totalAmount}</span></div>
          {showCheckoutButton 
            ? <Button onClick={() => handleCheckout()} style={{backgroundColor:"#00a53c", color: 'white'}}><Link to="/cart">PROCEED TO CHECKOUT</Link></Button>
            : <Button onClick={() => handleClearCartButtonClick()} style={{backgroundColor:"#00a53c", color: 'white'}}>CLEAR CART</Button>}
        </div>
      )}
    </motion.div>
  );
};

export default CartCard;
