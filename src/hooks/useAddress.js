import React from "react";
import axios from "axios";
import { useQuery, queryCache } from "react-query";
import { TestApiUrls } from "../config/testApiUrls";

const updateAddress = async data => {
  await new Promise(r => setTimeout(r, 500));
  return data;
};

export default function useAddress(data) {
  return useQuery("address", () => updateAddress(data));
}
