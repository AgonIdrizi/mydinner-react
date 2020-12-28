import React, { useState, useEffect, useContext } from "react";

import useRestaurant from "../../hooks/useRestaurant";
import Restaurant from "./Restaurant/Restaurant";
import Spinner from "../../Components/UI/Spinner/Spinner";
import { useLocation, useParams } from "react-router-dom";
import useResource from "../../hooks/useResource";
import { singupUser } from "../../contexts/UserContext";

const RestaurantContainer = () => {
  const { id } = useParams();
  const { resource } = useResource({ singular: true });

  const postQuery = useRestaurant(id, resource);
  return (
    <>
      {postQuery.isLoading ? (
        <Spinner />
      ) : (
        <Restaurant
          id={id}
          isLoading={postQuery.isLoading}
          resData={postQuery.data.data.restaurant}
        />
      )}
    </>
  );
};
export default RestaurantContainer;
