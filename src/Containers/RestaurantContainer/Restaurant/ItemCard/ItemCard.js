import React, { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import imgUrl from "../../../../assets/dishes/dish1.jpg";
import { Button } from "antd";
import { useDispatch } from 'react-redux';
import { addToCart} from '../../../../store/actions/index';
import "antd/es/button/style/index.css";
import "./ItemCard.scss";

const ItemCard = ({ id, name, imgUrl, ingrdients, price }) => {
  const dispatch = useDispatch()
  const context = useContext(CartContext)
  const { onAddMenuHandler } = context;
  const item = { id, name, imgUrl, ingrdients, price };
  
  return (
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
            onClick={() => dispatch(addToCart(item))}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
