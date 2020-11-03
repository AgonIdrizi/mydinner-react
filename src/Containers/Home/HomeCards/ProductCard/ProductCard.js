import React from "react";
import './ProductCard.scss'

const ProductCard = ({ src, title, description }) => {
  return (
    <div className="HomeProductCard">
      <div className={`ProductImage ${title}`}>
        <img src={src} alt={title} />
      </div>
      <div className="ProductText">
        <h2>{title}</h2>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default ProductCard;
