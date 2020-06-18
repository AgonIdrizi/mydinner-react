import React, { useRef, useState } from "react";
import ItemCard from "./ItemCard/ItemCard";
import CartCard from "./CartCard/CartCard";
import Card from "../../../Components/UI/Card/Card";
import "antd/es/input/style/index.css";
import { Input } from "antd";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import "./Restaurant.scss";
import RestaurantImage from "../../../assets/restaurant/restaurantImage.jpeg";

const { Search } = Input;

const Restaurant = ({ resData }) => {
  const [categoriesStyle, setCategoriesStyle] = useState({});
  const [menusStyle, setMenusStyle] = useState({});
  const [cartStyle, setCartStyle] = useState({});
  const [isSearching, setSearching] = useState(false);
  const [filteredMenus, setFilteredMenus] = useState({});

  const restaurantRef = useRef(null);
  const categoriesRef = useRef(null);
  const menusRef = useRef(null);
  const cartRef = useRef(null);

  useScrollPosition(({ prevPos, currPos }) => {
    console.log(currPos.x, currPos.y);
    if (currPos.y < -390) {
      categoriesRef.current.style.backgroundColor = "red";
      setCategoriesStyle({
        backgroundColor: "red",
        position: "fixed",
        top: "20px",
        bottom: "auto",
        left: `${restaurantRef.current.offsetLeft}px`,
        right: "auto"
      });

      setMenusStyle({
        position: "relative",
        left: "191px",
        right: "auto"
      });
      setCartStyle({
        backgroundColor: "red",
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
    const filteredData = resData.restaurantMenus.filter(
      elem => elem.menuName.toLowerCase().search(event.target.value) !== -1
    );
    setFilteredMenus(filteredData);
  };

  return (
    <div className="RestaurantContainer">
      <div ref={restaurantRef} className="Restaurant">
        <div className="RestaurantHeader">
          <h2>{resData.restaurantName}</h2>
          <img src={RestaurantImage} alt="restaurant" />
          <div className="RestaurantInfos">
            <span>{resData.restaurantName}, </span>
            <span>{resData.restaurantAddress}, </span>
            <span>{resData.restaurantContact}</span>
          </div>
        </div>

        <div className="RestaurantMenu">
          <Card>
            <section
              ref={categoriesRef}
              style={categoriesStyle}
              className="Categories"
            >
              <div>sdfsdfsdf</div>
              <div>sdfsdfsdf</div>
              <div>sdfsdfsdf</div>
              <div>sdfsdfsdf</div>
              <div>sdfsdfsdf</div>
              <div>sdfsdfsdf</div>
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
              resData.restaurantMenus.map(elem => (
                <ItemCard
                  id={elem.id}
                  key={elem.id}
                  name={elem.menuName}
                  imgUrl={elem.menuImgUrl}
                  price={elem.price}
                  ingredients={elem.ingredients}
                />
              ))}
            {isSearching &&
              filteredMenus.map(elem => (
                <ItemCard
                  id={elem.id}
                  key={elem.id}
                  name={elem.menuName}
                  imgUrl={elem.menuImgUrl}
                  price={elem.price}
                  ingredients={elem.ingredients}
                />
              ))}
          </section>
          <section ref={cartRef} style={cartStyle} className="ResCard">
            <CartCard />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
