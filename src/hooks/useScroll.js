import React, {useState} from 'react';
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
const useScroll = () => {
  const [categoriesStyle, setCategoriesStyle] = useState({});
  const [menusStyle, setMenusStyle] = useState({});
  const [cartStyle, setCartStyle] = useState({});

  useScrollPosition(({ prevPos, currPos }) => {
    console.log(currPos.x, currPos.y);
    if (currPos.y < -318) {
      categoriesRef.current.style.backgroundColor = "";
      setCategoriesStyle({
        backgroundColor: "",
        position: "fixed",
        top: "20px",
        bottom: "auto",
        left: `${restaurantRef.current.offsetLeft}px`,
        right: "auto"
      });

      setMenusStyle({
        position: "relative",
        left: "177px",
        right: "auto"
      });
      setCartStyle({
        backgroundColor: "",
        position: "fixed",
        top: "20px",
        bottom: "auto",
        right: `${restaurantRef.current.offsetLeft +
          categoriesRef.current.style.width +
          menusRef.current.style.width}px`
      });
    } else {
      setCategoriesStyle({});
      setMenusStyle({});
      setCartStyle({});
    }
  });

  return [menusStyle, categoriesStyle, cartStyle]
}

export default useScroll;