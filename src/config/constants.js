import Restaurant from "../assets/home-banners/vertical-restaurants.webp";
import Grocery from "../assets/home-banners/vertical-grocery.webp";
import Flowers from "../assets/home-banners/vertical-flowers.webp";
import Pharmacy from "../assets/home-banners/vertical-pharmacy.webp";
import BecomePartner from "../assets/home-banners/become-a-partner.webp";
import BuildYourCareer from "../assets/home-banners/career-with-us.webp";

export const ROUTE_PATHS = {
  DEFAULT: "/",
  ALL_RESTAURANTS: "/all-restaurants",
  RESTAURANTS_CITY: (city = "city") => `/restaurants/:${city}`,
  LOGIN: "/login",
  SIGN_UP: "/sign-up",
  PROFILE: "/profile",
  RESTAURANT: (id = "id") => `/restaurant/:${id}`,
  ALL_GROCERIES: "/groceries",
  GROCERIES_CITY: (city = "city") => `/groceries/:${city}`,
  GROCERY: (id = "id") => `/groceries/:${id}`,
  ALL_FLOWERS: "/flowers",
  FLOWERS_CITY: (city = "city") => `/flowers/:${city}`,
  FLOWER: (id = "id") => `/flowers/:${id}`,
  ALL_PHARMACIES: "/pharmacies",
  PHARMACIES_CITY: (city = "city") => `/pharmacies/:${city}`,
  PHARMACY: (id = "id") => `/pharmacies/:${id}`,
  CART: "/cart"
};

export const productCards = {
  restaurant: {
    title: "Restaurants",
    url: "/all-restaurants",
    src: Restaurant,
    description:
      "Find Deals, free delivery, and more from our restaurant partners."
  },
  grocery: {
    title: "Grocery",
    url: "/groceries",
    src: Grocery,
    description:
      "Don't stand in line - order online! Chose from top stores delivering groceries to you."
  },
  flowers: {
    title: "Flowers",
    url: "/flowers",
    src: Flowers,
    description:
      "Show them you care, We're ready to deliver flowers and chocolates to your loved one."
  },
  pharmacy: {
    title: "Pharmacy",
    url: "/pharmacies",
    src: Pharmacy,
    description:
      "Got the sniffles? We've got you. Get medicine delivered to you quickly and easily."
  }
};

export const joinUsCards = {
  becomeAPartner: {
    title: "Become a partner",
    src: BecomePartner,
    description: "Reach more customers and achieve growth with us"
  },
  buildYourCareer: {
    title: "Build a career",
    src: BuildYourCareer,
    description: "Join the dynamic team that makes it all happen"
  }
};
