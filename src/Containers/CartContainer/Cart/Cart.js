import React, { useState, useRef } from 'react';
import BreadCrumb from '../../../Components/UI/BreadCrumb/BreadCrumb';
import "./Cart.scss";

const Cart = ({ breadCrumbItems }) => {

  return (
    <div className="CartCheckoutContainer">
      <section className="CheckoutInfo">
        <div className="BreadCrumb">
          <BreadCrumb items={breadCrumbItems} />
        </div>
      </section>
    </div>
  );
}

export default Cart;
