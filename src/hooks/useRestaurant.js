import React from "react";
import axios from "axios";
import { useQuery, queryCache } from "react-query";
import { TestApiUrls } from '../config/testApiUrls'

const fetchRestaurant = restaurantId => axios.get(TestApiUrls.restaurantGet).then(res => res);

export default function useRestaurant(restaurantId) {
  return useQuery(
    ["restaurants", restaurantId],
    () => fetchRestaurant(restaurantId)
  );
}
