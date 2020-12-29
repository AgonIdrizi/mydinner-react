import React, { Fragment, useState, useEffect, useContext } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { v4 as uuidv4 } from "uuid";
import { AnimatePresence, motion } from "framer-motion";

import { RestaurantContext } from "../../../../contexts/RestaurantContext";

import { DownOutlined, UpOutlined } from "@ant-design/icons";
import "./CategoryItems.scss";

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

const CategoryItems = ({
  categoryTitle,
  itemMenus,
  canAddItems,
  cartItems,
  searchTerm
}) => {
  const [categorySectionOpen, setCategorySectionOpen] = useState(true);
  const { categorySelected } = useContext(RestaurantContext);
  const isSearching = searchTerm.length === 0 ? false : true;

  useEffect(() => {
    if (categoryTitle === categorySelected) {
      setCategorySectionOpen(true);
    }
  }, [categorySelected]);

  const showCategoryTitle =
    (isSearching && itemMenus.length !== 0) || !isSearching;
  return (
    <Fragment>
      {showCategoryTitle && (
        <div className="CategoryItems">
          <div className={`CategoryHeader ${categoryTitle}`}>
            <span>{itemMenus.length !== 0 ? itemMenus[0].category : null}</span>
            <span onClick={() => setCategorySectionOpen(!categorySectionOpen)}>
              {categorySectionOpen ? (
                <DownOutlined style={{ fontSize: 22 }} />
              ) : (
                <UpOutlined style={{ fontSize: 22 }} />
              )}
            </span>
          </div>
        </div>
      )}

      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
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
      </motion.div>
    </Fragment>
  );
};

export default CategoryItems;
