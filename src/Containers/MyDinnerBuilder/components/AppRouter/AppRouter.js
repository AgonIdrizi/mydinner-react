import React from "react";
import { Switch, Route } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../config/constants";
import { AsyncRestaurants, AsyncLogin } from "./AppScreens";


const AppRouter = () => {
  return (
    <Switch>
      <Route
        path={ROUTE_PATHS.ALL_RESTAURANTS}
        render={() => <AsyncRestaurants />}
        exact={true}
      />
      <Route path={ROUTE_PATHS.LOGIN} render={() => <AsyncLogin />} />
      <Route path="/" render={() => <AsyncRestaurants />} exact={true} />
    </Switch>
  );
};

export default AppRouter;
