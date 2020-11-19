import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = ({ src, className, title, url, description }) => {
  return (
    <Link to={url}>
      <div className={`HomeProductCard ${className}`}>
        <div className={`ProductImage ${title}`}>
          <img className={className} src={src} alt={title} />
        </div>
        <div className="ProductText">
          <h2>{title}</h2>
          <div>{description}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
