import React, { useRef, useState, useEffect } from "react";

import CartCardWrapper from "../Restaurant/CartCard/CartCardWrapper";

import CategoryItems from "./CategoryItems/CategoryItems";
import { motion } from "framer-motion";

import { divContainerVariant } from "../../../styles/animations/animationsVariants";
import RestaurantContextProvider from "../../../contexts/RestaurantContext";

import CategoriesCard from "./CategoriesCard/CategoriesCard";
import CategoryItemsWrapper from "./CategoryItems/CategoryItemsWrapper";
import "antd/es/button/style/index.css";
import "antd/es/input/style/index.css";
import "./Restaurant.scss";
import RestaurantImage from "../../../assets/restaurant/restaurantImage.jpeg";

const Restaurant = props => {
  const restaurantRef = useRef(null);
  const categoriesRef = useRef(null);
  const menusRef = useRef(null);
  const cartRef = useRef(null);

  const [categorySelected, setCategorySelected] = useState("all");

  const [menusByCategory, setMenusByCategory] = useState({});

  useEffect(() => {
    const formatedMenus = props.resData.restaurantMenus.reduce((acc, elem) => {
      if (acc[elem.category] == undefined) {
        acc[elem.category] = [elem];
      }
      acc[elem.category] = [...acc[`${elem.category}`], elem];
      return acc;
    }, {});
    setMenusByCategory(formatedMenus);
    console.log(formatedMenus);
  }, []);

  return (
    <motion.div
      variants={divContainerVariant}
      initial="hidden"
      animate="animate"
      exit="hidden"
      className="RestaurantContainer"
    >
      <div ref={restaurantRef} className="Restaurant">
        <div className="RestaurantHeader">
          <h2>{props.resData.restaurantName}</h2>
          <img src={RestaurantImage} alt="restaurant" />
          <div className="RestaurantInfos">
            <span>{props.resData.restaurantName}, </span>
            <span>{props.resData.restaurantAddress}, </span>
            <span>{props.resData.restaurantContact}</span>
          </div>
        </div>

        <div className="RestaurantMenu">
          <RestaurantContextProvider>
            <CategoriesCard
              categoriesRef={categoriesRef}
              restaurantRef={restaurantRef}
              categoriesData={props.resData.categories}
              setCategorySelected={setCategorySelected}
            />
            <CategoryItemsWrapper
              id={props.id}
              menusRef={menusRef}
              menusByCategory={menusByCategory}
              categorySelected={categorySelected}
            />
          </RestaurantContextProvider>

          <section ref={cartRef} className="ResCard">
            <CartCardWrapper
              restaurantRef={restaurantRef}
              menusRef={menusRef}
              cartRef={cartRef}
              categoriesRef={categoriesRef}
              restaurantName={props.resData.restaurantName}
            />
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default Restaurant;
