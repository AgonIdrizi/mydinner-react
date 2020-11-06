import React, {useState} from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { Button } from "antd";
import Card from "../../../../Components/UI/Card/Card";

const CategoriesCard = ({
  categoriesData,
  categoriesRef,
  restaurantRef,
  setCategorySelected

}) => {
  const [categoriesStyle, setCategoriesStyle] = useState({});

  useScrollPosition(({ prevPos, currPos }) => {
    console.log(currPos.x, currPos.y);
    if (currPos.y < -318) {
      categoriesRef.current.style.backgroundColor = "";
      setCategoriesStyle({
        backgroundColor: "",
        position: "fixed",
        top: "20px",
        bottom: "auto",
        left: `${restaurantRef.current.offsetLeft}px`,
        right: "auto"
      });

      // setMenusStyle({
      //   position: "relative",
      //   left: "177px",
      //   right: "auto"
      // });
      // setCartStyle({
      //   backgroundColor: "",
      //   position: "fixed",
      //   top: "20px",
      //   bottom: "auto",
      //   right: `${restaurantRef.current.offsetLeft +
      //     categoriesRef.current.style.width +
      //     menusRef.current.style.width}px`
      // });
    } else {
      setCategoriesStyle({});
      // setMenusStyle({});
      // setCartStyle({});
    }
  });

  const onCategoryClickHandler = catName => {
    if(catName === 'all') {
      setCategorySelected(catName)
   
    } else {
      setCategorySelected(catName)

    }
  }

  return (
    <Card>
      <section
        ref={categoriesRef}
        style={categoriesStyle}
        className="Categories"
      >
        <Button type="link" onClick={e => onCategoryClickHandler("all")}>
          All
        </Button>
        {categoriesData.map(category => (
          <Button
            key={category.catName}
            data-testid={category.catName}
            type="link"
            onClick={e => onCategoryClickHandler(category.catName)}
          >
            {category.catName}
          </Button>
        ))}
      </section>
    </Card>
  );
};

export default CategoriesCard;
