import React from "react";
import './RestaurantCard.scss';
import Restaurants from "../Restaurants";

const RestaurantCard = ({ name, type, imgUrl }) => {
  return (
    <div className="RestaurantCardContainer">
      <div className="ResLogoDiv"><img src={imgUrl} alt="Res Logo" /></div>
      <div className="ResInfoDiv">
        <p className="ResName">{name}</p>
        <p className="ResType">{type}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
