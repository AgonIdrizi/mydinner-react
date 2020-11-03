import React from 'react';
import './HomeProductCards.scss';
import Restaurant from '../../../assets/home-banners/vertical-restaurants.webp';
import Grocery from '../../../assets/home-banners/vertical-grocery.webp';
import Flowers from '../../../assets/home-banners/vertical-flowers.webp';
import Pharmacy from '../../../assets/home-banners/vertical-pharmacy.webp';

const HomeProductCards = () => {
  return (
    <div className="HomeProductCards">
      <div className="HomeProductCard">
        <div className="ProductImage">
          <img src={Restaurant} alt="Restaurant" />
        </div>
        <div className="ProductText">
          <h2>Restaurant</h2>
          <div>Find Deals, free delivery, and more from our restaurant partners</div>
        </div>
      </div>
      <div className="HomeProductCard">
        <div className="ProductImage">
          <img src={Grocery} alt="Grocery" />
        </div>
        <div className="ProductText">
          <h2>Grocery</h2>
          <div>Don't stand in line - order online! Chose from top stores delivering groceries to you.</div>
        </div>
      </div>
      <div className="HomeProductCard">
        <div className="ProductImage">
          <img src={Flowers} alt="Flowers" />
        </div>
        <div className="ProductText">
          <h2>Flowers</h2>
          <div>Find Deals, free delivery, and more from our restaurant partners</div>
        </div>
      </div>
      <div className="HomeProductCard">
        <div className="ProductImage">
          <img src={Pharmacy} alt="Pharmacy" />
        </div>
        <div className="ProductText">
          <h2>Pharmacy</h2>
          <div>Find Deals, free delivery, and more from our restaurant partners</div>
        </div>
      </div>
    </div>
  );
}

export default HomeProductCards;
