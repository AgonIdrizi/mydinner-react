import React, { useState, useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";

import { DownOutlined, UpOutlined } from "@ant-design/icons";
import "./CategoryItems.scss";

const CategoryItems = ({
  categoryTitle,
  categorySelected,
  itemMenus,
  canAddItems,
  cartItems
}) => {
  const [categorySectionOpen, setCategorySectionOpen] = useState(true);

  useEffect(() => {
    if (categoryTitle == categorySelected) {
      setCategorySectionOpen(true);
    }
  }, [categorySelected]);

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
            key={elem.id}
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
};

export default CategoryItems;
