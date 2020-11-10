import React, { Fragment, useState, useEffect, useMemo } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { v4 as uuidv4 } from "uuid";

import { DownOutlined, UpOutlined } from "@ant-design/icons";
import "./CategoryItems.scss";

function categoriesSectionPropsAreEqual(prevProps, nextProps) {
  return prevPorps.categorySelected === nextProps.categorySelected;
}

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
      console.log('filteredData CateogryItems', filteredData)
      setFilteredData(filteredData);
    }, [searchTerm]);

    console.log("CategoryItems rendered");

    return (
      <Fragment>
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
        {!isSearching && categorySectionOpen &&
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
          {isSearching && categorySectionOpen &&
          filteredData.map(elem => (
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
      </Fragment>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.searchTerm !== nextProps.searchTerm;
  }
);

export default CategoryItems;
