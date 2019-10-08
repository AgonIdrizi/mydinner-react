import React from "react";
import "./Restaurants.scss";
import 'antd/es/input/style/index.css';
import { Input } from "antd";

const { Search } = Input;

const Restaurants = () => {
  return (
    <div className="RestaurantContainer">
      <section className="Restaurants">
        <div className="RestaurantHeaderText">
          <h2>Restaurants</h2>
        </div>
        <div className="RestaurantSearchInput">
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />
        </div>
        <div className="AllRestaurants"></div>
      </section>
    </div>
  );
};

export default Restaurants;
