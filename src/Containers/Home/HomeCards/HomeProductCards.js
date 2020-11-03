import React from "react";
import ProductCard from './ProductCard/ProductCard';
import "./HomeProductCards.scss";
import Restaurant from "../../../assets/home-banners/vertical-restaurants.webp";
import Grocery from "../../../assets/home-banners/vertical-grocery.webp";
import Flowers from "../../../assets/home-banners/vertical-flowers.webp";
import Pharmacy from "../../../assets/home-banners/vertical-pharmacy.webp";

const productCards = {
  restaurant: {
    title: "Restaurant",
    src: Restaurant,
    description:
      "Find Deals, free delivery, and more from our restaurant partners."
  },
  grocery: {
    title: "Grocery",
    src: Grocery,
    description:
      "Don't stand in line - order online! Chose from top stores delivering groceries to you."
  },
  flowers: {
    title: "Flowers",
    src: Flowers,
    description:
      "Show them you care, We're ready to deliver flowers and chocolates to your loved one."
  },
  pharmacy: {
    title: "Pharmacy",
    src: Pharmacy,
    description:
      "Got the sniffles? We've got you. Get medicine delivered to you quickly and easily."
  }
};

const HomeProductCards = () => {
  return (
    <div className="HomeProductCards">
      {Object.keys(productCards).map(product => (
        <ProductCard
          title={productCards[product].title}
          src={productCards[product].src}
          description={productCards[product].description}
        />
      ))}
    </div>
  );
};

export default HomeProductCards;
