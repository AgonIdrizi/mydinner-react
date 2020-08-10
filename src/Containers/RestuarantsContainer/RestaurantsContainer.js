import React, { useState, useEffect } from "react";
import axios from 'axios';
import Restaurants from "./Restaurants/Restaurants";
import { TestApiUrls } from '../../config/testApiUrls';

const RestaurantsContainer = () => {
  const [mockedRestaurantData, setMockedRestaurantData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(TestApiUrls.restaurantsGet);
        console.log(response.data)

        setMockedRestaurantData(response.data.restaurants);
      
      } catch (error) {
        console.log('error',error)
      }
      setIsLoading(false);
      
    };
   fetchData()
  }, [])

  return (
   <> { isLoading ? <h1>"Loading"</h1> : <Restaurants restaurants={mockedRestaurantData} />}</>
  );
};

export default RestaurantsContainer;
