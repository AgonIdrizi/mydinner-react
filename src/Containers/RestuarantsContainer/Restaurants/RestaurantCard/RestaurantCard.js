import React from "react";
import './RestaurantCard.scss';
import Restaurants from "../Restaurants";
import { withRouter } from 'react-router-dom';

const RestaurantCard = ({id, name, type, imgUrl, history }) => {
  const clickHandler = (id) => {
    history.push(`/restaurant/${id}`)
  }
  
  return (
    <div className="RestaurantCardContainer" onClick={() => clickHandler(id)}>
      <div className="ResLogoDiv"><img src={imgUrl} alt="Res Logo"/></div>
      <div className="ResInfoDiv">
        <h3 className="ResName">{name}</h3>
        <p className="ResType">{type}</p>
      </div>
    </div>
  );
};

export default withRouter(RestaurantCard);
