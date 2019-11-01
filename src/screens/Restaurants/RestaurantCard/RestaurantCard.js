import React from "react";
import './RestaurantCard.scss';
import Restaurants from "../Restaurants";

const RestaurantCard = () => {
  return (
    <div className="RestaurantCardContainer">
      <div className="ResLogoDiv"><img src="https://images.deliveryhero.io/image/talabat/restaurants/goldenfork_logo_636918487766919956.jpg?width=115&height=104" alt="Res Logo" /></div>
      <div className="ResInfoDiv">
        <p className="ResName">Restaurant Name</p>
        <p className="ResType">Restaurant Type</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
