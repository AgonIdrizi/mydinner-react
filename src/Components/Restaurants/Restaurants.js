import React from "react";
import RestaurantCard from './RestaurantCard/RestaurantCard';
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
        <div className="AllRestaurants">
          {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((elem, index) => <RestaurantCard key={index} />)}
        </div>
      </section>
    </div>
  );
};

export default Restaurants;
