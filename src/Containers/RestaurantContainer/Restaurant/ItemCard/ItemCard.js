import React, { useState, useEffect, useContext } from "react";
import Modal from "../../../../Components/UI/Modal/Modal";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import imgUrl from "../../../../assets/dishes/dish1.jpg";
import { OrderContext } from "../../../../contexts/OrderContext";
import { Button } from "antd";
import { BUTTON_TYPES } from "../../../../Components/UI/Button/Button";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart, clearCart } from "../../../../store/actions/index";
import "antd/es/button/style/index.css";
import "./ItemCard.scss";

const ItemCard = React.memo(
  ({
    id,
    key,
    name,
    imgUrl,
    ingrdients,
    price,
    cartItems,
    match,
    canAddItems,
    showIngredients,
    sliderClassName
  }) => {
    const [showModal, setShowModal] = useState(false);
    const [itemToBeAddedInCart, setItemToBeAddedInCart] = useState();
    const dispatch = useDispatch();
    const { setRestaurantSelected } = useContext(OrderContext);

    const item = { id, name, imgUrl, ingrdients, price };

    const addToCartHandler = item => {
      if (cartItems.length === 0) {
        setRestaurantSelected(Number(match.params.id));
        dispatch(addToCart(item));
        return;
      }

      if (cartItems.length !== 0 && canAddItems) {
        dispatch(addToCart(item));
      } else {
        console.log("Display modal, cant add from different restaurant"); //do you wish to clear cart
        setItemToBeAddedInCart(item);
        setShowModal(true);
      }
    };

    const handleOkModal = () => {
      dispatch(clearCart());
      dispatch(addToCart(itemToBeAddedInCart));
      setRestaurantSelected(Number(match.params.id));
      setItemToBeAddedInCart();
      setShowModal(false);
    };
    const handleCancelModal = () => {
      setShowModal(false);
    };
    return (
      <>
        <div className="ItemCard">
          <div className="DishLogoDiv">
            <img src={imgUrl} alt="Res Logo" />
          </div>
          <div className={`DishCardLeft ${sliderClassName}`}>
            <div className="DishInfo">
              <div className="DishName">{name}</div>
              {showIngredients && (
                <div className="DishIngredients">
                  mushrooms, tomato sauce, cheese
                </div>
              )}
            </div>
            <div className="DishActions">
              <Button
                style={BUTTON_TYPES.confirm}
                type="default"
                shape="round"
                onClick={() => addToCartHandler(item)}
              >
                Add
              </Button>
            </div>
          </div>
        </div>
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
              There are item in your cart from 'Restaurant', do you want to
              clear it?
            </h4>
          </Modal>
        )}
      </>
    );
  },
  (prevProps, nextProps) => {}
);

export default withRouter(ItemCard);
