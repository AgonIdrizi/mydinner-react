import React, { useState, useEffect } from "react";
import { ROUTE_PATHS } from "../../../../config/constants";

const AppRouteError = ({ location, children }) => {
  const [isError, setIsError] = useState(false);

  useEffect(() => {}, [location]);

  return (
    <>
      {isError ? (
        <div>Opps, we couldn't find that, please try again</div>
      ) : (
        children
      )}
    </>
  );
};

export default AppRouteError;
