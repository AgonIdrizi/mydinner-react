import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard/RestaurantCard";
import "./Restaurants.scss";
import "antd/es/input/style/index.css";
import { Input } from "antd";

const { Search } = Input;

const Restaurants = ({ restaurants }) => {
  const [isSearching, setSearching] = useState(false);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const onSearchRestaurantHandler = event => {
    if (event.target.value === "") {
      setSearching(false);
      setFilteredRestaurants([]);
      return;
    }
    setSearching(true);
    console.log(event.target.value);
    const filteredData = restaurants.filter(
      elem =>
        elem.restaurantName.toLowerCase().search(event.target.value) !== -1
    );
    setFilteredRestaurants(filteredData);
  };

  return (
    <div className="RestaurantsContainer">
      <section className="Restaurants">
        <div className="RestaurantHeaderText">
          <h2>Restaurants</h2>
        </div>
        <div className="RestaurantSearchInput">
          <Search
            placeholder="input search text"
            onChange={event => onSearchRestaurantHandler(event)}
            style={{ width: 200 }}
          />
        </div>
        <div className="AllRestaurants">
          {!isSearching &&
            restaurants.map((elem, index) => (
              <RestaurantCard
                key={elem.id}
                id={elem.id}
                imgUrl={elem.imgUrl}
                name={elem.restaurantName}
                type={elem.restaurantType}
              />
            ))}
          {isSearching &&
            filteredRestaurants.map((elem, index) => (
              <RestaurantCard
                key={elem.id}
                id={elem.id}
                imgUrl={elem.imgUrl}
                name={elem.restaurantName}
                type={elem.restaurantType}
              />
            ))}
        </div>
      </section>
    </div>
  );
};

export default Restaurants;
