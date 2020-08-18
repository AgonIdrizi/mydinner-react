import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard/RestaurantCard";
import "./Restaurants.scss";
import "antd/es/input/style/index.css";
import { Input, Button } from "antd";

const { Search } = Input;

const sortByArray = ['Newest', 'A to Z', 'Min. Order Amount', 'Fastest Delivery']

const Restaurants = ({ restaurants }) => {
  const [isSearching, setSearching] = useState(false);
  const [sortByClicked, setSortByClicked] = useState("Newest");
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

  const setSortButtonStyle = value => {
    return value === sortByClicked ? "black" : "grey";
  }

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
              style={{color: `${setSortButtonStyle(elem)}`}}
              onClick={() => setSortByClicked(elem)}
              type="link"
            >
              {elem}
            </Button>
          ))}
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
