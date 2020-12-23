import React, { createContext, useState } from "react";

export const RestaurantContext = createContext();
RestaurantContext.displayName = "ReastaurantContext";

const RestaurantContextProvider = props => {
  const [categorySelected, setCategorySelected] = useState("all");

  const value = React.useMemo(() => {
    return { categorySelected, setCategorySelected };
  }, [categorySelected, setCategorySelected]);
  return (
    <RestaurantContext.Provider value={value}>
      {props.children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContextProvider;
