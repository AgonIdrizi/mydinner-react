import React, { useState, useContext, useEffect } from "react";
import CategoryItems from "./CategoryItems";

import SearchComponent from "../SearchComponent/SearchComponent";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import { v4 as uuidv4 } from "uuid";

const CategoryItemsWrapper = React.memo(
  ({ menusByCategory, menusRef }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const [menusStyle, setMenusStyle] = useState({});
    const [filteredMenus, setFilteredMenus] = useState([]);

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
  (prevPorps, nextProps) => {}
);

export default CategoryItemsWrapper;
