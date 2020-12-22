import React, { Fragment, useState, useEffect, useMemo } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { v4 as uuidv4 } from "uuid";
import { AnimatePresence, motion } from "framer-motion";

import { RestaurantContext } from "../../../../contexts/RestaurantContext";

import { DownOutlined, UpOutlined } from "@ant-design/icons";
import "./CategoryItems.scss";

function categoriesSectionPropsAreEqual(prevProps, nextProps) {
  return prevPorps.categorySelected === nextProps.categorySelected;
}

const containerVariants = {
  initial: { opacity: 0},
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

const CategoryItems = React.memo(
  ({ categoryTitle, categorySelected, itemMenus, canAddItems, cartItems }) => {
    const [categorySectionOpen, setCategorySectionOpen] = useState(true);
    const [filteredData, setFilteredData] = useState([]);
    const restaurantContext = React.useContext(RestaurantContext);
    const { searchTerm } = restaurantContext;
    const isSearching = searchTerm.length === 0 ? false : true;

    useEffect(() => {
      if (categoryTitle == categorySelected) {
        setCategorySectionOpen(true);
      }
    }, [categorySelected]);

    useEffect(() => {
      const filteredData = itemMenus.filter(elem => {
        return elem.menuName.toLowerCase().search(searchTerm) !== -1;
      });
      setFilteredData(filteredData);
    }, [searchTerm]);

    const showCategoryTitle =
      (isSearching && filteredData.length !== 0) || !isSearching;

    return (
      <Fragment>
        {showCategoryTitle && (
          <div className="CategoryItems">
            <div className={`CategoryHeader ${categoryTitle}`}>
              <span>{categoryTitle}</span>
              <span
                onClick={() => setCategorySectionOpen(!categorySectionOpen)}
              >
                {categorySectionOpen ? (
                  <DownOutlined style={{ fontSize: 22 }} />
                ) : (
                  <UpOutlined style={{ fontSize: 22 }} />
                )}
              </span>
            </div>
          </div>
        )}

        <motion.div variants={containerVariants} initial="initial" animate="animate" exit="exit">
          {!isSearching &&
            categorySectionOpen &&
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
        </motion.div>
        {isSearching &&
          categorySectionOpen &&
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
    return true
  }
);

export default CategoryItems;
