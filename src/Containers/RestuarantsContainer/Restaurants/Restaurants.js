import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard/RestaurantCard";
import "./Restaurants.scss";
import "antd/es/input/style/index.css";
import { Input, Button } from "antd";

const { Search } = Input;

const sortByArray = [
  "Newest",
  "A to Z",
  "Min. Order Amount",
  "Fastest Delivery"
];

const Restaurants = ({ restaurants }) => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isSearching, setSearching] = useState(false);
  const [sortByClicked, setSortByClicked] = useState("Newest");

  useEffect(() => {
    const allrestaurants = sortByHandler(restaurants);
    setAllRestaurants([...allrestaurants]);
  }, [sortByClicked, restaurants]);

  useEffect(() => {
    if (filteredRestaurants) {
      const filteredData = sortByHandler(filteredRestaurants);
      setFilteredRestaurants(filteredData);
    }
  }, [filteredRestaurants, sortByClicked]);

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
    const sortedData = sortByHandler(filteredData);
    //sortByHandler()
    console.log("sortedData", sortedData);
    setFilteredRestaurants(sortedData);
  };

  const sortByHandler = array => {
    switch (sortByClicked) {
      case "Newest": {
        const sortByNewest = array.sort(
          (a, b) => Date.parse(b.dateAdded) - Date.parse(a.dateAdded)
        );
        return sortByNewest;
      }
      case "A to Z": {
        const sortByAtoZ = array.sort((a, b) =>
          a.restaurantName < b.restaurantName ? -1 : 1
        );
        return sortByAtoZ;
      }
      case "Min. Order Amount": {
        const sortByMinOrderAmount = array.sort(
          (a, b) => a.minOrder - b.minOrder
        );
        return sortByMinOrderAmount;
      }
      case "Fastest Delivery": {
        const sortByFasterDelivery = array.sort(
          (a, b) => a.maxDeliveryTime - b.maxDeliveryTime
        );
        return sortByFasterDelivery;
      }
      default: {
        return [...array];
      }
    }
  };

  const setSortButtonStyle = value => {
    return value === sortByClicked ? "black" : "grey";
  };

  const onSortByClickHandler = value => {
    setSortByClicked(value);
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
        <div className="SortRestaurants">
          <h3>Sort By:</h3>
          {sortByArray.map(elem => (
            <Button
              key={elem}
              style={{ color: `${setSortButtonStyle(elem)}` }}
              onClick={() => onSortByClickHandler(elem)}
              type="link"
            >
              {elem}
            </Button>
          ))}
        </div>
        <div className="AllRestaurants">
          {!isSearching &&
            allRestaurants.map((elem, index) => (
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
