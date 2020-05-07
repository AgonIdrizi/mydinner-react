import React from 'react';
import imgUrl from "../../../../assets/dishes/dish1.jpg";
import "./ItemCard.scss";

const ItemCard = () => {
  return (
    <div className="ItemCard">
      <div className="DishLogoDiv">
        <img src={imgUrl} alt="Res Logo" />
      </div>
        <div className="DishCardLeft">
          <div className="DishInfo">
            <p className="DishName">
              Piza
            </p>
            <span className="DishIngredients">
            sdfskldjfsdlkfjslkdjflksdfklsdflkj
              sdlkfsdklfjsdlkfjsdfklj
            </span>
          </div>
        <div className="DishActions">
          <button>Add</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
