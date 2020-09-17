import React, { useRef, useState } from "react";
import ItemCard from "./ItemCard/ItemCard";
import CartCard from "./CartCard/CartCard";
import Card from "../../../Components/UI/Card/Card";
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
  const [filteredMenusByCategory, setfilteredMenusByCategory] = useState(
    props.resData.restaurantMenus
  );
  const [isSearching, setSearching] = useState(false);
  const [filteredMenus, setFilteredMenus] = useState([]);

  const restaurantRef = useRef(null);
  const categoriesRef = useRef(null);
  const menusRef = useRef(null);
  const cartRef = useRef(null);

  useScrollPosition(({ prevPos, currPos }) => {
    console.log(currPos.x, currPos.y);
    if (currPos.y < -390) {
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
        left: "180px",
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
      setFilteredMenus([]);
      return;
    }
    setSearching(true);
    console.log(event.target.value);
    if (categoryClicked) {
      const filteredData = filteredMenusByCategory.filter(elem => {
        return elem.menuName.toLowerCase().search(event.target.value) !== -1;
      });
      setFilteredMenus(filteredData);
    } else {
      const filteredData = props.resData.restaurantMenus.filter(
        elem => elem.menuName.toLowerCase().search(event.target.value) !== -1
      );
      setFilteredMenus(filteredData);
    }
  };

  const onCategoryClickHandler = catName => {
    if (catName === "all") {
      setCategoryClicked(false);
      setfilteredMenusByCategory(props.resData.restaurantMenus);
    } else {
      setCategoryClicked(true);
      const filteredByCategory = props.resData.restaurantMenus.filter(
        elem => elem.category === catName
      );
      setfilteredMenusByCategory(filteredByCategory);
      console.log(catName);
    }
  };
  
  return (
    <div className="RestaurantContainer">
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
            {!isSearching &&
              filteredMenusByCategory.map(elem => {
                return (
                  <ItemCard
                    id={elem.id}
                    key={elem.id}
                    name={elem.menuName}
                    imgUrl={elem.menuImgUrl}
                    price={elem.price}
                    ingrdients={elem.ingredients}
                    canAddItems={props.canAddItems}
                    cartItems={props.cartItems}
                  />
                );
              })}
            {isSearching &&
              categoryClicked &&
              filteredMenus.map(elem => {
                return (
                  <ItemCard
                    id={elem.id}
                    key={elem.id}
                    name={elem.menuName}
                    imgUrl={elem.menuImgUrl}
                    price={elem.price}
                    ingrdients={elem.ingredients}
                    canAddItems={props.canAddItems}
                    cartItems={props.cartItems}
                  />
                );
              })}
            {isSearching &&
              !categoryClicked &&
              filteredMenus.map(elem => (
                <ItemCard
                  id={elem.id}
                  key={elem.id}
                  name={elem.menuName}
                  imgUrl={elem.menuImgUrl}
                  price={elem.price}
                  ingrdients={elem.ingredients}
                  canAddItems={props.canAddItems}
                  cartItems={props.cartItems}
                />
              ))}
          </section>
          <section ref={cartRef} style={cartStyle} className="ResCard">
            <CartCard restaurantName={props.resData.restaurantName} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
