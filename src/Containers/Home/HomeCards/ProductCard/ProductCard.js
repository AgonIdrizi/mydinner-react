import React from "react";
import './ProductCard.scss'

const ProductCard = ({ src, className, title, description }) => {
  return (
    <div className={`HomeProductCard ${className}`}>
      <div className={`ProductImage ${title}`}>
        <img className={className} src={src} alt={title} />
      </div>
      <div className="ProductText">
        <h2>{title}</h2>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default ProductCard;
