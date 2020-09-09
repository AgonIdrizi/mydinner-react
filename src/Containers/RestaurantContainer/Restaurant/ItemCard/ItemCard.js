import React, { useState, useEffect, useContext } from "react";
import { Modal } from "antd";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import imgUrl from "../../../../assets/dishes/dish1.jpg";
import { OrderContext } from "../../../../contexts/OrderContext";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../store/actions/index";
import "antd/es/button/style/index.css";
import "./ItemCard.scss";

const ItemCard = ({
  id,
  name,
  imgUrl,
  ingrdients,
  price,
  cartItems,
  match,
  canAddItems
}) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const context = useContext(OrderContext);
  const { setRestaurantSelected } = context;

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
      setShowModal(true);
    }
  };

  const handleOkModal = () => {};
  const handleCancelModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="ItemCard">
        <div className="DishLogoDiv">
          <img src={imgUrl} alt="Res Logo" />
        </div>
        <div className="DishCardLeft">
          <div className="DishInfo">
            <p className="DishName">{name}</p>
            <span className="DishIngredients">
              mushrooms, tomato sauce, cheese
            </span>
          </div>
          <div className="DishActions">
            <Button
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
          title="Do you want to clear your cart"
          visible={showModal}
          onOk={handleOkModal}
          onCancel={handleCancelModal}
          style={{ height: "500px" }}
          centered
        ></Modal>
      )}
    </>
  );
};

export default withRouter(ItemCard);
