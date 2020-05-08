import React , { useRef, useState } from 'react';
import ItemCard from "./ItemCard/ItemCard";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import "./Restaurant.scss";
import RestaurantImage from "../../../assets/restaurant/restaurantImage.jpeg";

const Restaurant = ({ resData }) => {
  
  const [categoriesStyle, setCategoriesStyle] = useState({
    
  })

  const categoriesRef = useRef(null)
  const cartRef =  useRef(null)
  
useScrollPosition(({ prevPos, currPos }) => {
  console.log(currPos.x)
  console.log(currPos.y)
  console.log('categoriesRef', categoriesRef)
  if(currPos.y< -390) {
    categoriesRef.current.style.backgroundColor = 'red'
    setCategoriesStyle({
      backgroundColor: 'red',
      position: 'fixed',
      top: '20px',
      bottom: 'auto',
      left: '80px',
      right: 'auto'
    })
  } else {
    setCategoriesStyle({})
  }
})


  return (
    <div className="RestaurantContainer">
      <div  className="Restaurant">
        <div  className="RestaurantHeader">
          <h2>{resData.restaurantName}</h2>
          <img src={RestaurantImage} />
          <div className="RestaurantInfos">
            <span>{resData.restaurantName}, </span>
            <span>{resData.restaurantAddress}, </span>
            <span>{resData.restaurantContact}</span>
          </div>
        </div>
        <h2>{`Header inside viewport .`}</h2>
        <div className="RestaurantMenu">
          <section ref={categoriesRef} style={categoriesStyle} className="Categories">
            <div>sdfsdfsdf</div>
            <div>sdfsdfsdf</div>
            <div>sdfsdfsdf</div>
            <div>sdfsdfsdf</div>
            <div>sdfsdfsdf</div>
            <div>sdfsdfsdf</div>
          </section>
          <section className="Menus">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </section>
        </div>
      </div>
    </div>
  )
}

export default Restaurant;
