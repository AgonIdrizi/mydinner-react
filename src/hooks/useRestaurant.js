import React from "react";
import axios from "axios";
import { useQuery, queryCache } from "react-query";
import { TestApiUrls } from "../config/testApiUrls";

const fetchRestaurant = (restaurantId, resource) =>  axios.get(TestApiUrls[resource]).then(res => res);

export default function useRestaurant(restaurantId, resource) {
  return useQuery([resource, restaurantId], resource =>
    fetchRestaurant(restaurantId, resource)
  );
}
