import React, { useRef, useState, useEffect } from "react";

import CartCard from "./CartCard/CartCard";
import CartCardWrapper from '../Restaurant/CartCard/CartCardWrapper';


import CategoryItems from "./CategoryItems/CategoryItems";
import { motion } from "framer-motion";

import { divContainerVariant } from "../../../styles/animations/animationsVariants";
import { useScrollPosition } from "@n8tb1t/use-scroll-position"; 
import { Input } from "antd";

import CategoriesCard from "./CategoriesCard/CategoriesCard";
import CategoryItemsWrapper from "./CategoryItems/CategoryItemsWrapper";
import "antd/es/button/style/index.css";
import "antd/es/input/style/index.css";
import "./Restaurant.scss";
import RestaurantImage from "../../../assets/restaurant/restaurantImage.jpeg";

const { Search } = Input;

const Restaurant = props => {
  const restaurantRef = useRef(null);
  const categoriesRef = useRef(null);
  const menusRef = useRef(null);
  const cartRef = useRef(null);
  const [menusStyle, setMenusStyle] = useState({});
  const [cartStyle, setCartStyle] = useState({});

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

  console.log("restaurant rendered");
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
          <section ref={cartRef} style={cartStyle} className="ResCard">
            <CartCardWrapper
              restaurantRef={restaurantRef}
              menusRef={menusRef}
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
