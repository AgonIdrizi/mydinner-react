import React from "react";
import axios from "axios";
import { useQuery, queryCache } from "react-query";
import { TestApiUrls } from "../config/testApiUrls";

const fetchRestaurants = () =>
  axios.get(TestApiUrls.restaurantsGet).then(res =>  res);

export default function useRestaurants() {
  return useQuery("restaurants", fetchRestaurants);
}
