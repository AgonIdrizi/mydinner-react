import React, { useState, useContext, useEffect } from "react";
import CategoryItems from "./CategoryItems";
import { useSelector } from "react-redux";
import { OrderContext } from "../../../../contexts/OrderContext";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { v4 as uuidv4 } from "uuid";
import { Input } from "antd";

const { Search } = Input;

const CategoryItemsWrapper = React.memo(
  ({ menusByCategory, menusRef, categorySelected, id }) => {
    const context = useContext(OrderContext);
    const { restaurantSelected } = context;
    const [canAddItems, setCanAddItems] = useState(false);
    const cartItems = useSelector(state => state.CardReducer.itemsInCart);
    const [menusStyle, setMenusStyle] = useState({});
    const [stickMenu, setStickMenu] = useState(false);
    const [isSearching, setSearching] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

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
        setSearchTerm("");
        return;
      }
      setSearching(true);
      setSearchTerm(event.target.value);
      console.log(event.target.value);
    };

    const arrayOfCategoryItems = React.useMemo(
      () =>
        Object.keys(menusByCategory).map((key, id) => (
          <CategoryItems
            key={uuidv4()}
            categoryTitle={key}
            canAddItems={canAddItems}
            cartItems={cartItems}
            isSearching={isSearching}
            searchTerm={searchTerm}
            categorySelected={categorySelected}
            itemMenus={menusByCategory[key]}
          />
        )),
      [searchTerm, menusByCategory]
    );

    return (
      <section ref={menusRef} style={menusStyle} className="Menus">
        <div className="RestaurantSearchInput">
          <Search
            placeholder="input search text"
            onChange={event => onSearchRestaurantHandler(event)}
          />
        </div>
        {arrayOfCategoryItems}
      </section>
    );
  },
  (prevPorps, nextProps) => {}
);

export default CategoryItemsWrapper;
