import React, { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import imgUrl from "../../../../assets/dishes/dish1.jpg";
import "./ItemCard.scss";

const ItemCard = ({ id, name, imgUrl }) => {
  const context = useContext(CartContext)
  const item = { id, name, imgUrl };
  const { onAddMenuHandler } = context;
  return (
    <div className="ItemCard">
      <div className="DishLogoDiv">
        <img src={imgUrl} alt="Res Logo" />
      </div>
      <div className="DishCardLeft">
        <div className="DishInfo">
          <p className="DishName">{name}</p>
          <span className="DishIngredients">
            sdfskldjfsdlkfjslkdjflksdfklsdflkj sdlkfsdklfjsdlkfjsdfklj
          </span>
        </div>
        <div className="DishActions">
          <button onClick={() => onAddMenuHandler(item)}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;