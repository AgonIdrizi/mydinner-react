import React, { createContext, useState } from "react";

export const RestaurantContext = createContext();

const RestaurantContextProvider = props => {
  const [searchTerm, setSearchTerm] = useState('')


  return (
    <RestaurantContext.Provider value={{searchTerm,setSearchTerm}}>
      {props.children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContextProvider;