import React, { useState, useEffect, useContext } from "react";

import useRestaurant from "../../hooks/useRestaurant";
import Restaurant from "./Restaurant/Restaurant";
import Spinner from "../../Components/UI/Spinner/Spinner";
import {useLocation, useParams} from 'react-router-dom';

function singularResource(resource) {
  if(resource === 'restaurants') return 'restaurant';
  if(resource === 'groceries') return 'grocery';
  if(resource === 'flowers') return 'flower';
  if(resource === 'pharmacy') return 'pharmacy';
}

const RestaurantContainer = () => {
  const { id } = useParams();
  const location = useLocation();
  const resource = singularResource(location.pathname.split("/")[1]);

  const postQuery = useRestaurant(id, resource);
  console.log('postQuery', postQuery)
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
