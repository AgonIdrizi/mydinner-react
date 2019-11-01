import React from "react";

export const AsyncRestaurants = React.lazy(() =>
  import("../../../../Components/Restaurants/Restaurants")
);

export const AsyncLogin = React.lazy(() =>
  import("../../../../Components/Login/Login")
);
