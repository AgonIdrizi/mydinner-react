import React, { useContext, useEffect, useState } from "react";
import useDataApi from "../../hooks/useDataApi";
import Restaurants from "./Restaurants/Restaurants";
import Spinner from "../../Components/UI/Spinner/Spinner";
import { OrderContext } from "../../contexts/OrderContext";
import { TestApiUrls } from "../../config/testApiUrls";
import { isEmptyObject } from "../../utils/helperFunctions";

const RestaurantsContainer = () => {
  //const [isLoading, setIsLoading] = useState(false);
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    TestApiUrls.restaurantsGet
  );
  const orderContext = useContext(OrderContext);
  const { orderDeliveryAddress } = orderContext;
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      //if delivery-address is empty display all-restaurants, else filter based on address-postalCode
      if (isEmptyObject(orderDeliveryAddress)) {
        setRestaurants(data.restaurants);
      } else {
        const filteredRestaurants = data.restaurants.filter(
          elem => elem.postalCode === parseInt(orderDeliveryAddress.postalCode)
        );
        setRestaurants(filteredRestaurants);
      }
    }
  }, [isLoading]);

  return <Restaurants isLoading={isLoading} restaurants={restaurants} />;
};

export default RestaurantsContainer;
