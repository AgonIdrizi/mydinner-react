import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useRestaurant from "../../hooks/useRestaurant";
import Restaurant from "./Restaurant/Restaurant";
import Spinner from "../../Components/UI/Spinner/Spinner";
import { OrderContext } from "../../contexts/OrderContext";

const RestaurantContainer = () => {
  const { id } = useParams();
  const context = useContext(OrderContext);
  const { restaurantSelected } = context;
  const cartItems = useSelector(state => state.CardReducer.itemsInCart);
  const [canAddItems, setCanAddItems] = useState(false);
  const postQuery = useRestaurant(id);

  useEffect(() => {
    if (cartItems.length !== 0) {
      Number(id) == restaurantSelected
        ? setCanAddItems(true)
        : setCanAddItems(false);
    }
    if (cartItems.length === 0) {
      setCanAddItems(true);
    }
  }, [cartItems]);

  return (
    <>
      {postQuery.isLoading ? (
        <Spinner />
      ) : (
        <Restaurant
          canAddItems={canAddItems}
          cartItems={cartItems}
          resData={postQuery.data.data.restaurant}
        />
      )}
    </>
  );
};
export default RestaurantContainer;
