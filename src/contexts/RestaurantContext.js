import React, { createContext, useState } from "react";

export const RestaurantContext = createContext();

const RestaurantContextProvider = props => {
  const [searchTerm, setSearchTerm] = useState('')


  return (
    <RestaurantContext.Provider value={{ setSearchTerm, searchTerm }}>
      {props.children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContextProvider;