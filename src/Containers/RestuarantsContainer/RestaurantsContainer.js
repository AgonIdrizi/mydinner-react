import React, { useContext, useEffect, useState } from "react";
import Restaurants from "./Restaurants/Restaurants";
import Spinner from "../../Components/UI/Spinner/Spinner";
import { useOrderContext } from "../../contexts/OrderContext";
import useRestaurants from "../../hooks/useRestaurants";
import useResource from '../../hooks/useResource';
import { isEmptyObject } from "../../utils/helperFunctions";
import { useLocation } from "react-router-dom";
import { useErrorHandler } from "react-error-boundary";

const RestaurantsContainer = () => {

  // const resource = location.pathname.slice(1);
  // console.log('resource', location.pathname.split('/'))
  const { resource, city } = useResource();
  const restaurantsQuery = useRestaurants(resource, city);
  const { orderDeliveryAddress } = useOrderContext();
  const [restaurants, setRestaurants] = useState([]);
  useErrorHandler(restaurantsQuery.error);

  useEffect(() => {
    if (!restaurantsQuery.isLoading) {
      /**
       * if delivery-address is empty display all-restaurants, else filter based on address-postalCode
       */
      if (isEmptyObject(orderDeliveryAddress)) {
        setRestaurants(restaurantsQuery.data.data.restaurants);
      } else {
        console.log(restaurantsQuery);
        const filteredRestaurants = restaurantsQuery.data.data.restaurants.filter(
          elem => elem.postalCode === parseInt(orderDeliveryAddress.postalCode)
        );
        setRestaurants(filteredRestaurants);
      }
    }
  }, [restaurantsQuery.isLoading]);

  return restaurantsQuery.isLoading ? (
    <Spinner />
  ) : (
    <Restaurants restaurants={restaurants} resource={resource} />
  );
};

export default RestaurantsContainer;
