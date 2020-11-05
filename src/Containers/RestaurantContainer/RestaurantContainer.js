import React, { useState, useEffect, useContext } from "react";

import { useParams } from "react-router-dom";
import useRestaurant from "../../hooks/useRestaurant";
import Restaurant from "./Restaurant/Restaurant";
import Spinner from "../../Components/UI/Spinner/Spinner";


const RestaurantContainer = () => {
  const { id } = useParams();

  const postQuery = useRestaurant(id);

  return (
    <>
      {postQuery.isLoading ? (
        <Spinner />
      ) : (
        <Restaurant
          id={id}
          resData={postQuery.data.data.restaurant}
        />
      )}
    </>
  );
};
export default RestaurantContainer;
