export const ROUTE_PATHS = {
  DEFAULT: "/",
  ALL_RESTAURANTS: "/all-restaurants",
  RESTAURANTS_CITY: (city= 'city') => `/restaurants/:${city}`,
  LOGIN: "/login",
  SIGN_UP: "/sign-up",
  PROFILE: "/profile",
  RESTAURANT: (id = 'id') => `/restaurant/${id}`,
  CART: "/cart"
};
