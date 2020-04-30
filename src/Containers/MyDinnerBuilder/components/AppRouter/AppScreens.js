import React from "react";

export const AsyncRestaurants = React.lazy(() =>
  import("../../../RestuarantsContainer/RestaurantsContainer")
);

export const AsyncLogin = React.lazy(() =>
  import("../../../LoginContainer/LoginContainer")
);

export const AsyncRestaurant = React.lazy(() =>
  import("../../../RestaurantContainer/RestaurantContainer")
);

export const AsyncRouteNotExists = React.lazy(() =>
  import("../../../RouteNotExist/RouteNotExist")
);
