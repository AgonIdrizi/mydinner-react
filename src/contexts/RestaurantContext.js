import React, { createContext, useState } from "react";

export const RestaurantContext = createContext();

const RestaurantContextProvider = props => {
  const [searchTerm, setSearchTerm] = useDebounce()
  return (
    <RestaurantContext.Provider value={{  }}>
      {props.children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContextProvider;