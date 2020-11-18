import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

import { OrderContext } from "../../../contexts/OrderContext";
import Modal from "../../../Components/UI/Modal/Modal";
import BreadCrumb from "../../../Components/UI/BreadCrumb/BreadCrumb";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { divContainerVariant } from "../../../styles/animations/animationsVariants";
import { useDispatch } from "react-redux";
import { clearCart, showClearCartModal } from "../../../store/actions";

import Address from './Address/Address';
import CartCard from "../../RestaurantContainer/Restaurant/CartCard/CartCard";
import ItemCard from "../../RestaurantContainer/Restaurant/ItemCard/ItemCard";
import "./Cart.scss";

const Cart = ({ breadCrumbItems, resData }) => {
  const totalAmount = useSelector(state => state.CardReducer.totalAmount);
  const showModal = useSelector(state => state.CardReducer.showClearCartModal);
  const dispatch = useDispatch();
  const context = useContext(OrderContext);
  const {
    orderDeliveryAddress,
    setOrderDeliveryAddress,
    restaurantSelected,
    setRestaurantSelected
  } = context;
  const showPayButton = totalAmount === 0 ? false : true;
  const handleToken = (token, addresses) => {
    console.log({ token, addresses });
  };
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true
  };

  const handleOkModal = () => {
    dispatch(clearCart());
    dispatch(showClearCartModal(false));
    setRestaurantSelected(0);
  };

  const handleCancelModal = () => {
    dispatch(showClearCartModal(false));
  };

  return (
    <>
      <motion.div
        className="CartCheckoutContainer"
        variants={divContainerVariant}
        initial="hidden"
        animate="animate"
        exit="exit"
      >
        <div className="BreadCrumb">
          <BreadCrumb items={breadCrumbItems} />
        </div>
        <section className="CheckoutSection">
          <div className="CheckoutInfo">
            <div className="CheckoutItems">
              <CartCard showCheckoutButton={false} restaurantName={""} />
            </div>
            <Address
              orderDeliveryAddress={orderDeliveryAddress} 
              setOrderDeliveryAddress={setOrderDeliveryAddress} 
            />
            {showPayButton && (
              <StripeCheckout
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                token={handleToken}
                billingAddress
                shippingAddress
                amount={totalAmount * 100}
              />
            )}
          </div>

          <div className="MenuRecommendations">
            <h3>Recommendations:</h3>
            <Slider {...settings}>
              {resData.restaurantMenus.map(elem => {
                return (
                  <ItemCard
                    id={elem.id}
                    key={elem.id}
                    name={elem.menuName}
                    imgUrl={elem.menuImgUrl}
                    price={elem.price}
                    showIngredients={false}
                    ingrdients={elem.ingredients}
                    canAddItems={true}
                    sliderClassName="sliderItem"
                    cartItems={[1, 2]}
                  />
                );
              })}
            </Slider>
          </div>
        </section>
      </motion.div>
      {showModal && (
        <Modal
          title="Clear cart"
          visible={showModal}
          onOk={handleOkModal}
          onCancel={handleCancelModal}
          style={{ height: "500px" }}
          centered
        >
          <h4>
            There are item in your cart from 'Restaurant', do you want to clear
            it?
          </h4>
        </Modal>
      )}
    </>
  );
};

export default Cart;
