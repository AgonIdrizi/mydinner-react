import React, { useState, useContext, useEffect } from "react";
import CategoryItems from "./CategoryItems";
import { useSelector } from "react-redux";
import { OrderContext } from "../../../../contexts/OrderContext";
import SearchComponent from "../SearchComponent/SearchComponent";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import { v4 as uuidv4 } from "uuid";

const CategoryItemsWrapper = React.memo(
  ({ menusByCategory, isLoading, menusRef, id }) => {
    const context = useContext(OrderContext);
    const { restaurantSelected } = context;
    const [searchTerm, setSearchTerm] = useState("");
    const [canAddItems, setCanAddItems] = useState(false);
    const cartItems = useSelector(state => state.CardReducer.itemsInCart);
    const [menusStyle, setMenusStyle] = useState({});
    const [filteredMenus, setFilteredMenus] = useState([]);

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

    useEffect(() => {
      const filtered = Object.keys(menusByCategory).map((key, id) => {
        return menusByCategory[key].filter(elem => {
          return elem.menuName.toLowerCase().search(searchTerm) !== -1;
        });
      });
      setFilteredMenus(filtered);
    }, [searchTerm]);

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
    const items = filteredMenus.length === 0 ? menusByCategory : filteredMenus;
    const arrayOfCategoryItems = Object.keys(items).map((key, id) => (
      <CategoryItems
        key={key + id}
        categoryTitle={key}
        canAddItems={canAddItems}
        cartItems={cartItems}
        itemMenus={items[key]}
        searchTerm={searchTerm}
      />
    ));

    return (
      <section ref={menusRef} style={menusStyle} className="Menus">
        <div className="RestaurantSearchInput">
          <SearchComponent setSearchTerm={setSearchTerm} />
        </div>
        {arrayOfCategoryItems}
      </section>
    );
  },
  (prevPorps, nextProps) => {
    if (prevPorps.categorySelected !== nextProps.categorySelected) return false;
    if (prevPorps.id !== nextProps.id) return false;
    if (prevPorps.isLoading !== nextProps.isLoading) return true;
    return false;
  }
);

export default CategoryItemsWrapper;
