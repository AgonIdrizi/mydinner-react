import React from "react";

export const AsyncRestaurants = React.lazy(() =>
  import("../../../../Components/Restaurants/Restaurants")
);
