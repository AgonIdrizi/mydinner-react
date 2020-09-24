import React, { useState, useEffect, useContext } from "react";
import { useSelector } from 'react-redux';
import useDataApi from "../../hooks/useDataApi";
import Restaurant from "./Restaurant/Restaurant";
import { withRouter } from "react-router-dom";
import Spinner from "../../Components/UI/Spinner/Spinner";
import { OrderContext }  from '../../contexts/OrderContext'
import { TestApiUrls } from "../../config/testApiUrls";

const RestaurantContainer = ({ match }) => {
  const context = useContext(OrderContext);
  const { restaurantSelected } = context;
  const cartItems = useSelector(state => state.CardReducer.itemsInCart);
  const [canAddItems, setCanAddItems] = useState(false);
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    TestApiUrls.restaurantGet
  );
  
  useEffect(() => {
    if (cartItems.length !== 0) {
      Number(match.params.id) == restaurantSelected ? setCanAddItems(true) : setCanAddItems(false)
    }
    if (cartItems.length === 0) {
      setCanAddItems(true)
    }
  }, [cartItems])

  return (
    <>{isLoading ? <Spinner /> : <Restaurant canAddItems={canAddItems} cartItems={cartItems} resData={data.restaurant} />} </>
  );
};
export default withRouter(RestaurantContainer);
