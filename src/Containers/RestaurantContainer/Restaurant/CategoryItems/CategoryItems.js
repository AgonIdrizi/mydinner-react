import React, { useState, useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { v4 as uuidv4 } from "uuid";

import { DownOutlined, UpOutlined } from "@ant-design/icons";
import "./CategoryItems.scss";

const CategoryItems = React.memo(
  ({
    categoryTitle,
    categorySelected,
    itemMenus,
    canAddItems,
    cartItems,
    searchTerm,
    isSearching
  }) => {
    const [categorySectionOpen, setCategorySectionOpen] = useState(true);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
      if (categoryTitle == categorySelected) {
        setCategorySectionOpen(true);
      }
    }, [categorySelected]);

    useEffect(() => {
      console.log("searchTerm useEffect", searchTerm);
      const filteredData = itemMenus.filter(elem => {
        return elem.menuName.toLowerCase().search(searchTerm) !== -1;
      });
      setFilteredData(filteredData);
    }, []);

    console.log("CategoryItems rendered");

    return (
      <>
        <div className="CategoryItems">
          <div className="CategoryHeader">
            <span>{categoryTitle}</span>
            <span onClick={() => setCategorySectionOpen(!categorySectionOpen)}>
              {categorySectionOpen ? (
                <DownOutlined style={{ fontSize: 22 }} />
              ) : (
                <UpOutlined style={{ fontSize: 22 }} />
              )}
            </span>
          </div>
        </div>
        {categorySectionOpen &&
          itemMenus.map(elem => (
            <ItemCard
              id={elem.id}
              key={uuidv4()}
              name={elem.menuName}
              imgUrl={elem.menuImgUrl}
              price={elem.price}
              ingrdients={elem.ingredients}
              showIngredients={true}
              canAddItems={canAddItems}
              cartItems={cartItems}
            />
          ))}
      </>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.isSearching === nextProps.isSearching;
  }
);

export default CategoryItems;
