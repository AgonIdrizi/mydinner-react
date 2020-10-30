import React, { useState, useEffect, useRef } from "react";
import RestaurantCard from "./RestaurantCard/RestaurantCard";
import Filter from "../../../Components/UI/Filter/Filter";
import { countObjectOccurences } from "../../../utils/helperFunctions";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import RestaurantCardSkeleton from "../../../Components/UI/Skeleton/RestaurantCardSkeleton";
import { motion, AnimatePresence } from "framer-motion";
import { divContainerVariant } from "../../../styles/animations/animationsVariants";
import { flattenArray } from "../../../utils/helperFunctions";
import "./Restaurants.scss";
import "antd/es/input/style/index.css";
import { Menu, Input, Button, Dropdown } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

const { Search } = Input;

const sortByArray = [
  "Newest",
  "A to Z",
  "Min. Order Amount",
  "Fastest Delivery"
];

const restaurantsDivVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeIn",
      delayChildren: 0.8,
      staggerChildren: 0.3,
      staggerDirection: 1
    }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

const Restaurants = ({ restaurants }) => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isSearching, setSearching] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [sortByClicked, setSortByClicked] = useState("Newest");
  const [filterByCuisine, setFilterByCuisine] = useState([]);
  const [cuisineFilterChecboxes, setCuisineFilterCheckboxes] = useState([]);
  const [filterDivStyle, setFilterDivStyle] = useState({});
  const [restaurantCartDivStyle, setRestauranCarttDivStyle] = useState({});
  const restaurantDivRef = useRef(null);
  const restaurantsDivRef = useRef(null);
  const filterDivRef = useRef(null);
  const restaurantsDivWidth =
    restaurantsDivRef.current && restaurantsDivRef.current.offsetWidth < 500
      ? true
      : false;

  useEffect(() => {
    const allrestaurants = sortByHandler(restaurants);
    if (cuisineFilterChecboxes.length === 0) {
      setAllRestaurants([...allrestaurants]);
      return;
    }
    if (cuisineFilterChecboxes.length !== 0) {
      const array = [];
      cuisineFilterChecboxes.forEach(value => {
        const filteredByCheckbox = allrestaurants.filter(
          elem => elem.restaurantType === value
        );
        console.log(filteredByCheckbox);
        array.push([...filteredByCheckbox]);
      });
      setAllRestaurants(flattenArray(array));
    }
  }, [sortByClicked, cuisineFilterChecboxes, restaurants]);

  useEffect(() => {
    if (isSearching) {
      const filteredData = restaurants.filter(
        elem => elem.restaurantName.toLowerCase().search(searchValue) !== -1
      );
      const sortedData = sortByHandler(filteredData);

      const countFilteredCuisines = countObjectOccurences(
        filteredData,
        "restaurantType"
      );

      if (cuisineFilterChecboxes.length === 0) {
        setFilteredRestaurants([...sortedData]);
        updateCuisineFilterCheckboxData(filterByCuisine, countFilteredCuisines);
        return;
      }

      let filteredByCuisine = [];
      if (cuisineFilterChecboxes.length !== 0) {
        cuisineFilterChecboxes.forEach(cuisine => {
          const tempArray = sortedData.filter(
            elem => elem.restaurantType === cuisine
          );
          filteredByCuisine.push([...tempArray]);
        });
      }
      updateCuisineFilterCheckboxData(filterByCuisine, countFilteredCuisines);

      setFilteredRestaurants(flattenArray(filteredByCuisine));
    }
  }, [sortByClicked, cuisineFilterChecboxes, searchValue]);

  // useEffect to display Filter data
  useEffect(() => {
    const countCuisines = countObjectOccurences(restaurants, "restaurantType");
    //display filter data when restaurants data changes
    if (restaurants && !isSearching) {
      setFilterByCuisine(countCuisines);
    }
    // update filter data when search is
    if (!isSearching) {
      setFilterByCuisine(countCuisines);
    }
  }, [restaurants, searchValue]);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < -150 && filterDivRef.current != null) {
      setFilterDivStyle({
        position: "fixed",
        top: "20px"
      });
      setRestauranCarttDivStyle({
        marginLeft: "24%"
      });
    } else {
      setFilterDivStyle({
        display: "flex",
        flexDirection: "column"
      });
      setRestauranCarttDivStyle({});
    }
  });

  const setSortButtonStyle = value => {
    return value === sortByClicked ? "black" : "grey";
  };

  const menu = (
    <Menu onClick={() => console.log("asdds")}>
      {sortByArray.map(elem => (
        <Menu.Item key={elem} icon={<UserOutlined />}>
          <Button
            type="link"
            style={{ color: `${setSortButtonStyle(elem)}` }}
            onClick={() => onSortByClickHandler(elem)}
          >
            {elem}
          </Button>
        </Menu.Item>
      ))}
    </Menu>
  );

  const onSearchRestaurantHandler = event => {
    if (event.target.value === "") {
      setSearching(false);
      setSearchValue("");
      setFilteredRestaurants([]);
      return;
    }

    setSearchValue(event.target.value);
    setSearching(true);
    console.log(event.target.value);
  };

  const updateCuisineFilterCheckboxData = (
    filterByCuisine,
    countFilteredCuisines
  ) => {
    Object.keys(filterByCuisine).map(key => {
      if (Object.keys(countFilteredCuisines).includes(key)) {
        filterByCuisine[key] = countFilteredCuisines[key];
      } else {
        filterByCuisine[key] = 0;
      }
    });
  };

  const sortByHandler = array => {
    switch (sortByClicked) {
      case "Newest": {
        const sortByNewest = array.sort(
          (a, b) => Date.parse(b.dateAdded) - Date.parse(a.dateAdded)
        );
        return sortByNewest;
      }
      case "A to Z": {
        const sortByAtoZ = array.sort((a, b) =>
          a.restaurantName < b.restaurantName ? -1 : 1
        );
        return sortByAtoZ;
      }
      case "Min. Order Amount": {
        const sortByMinOrderAmount = array.sort(
          (a, b) => a.minOrder - b.minOrder
        );
        return sortByMinOrderAmount;
      }
      case "Fastest Delivery": {
        const sortByFasterDelivery = array.sort(
          (a, b) => a.maxDeliveryTime - b.maxDeliveryTime
        );
        return sortByFasterDelivery;
      }
      default: {
        return [...array];
      }
    }
  };

  const onCheckBoxClickHandler = value => {
    let indexOfElem = cuisineFilterChecboxes.findIndex(elem => elem === value);

    if (indexOfElem === -1) {
      setCuisineFilterCheckboxes([...cuisineFilterChecboxes, value]);
    } else {
      const updatedCuisineFilterCheckboxes = cuisineFilterChecboxes.filter(
        elem => elem != value
      );
      setCuisineFilterCheckboxes(updatedCuisineFilterCheckboxes);
    }
  };

  const onSortByClickHandler = value => {
    setSortByClicked(value);
  };

  return (
    <motion.div
      className="RestaurantsContainer"
      variants={divContainerVariant}
      initial="hidden"
      animate="animate"
      exit="exit"
    >
      <section ref={restaurantsDivRef} className="Restaurants">
        <div className="RestaurantHeaderText">
          {!restaurantsDivWidth && <h2>Restaurants</h2>}
          {restaurantsDivWidth && (
            <div className="RestaurantSearchInput">
              <Search
                placeholder="input search text"
                onChange={event => onSearchRestaurantHandler(event)}
                style={{ width: 200 }}
              />
            </div>
          )}
        </div>
        <div className="SortRestaurants">
          {!restaurantsDivWidth && <h3>Sort By:</h3>}
          {!restaurantsDivWidth &&
            sortByArray.map(elem => (
              <Button
                key={elem}
                style={{ color: `${setSortButtonStyle(elem)}` }}
                onClick={() => onSortByClickHandler(elem)}
                type="link"
              >
                {elem}
              </Button>
            ))}
          {restaurantsDivWidth && (
            <Dropdown overlay={menu}>
              <Button>
                Sort By <DownOutlined />
              </Button>
            </Dropdown>
          )}
        </div>
        <section className="ResInnerContainer">
          {!restaurantsDivWidth && (
            <div
              ref={filterDivRef}
              style={filterDivStyle}
              className="SearchFilterContainer"
            >
              <div className="RestaurantSearchInput">
                <Search
                  placeholder="input search text"
                  onChange={event => onSearchRestaurantHandler(event)}
                  style={{ width: 200 }}
                />
              </div>
              <div className="FilterRestaurants">
                <Filter
                  filterByCuisine={filterByCuisine}
                  onCheckBoxClickHandler={onCheckBoxClickHandler}
                />
              </div>
            </div>
          )}
          <motion.div
            variants={restaurantsDivVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            ref={restaurantDivRef}
            style={restaurantCartDivStyle}
            className="AllRestaurants"
          >
            <AnimatePresence>
              {!isSearching &&
                allRestaurants.map((elem, index) => (
                  <RestaurantCard
                    key={elem.id}
                    id={elem.id}
                    imgUrl={elem.imgUrl}
                    name={elem.restaurantName}
                    type={elem.restaurantType}
                  />
                ))}

              {isSearching &&
                filteredRestaurants.map((elem, index) => (
                  <RestaurantCard
                    key={elem.id}
                    id={elem.id}
                    imgUrl={elem.imgUrl}
                    name={elem.restaurantName}
                    type={elem.restaurantType}
                  />
                ))}
            </AnimatePresence>
          </motion.div>
        </section>
      </section>
    </motion.div>
  );
};

export default Restaurants;
