import React , { useRef, useState } from 'react';
import ItemCard from "./ItemCard/ItemCard";
import CartCard from "./CartCard/CartCard";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import "./Restaurant.scss";
import RestaurantImage from "../../../assets/restaurant/restaurantImage.jpeg";
import { AutoComplete } from 'antd';

const Restaurant = ({ resData }) => {
  
  const [categoriesStyle, setCategoriesStyle] = useState({})
  const [menusStyle, setMenusStyle] = useState({})
  const [cartStyle, setCartStyle] = useState({});
  const restaurantRef = useRef(null)
  const categoriesRef = useRef(null)
  const menusRef = useRef(null)
  const cartRef =  useRef(null)
  
useScrollPosition(({ prevPos, currPos }) => {
  
  if(currPos.y< -390) {
    categoriesRef.current.style.backgroundColor = 'red'
    setCategoriesStyle({
      backgroundColor: 'red',
      position: 'fixed',
      top: '20px',
      bottom: 'auto',
      left: `${restaurantRef.current.offsetLeft}px`,
      right: 'auto'
    })

    setMenusStyle({
      position: 'relative',
      left: '191px',
      right: 'auto'
    })
    setCartStyle({
      backgroundColor: 'red',
      position: 'fixed',
      top: '20px',
      bottom: 'auto',
      right: `${restaurantRef.current.offsetLeft + categoriesRef.current.style.width+ menusRef.current.style.width}px`,
    })
  } else {
    setCategoriesStyle({})
    setMenusStyle({})
    setCartStyle({})
  }
})


  return (
    <div className="RestaurantContainer">
      <div ref={restaurantRef} className="Restaurant">
        <div className="RestaurantHeader">
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
          <section ref={menusRef} style={menusStyle} className="Menus">
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
          <section ref={cartRef} style={cartStyle} className="ResCard">
            <CartCard />
          </section>
        </div>
      </div>
    </div>
  )
}

export default Restaurant;
