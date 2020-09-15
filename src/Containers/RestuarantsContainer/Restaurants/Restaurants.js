import React, { useState, useEffect, useRef } from "react";
import RestaurantCard from "./RestaurantCard/RestaurantCard";
import Filter from "../../../Components/UI/Filter/Filter";
import { countObjectOccurences } from "../../../utils/helperFunctions";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { flattenArray } from '../../../utils/helperFunctions';
import "./Restaurants.scss";
import "antd/es/input/style/index.css";
import { Input, Button } from "antd";

const { Search } = Input;

const sortByArray = [
  "Newest",
  "A to Z",
  "Min. Order Amount",
  "Fastest Delivery"
];

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
  const filterDivRef = useRef(null);
  

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
    console.log(currPos.x, currPos.y);
    console.log("filterDivRef.current", filterDivRef.current.style.offsetLeft);
    if (currPos.y < -150) {
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

  const setSortButtonStyle = value => {
    return value === sortByClicked ? "black" : "grey";
  };

  const onSortByClickHandler = value => {
    setSortByClicked(value);
  };

  return (
    <div className="RestaurantsContainer">
      <section className="Restaurants">
        <div className="RestaurantHeaderText">
          <h2>Restaurants</h2>
        </div>

        <div className="SortRestaurants">
          <h3>Sort By:</h3>
          {sortByArray.map(elem => (
            <Button
              key={elem}
              style={{ color: `${setSortButtonStyle(elem)}` }}
              onClick={() => onSortByClickHandler(elem)}
              type="link"
            >
              {elem}
            </Button>
          ))}
        </div>
        <section className="ResInnerContainer">
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
          <div
            ref={restaurantDivRef}
            style={restaurantCartDivStyle}
            className="AllRestaurants"
          >
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
          </div>
        </section>
      </section>
    </div>
  );
};

export default Restaurants;
