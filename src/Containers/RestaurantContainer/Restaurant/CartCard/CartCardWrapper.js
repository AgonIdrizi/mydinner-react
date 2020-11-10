import React, { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import CartCard from "../CartCard/CartCard";

const CartCardWrapper = ({
  restaurantName,
  categoriesRef,
  cartRef,
  restaurantRef,
  menusRef
}) => {
  const [cartStyle, setCartStyle] = useState();

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < -318) {
      setCartStyle({
        backgroundColor: "",
        position: "fixed",
        top: "20px",
        bottom: "auto",
        width: "306px",
        marginRight: "20px",
        right: `${restaurantRef.current.offsetLeft +
          categoriesRef.current.style.width +
          menusRef.current.style.width}px`
      });
    } else {
      setCartStyle({});
    }
  });

  return (
    <div ref={cartRef} className="ResCard" style={cartStyle}>
      {React.useMemo(
        () => (
          <CartCard showCheckoutButton={true} restaurantName={restaurantName} />
        ),
        [restaurantName]
      )}
    </div>
  );
};

export default CartCardWrapper;
