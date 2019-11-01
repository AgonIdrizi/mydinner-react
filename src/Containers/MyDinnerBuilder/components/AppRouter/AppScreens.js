import React from "react";

export const AsyncRestaurants = React.lazy(() =>
  import("../../../RestuarantsContainer/RestaurantsContainer")
);

export const AsyncLogin = React.lazy(() =>
  import("../../../LoginContainer/LoginContainer")
);
