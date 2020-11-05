import React, { useRef, useState, useEffect, useContext } from "react";
import ItemCard from "./ItemCard/ItemCard";
import CartCard from "./CartCard/CartCard";
import Card from "../../../Components/UI/Card/Card";
import { OrderContext } from "../../../contexts/OrderContext";
import { useSelector } from "react-redux";
import CategoryItems from "./CategoryItems/CategoryItems";
import { motion } from 'framer-motion';
import { divContainerVariant } from '../../../styles/animations/animationsVariants';
import "antd/es/input/style/index.css";
import { Input } from "antd";
import { Button } from "antd";
import "antd/es/button/style/index.css";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import "./Restaurant.scss";
import RestaurantImage from "../../../assets/restaurant/restaurantImage.jpeg";

const { Search } = Input;

const Restaurant = props => {
  const [categoriesStyle, setCategoriesStyle] = useState({});
  const [menusStyle, setMenusStyle] = useState({});
  const [cartStyle, setCartStyle] = useState({});
  const [categoryClicked, setCategoryClicked] = useState(false);
  const [categorySelected, setCategorySelected] = useState('all')
  
  const context = useContext(OrderContext);
  const { restaurantSelected } = context;
  const [canAddItems, setCanAddItems] = useState(false);
  const cartItems = useSelector(state => state.CardReducer.itemsInCart);

  const [menusByCategory, setMenusByCategory] = useState({});
  const [isSearching, setSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const restaurantRef = useRef(null);
  const categoriesRef = useRef(null);
  const menusRef = useRef(null);
  const cartRef = useRef(null);

  useEffect(() => {
    const formatedMenus = props.resData.restaurantMenus.reduce((acc, elem) => {
      if( acc[elem.category] == undefined) {
        acc[elem.category] = [elem];
      }
      acc[elem.category] = [...acc[`${elem.category}`], elem];
      return acc;
    },{})
    setMenusByCategory(formatedMenus)
    console.log(formatedMenus)
  }, [])

  useEffect(() => {
    if (cartItems.length !== 0) {
      Number(props.id) == restaurantSelected
        ? setCanAddItems(true)
        : setCanAddItems(false);
    }
    if (cartItems.length === 0) {
      setCanAddItems(true);
    }
  }, [cartItems]);

  useScrollPosition(({ prevPos, currPos }) => {
    console.log(currPos.x, currPos.y);
    if (currPos.y < -318) {
      categoriesRef.current.style.backgroundColor = "";
      setCategoriesStyle({
        backgroundColor: "",
        position: "fixed",
        top: "20px",
        bottom: "auto",
        left: `${restaurantRef.current.offsetLeft}px`,
        right: "auto"
      });

      setMenusStyle({
        position: "relative",
        left: "177px",
        right: "auto"
      });
      setCartStyle({
        backgroundColor: "",
        position: "fixed",
        top: "20px",
        bottom: "auto",
        right: `${restaurantRef.current.offsetLeft +
          categoriesRef.current.style.width +
          menusRef.current.style.width}px`
      });
    } else {
      setCategoriesStyle({});
      setMenusStyle({});
      setCartStyle({});
    }
  });

  const onSearchRestaurantHandler = event => {
    if (event.target.value === "") {
      setSearching(false);
      setSearchTerm('');
      return;
    }
    setSearching(true);
    setSearchTerm(event.target.value)
    console.log(event.target.value);
  };

  const onCategoryClickHandler = catName => {
    if(catName === 'all') {
      setCategorySelected(catName)
      setCategoryClicked(false)
    } else {
      setCategorySelected(catName)
      setCategoryClicked(true);
    }
  }
  
  return (
    <motion.div 
      variants={divContainerVariant}
      initial="hidden"
      animate="animate"
      exit="hidden"
      className="RestaurantContainer">
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
          <Card>
            <section
              ref={categoriesRef}
              style={categoriesStyle}
              className="Categories"
            >
              <Button type="link" onClick={e => onCategoryClickHandler("all")}>
                All
              </Button>
              {props.resData.categories.map(category => (
                <Button
                  key={category.catName}
                  data-testid={category.catName}
                  type="link"
                  onClick={e => onCategoryClickHandler(category.catName)}
                >
                  {category.catName}
                </Button>
              ))}
            </section>
          </Card>
          <section ref={menusRef} style={menusStyle} className="Menus">
            <div className="RestaurantSearchInput">
              <Search
                placeholder="input search text"
                onChange={event => onSearchRestaurantHandler(event)}
              />
            </div>
            {Object.keys(menusByCategory).map(key =>(
              <CategoryItems
                key={key}
                categoryTitle={key}
                canAddItems={canAddItems}
                cartItems={cartItems}
                isSearching={isSearching}
                searchTerm={searchTerm}
                categorySelected={categorySelected}
                itemMenus={menusByCategory[key]}
              />
            ))}
          </section>
          <section ref={cartRef} style={cartStyle} className="ResCard">
            <CartCard showCheckoutButton={true} restaurantName={props.resData.restaurantName} />
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default Restaurant;
