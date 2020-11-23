import React from "react";
import "./RestaurantCard.scss";
import { motion } from "framer-motion";
import { withRouter } from "react-router-dom";

const transition = { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] };
const restaurantCardVariant = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ...transition
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4
    }
  }
};

const RestaurantCard = ({ id, name, resource, type, imgUrl, history }) => {
  const clickHandler = id => {
    history.push(`/${resource}/${id}`);
  };

  return (
    <motion.div
      variants={restaurantCardVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="RestaurantCardContainer"
      onClick={() => clickHandler(id)}
    >
      <div className="ResLogoDiv">
        <img src={imgUrl} alt="Res Logo" />
      </div>
      <div className="ResInfoDiv">
        <h3 className="ResName">{name}</h3>
        <p className="ResType">{type}</p>
      </div>
    </motion.div>
  );
};

export default withRouter(RestaurantCard);
