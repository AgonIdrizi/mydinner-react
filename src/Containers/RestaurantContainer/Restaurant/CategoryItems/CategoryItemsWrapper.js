import React, { useState, useContext, useEffect } from "react";
import CategoryItems from "./CategoryItems";
import { useSelector } from "react-redux";
import { OrderContext } from "../../../../contexts/OrderContext";
import SearchComponent from "../SearchComponent/SearchComponent";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import { v4 as uuidv4 } from "uuid";

const CategoryItemsWrapper = React.memo(
  ({ menusByCategory, menusRef, categorySelected, id }) => {
    const context = useContext(OrderContext);
    const { restaurantSelected } = context;
    const [canAddItems, setCanAddItems] = useState(false);
    const cartItems = useSelector(state => state.CardReducer.itemsInCart);
    const [menusStyle, setMenusStyle] = useState({});

    useEffect(() => {
      if (cartItems.length !== 0) {
        Number(id) == restaurantSelected
          ? setCanAddItems(true)
          : setCanAddItems(false);
      }
      if (cartItems.length === 0) {
        setCanAddItems(true);
      }
    }, [cartItems]);

    useScrollPosition(
      ({ prevPos, currPos }) => {
        if (currPos.y < -318) {
          setMenusStyle({
            position: "relative",
            left: "177px",
            right: "auto"
          });
        } else {
          setMenusStyle({});
        }
      },
      [menusStyle],
      null,
      false
    );

    const onSearchRestaurantHandler = event => {
      if (event.target.value === "") {
        setSearching(false);
        setSearchValue("");
        return;
      }
      setSearching(true);
      setSearchValue(event.target.value);
      
    };

    const arrayOfCategoryItems = React.useMemo(
      () =>
        Object.keys(menusByCategory).map((key, id) => (
          <CategoryItems
            key={uuidv4()}
            categoryTitle={key}
            canAddItems={canAddItems}
            cartItems={cartItems}
            categorySelected={categorySelected}
            itemMenus={menusByCategory[key]}
          />
        )),
      [canAddItems, menusByCategory]
    );
    //console.log(menusRef.current && menusRef.current.getBoundingClientRect())
    return (
      <section ref={menusRef} style={menusStyle} className="Menus">
        <div className="RestaurantSearchInput">
          <SearchComponent />
        </div>
        {arrayOfCategoryItems}
      </section>
    );
  },
  (prevPorps, nextProps) => {}
);

export default CategoryItemsWrapper;