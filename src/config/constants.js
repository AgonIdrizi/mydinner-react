export const ROUTE_PATHS = {
  DEFAULT: "/",
  ALL_RESTAURANTS: "/all-restaurants",
  LOGIN: "/login",
  SIGN_UP: "/sign-up",
  PROFILE: "/profile",
  RESTAURANT: (id = ':id') => `/restaurant/${id}`,
  CART: "/cart"
};
