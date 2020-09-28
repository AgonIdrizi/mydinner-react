import React, { useContext } from "react";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { OrderContext } from "../../../contexts/OrderContext";
import BreadCrumb from "../../../Components/UI/BreadCrumb/BreadCrumb";
import { isEmptyObject } from "../../../utils/helperFunctions";
import CartCard from "../../RestaurantContainer/Restaurant/CartCard/CartCard";
import "./Cart.scss";

const Cart = ({ breadCrumbItems }) => {
  const totalAmount = useSelector(state => state.CardReducer.totalAmount);
  const context = useContext(OrderContext);
  const { orderDeliveryAddress, restaurantSelected } = context;
  const showPayButton = totalAmount === 0 ? false : true;
  const handleToken = (token, addresses) => {
    console.log({ token, addresses });
  };

  return (
    <div className="CartCheckoutContainer">
      <div className="BreadCrumb">
        <BreadCrumb items={breadCrumbItems} />
      </div>
      <section className="CheckoutSection">
        <div className="CheckoutInfo">
          <div className="CheckoutItems">
            <CartCard showCheckoutButton={false} restaurantName={""} />
          </div>
          <div className="Address">
            {isEmptyObject(orderDeliveryAddress) ? null : (
              <>
                <span>Full Address: {orderDeliveryAddress.addressName}</span>
                <span>City: {orderDeliveryAddress.city}</span>
                <span>Postal code: {orderDeliveryAddress.postalCode}</span>
              </>
            )}
          </div>
        </div>
        {showPayButton && (
          <StripeCheckout
            stripeKey="pk_test_eHUHMgXo7utI4f7ino5rm9iK"
            token={handleToken}
            billingAddress
            shippingAddress
            amount={totalAmount * 100}
          />
        )}
      </section>
    </div>
  );
};

export default Cart;
