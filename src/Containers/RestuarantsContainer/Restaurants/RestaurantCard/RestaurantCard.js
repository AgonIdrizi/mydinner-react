import React from "react";
import './RestaurantCard.scss';
import Restaurants from "../Restaurants";
import {motion} from 'framer-motion';
import { withRouter } from 'react-router-dom';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
const restaurantCardVariant = {
  initial: {
    scale: 0,
    x: 0,
    y: 0
  },
  animate: {
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ...transition
    }
  },
  exit: {
    scale: 0,
    x: 0,
    y: 0,
    transition: {
      duration: 0.3,
      ...transition
    }
  }
}

const RestaurantCard = ({id, name, type, imgUrl, history }) => {
  const clickHandler = (id) => {
    history.push(`/restaurant/${id}`)
  }
  
  return (
    <motion.div
      variants={restaurantCardVariant} 
      initial="initial"
      animate="animate"
      exit="exit"
      className="RestaurantCardContainer" onClick={() => clickHandler(id)}>
      <div className="ResLogoDiv"><img src={imgUrl} alt="Res Logo"/></div>
      <div className="ResInfoDiv">
        <h3 className="ResName">{name}</h3>
        <p className="ResType">{type}</p>
      </div>
    </motion.div>
  );
};

export default withRouter(RestaurantCard);
