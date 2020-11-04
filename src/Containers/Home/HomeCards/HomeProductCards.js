import React from "react";
import ProductCard from './ProductCard/ProductCard';
import "./HomeProductCards.scss";
import { clearCart } from "../../../store/actions";


const HomeProductCards = ({cards, className}) => {
  return (
    <div className={`HomeProductCards`}>
      {Object.keys(cards).map(product => (
        <ProductCard
          className={className}
          title={cards[product].title}
          src={cards[product].src}
          description={cards[product].description}
        />
      ))}
    </div>
  );
};

export default HomeProductCards;
