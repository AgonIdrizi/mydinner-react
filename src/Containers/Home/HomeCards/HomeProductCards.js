import React from "react";
import ProductCard from './ProductCard/ProductCard';
import "./HomeProductCards.scss";
import { clearCart } from "../../../store/actions";


const HomeProductCards = ({cards, className=""}) => {
  return (
    <div className={`HomeProductCards`}>
      {Object.keys(cards).map(product => (
        <ProductCard
          key={product}
          className={className}
          title={cards[product].title}
          url={cards[product].url}
          src={cards[product].src}
          description={cards[product].description}
        />
      ))}
    </div>
  );
};

export default HomeProductCards;
