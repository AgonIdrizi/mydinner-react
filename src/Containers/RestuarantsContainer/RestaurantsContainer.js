import React, { useContext, useEffect, useState } from "react";
import Restaurants from "./Restaurants/Restaurants";
import Spinner from "../../Components/UI/Spinner/Spinner";
import { OrderContext } from "../../contexts/OrderContext";
import useRestaurants from "../../hooks/useRestaurants";
import { isEmptyObject } from "../../utils/helperFunctions";

const RestaurantsContainer = () => {
  const restaurantsQuery = useRestaurants();
  const orderContext = useContext(OrderContext);
  const { orderDeliveryAddress } = orderContext;
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    if (!restaurantsQuery.isLoading) {
      /**
       * if delivery-address is empty display all-restaurants, else filter based on address-postalCode
       */
      if (isEmptyObject(orderDeliveryAddress)) {
        setRestaurants(restaurantsQuery.data.data.restaurants);
      } else {
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
    <Restaurants restaurants={restaurants} />
  );
};

export default RestaurantsContainer;
