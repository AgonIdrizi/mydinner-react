import React, { Fragment, useState, useEffect, useContext } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { OrderContext } from "../../../../contexts/OrderContext";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { AnimatePresence, motion } from "framer-motion";

import { RestaurantContext } from "../../../../contexts/RestaurantContext";

import { DownOutlined, UpOutlined } from "@ant-design/icons";
import "./CategoryItems.scss";
import { useParams } from "react-router";

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 1
    }
  },
  exit: { opacity: 0 }
};

const CategoryItems = ({ categoryTitle, itemMenus, searchTerm }) => {
  const [categorySectionOpen, setCategorySectionOpen] = useState(true);
  const { id } = useParams();
  const { categorySelected, setCategorySelected } = useContext(
    RestaurantContext
  );
  const { restaurantSelected } = useContext(OrderContext);
  const [canAddItems, setCanAddItems] = useState(false);
  const cartItems = useSelector(state => state.CardReducer.itemsInCart);
  const isSearching = searchTerm.length === 0 ? false : true;

  useEffect(() => {
    if (categoryTitle === categorySelected) {
      setCategorySectionOpen(true);
    }
  }, [categorySelected]);

  useEffect(() => {
    Number(id) == restaurantSelected
      ? setCanAddItems(true)
      : setCanAddItems(false);
  }, [restaurantSelected]);

  const categorySectionTitle =
    itemMenus.length !== 0 ? itemMenus[0].category : null;

  const openCategorySectionHandler = () => {
    if (categorySectionOpen) {
      setCategorySelected("");
    }
    setCategorySectionOpen(!categorySectionOpen);
  };

  const showCategoryTitle =
    (isSearching && itemMenus.length !== 0) || !isSearching;
  return (
    <Fragment>
      {showCategoryTitle && (
        <div className="CategoryItems">
          <div className={`CategoryHeader ${categoryTitle}`}>
            <span>{categorySectionTitle}</span>
            <span onClick={openCategorySectionHandler}>
              {categorySectionOpen ? (
                <DownOutlined style={{ fontSize: 22 }} />
              ) : (
                <UpOutlined style={{ fontSize: 22 }} />
              )}
            </span>
          </div>
        </div>
      )}

      {categorySectionOpen &&
        itemMenus.map((elem, idx) => (
          <ItemCard
            id={elem.id}
            key={elem.id + categoryTitle + idx}
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
};

export default CategoryItems;
