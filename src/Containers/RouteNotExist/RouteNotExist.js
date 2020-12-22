import React from "react";
import {motion} from 'framer-motion';
import { useHistory } from "react-router-dom";
import {divContainerVariant} from '../../styles/animations/animationsVariants';

const routeNotExists = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };

  return (
    <div > 
      <div>Opps that route doesnt exists</div>
      <button onClick={() => handleClick()}>Got to home</button>
    </div>
  );
};
export default routeNotExists;
