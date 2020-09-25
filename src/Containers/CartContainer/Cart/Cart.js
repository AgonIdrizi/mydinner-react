import React, { useContext } from 'react';
import BreadCrumb from '../../../Components/UI/BreadCrumb/BreadCrumb';
import CartCard from '../../RestaurantContainer/Restaurant/CartCard/CartCard'
import { CartContext } from '../../../contexts/CartContext'
import "./Cart.scss";

const Cart = ({ breadCrumbItems }) => {
  const context = useContext(CartContext)
  const { itemsInCart, totalAmount } = context;
  return (
    <div className="CartCheckoutContainer">
      <div className="BreadCrumb">
          <BreadCrumb items={breadCrumbItems} />
        </div>
      <section className="CheckoutInfo">
        <div className="CheckoutItems">
          <CartCard showCheckoutButton={false} restaurantName={''} />
        </div>
        <div className="Address">

        </div>
      </section>
    </div>
  );
}

export default Cart;
