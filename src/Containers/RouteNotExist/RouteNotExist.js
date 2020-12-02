import React from "react";
import { useHistory } from "react-router-dom";

const routeNotExists = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };

  return (
    <div>
      <div>Opps that route doesnt exists</div>
      <button onClick={() => handleClick()}>Got to home</button>
    </div>
  );
};
export default routeNotExists;
