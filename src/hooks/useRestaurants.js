import React from "react";
import axios from "axios";
import { useQuery, queryCache } from "react-query";
import { TestApiUrls } from "../config/testApiUrls";

const fetchRestaurants = resource =>
  axios.get(TestApiUrls[resource]).then(res => res);

export default function useRestaurants(resource) {
  return useQuery(resource, resource => fetchRestaurants(resource));
}
