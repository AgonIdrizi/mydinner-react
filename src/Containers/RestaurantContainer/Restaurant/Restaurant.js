import React from 'react';
import ItemCard from "./ItemCard/ItemCard";
import { useInView } from 'react-intersection-observer'
import "./Restaurant.scss";
import RestaurantImage from "../../../assets/restaurant/restaurantImage.jpeg";

const Restaurant = ({ resData }) => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    //threshold: 0.60
    threshold: 0.63
  })
  return (
    <div   className="RestaurantContainer">
      <div className="Restaurant">
        <div className="RestaurantHeader">
          <h2>{resData.restaurantName}</h2>
          <img src={RestaurantImage} />
          <div className="RestaurantInfos">
            <span>{resData.restaurantName}, </span>
            <span>{resData.restaurantAddress}, </span>
            <span>{resData.restaurantContact}</span>
          </div>
        </div>
        <h2>{`Header inside viewport ${inView}.`}</h2>
        <div ref={ref}   className="RestaurantMenu">
          <section className="Menus">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
           <h2>{`${inView}`}</h2> 
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </section>
        </div>
      </div>
    </div>
  )
}

export default Restaurant;
