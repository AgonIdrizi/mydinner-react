import React, { useState, useEffect } from "react";
import axios from "axios";
import useDataApi from "../../hooks/useDataApi";
import Restaurants from "./Restaurants/Restaurants";
import { TestApiUrls } from "../../config/testApiUrls";

const RestaurantsContainer = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    TestApiUrls.restaurantsGet
  );


  useEffect(() => {
     if( data != undefined ) {
      setRestaurantData(data.restaurants)
     }
  },[data])

  return (
    <>
      {isLoading ? (
        <h1>"Loading"</h1>
      ) : (
        <Restaurants restaurants={restaurantData} />
      )}
    </>
  );
};

export default RestaurantsContainer;
