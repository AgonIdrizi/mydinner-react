import React from "react";
import { Switch, Route } from "react-router-dom";
import { AuthedRoute, UnAuthedRoute } from './AppRouterWrapper';
import { ROUTE_PATHS } from "../../../../config/constants";
import {
  AsyncRestaurants,
  AsyncLogin,
  AsyncSignUp,
  AsyncRestaurant,
  AsyncRouteNotExists,
  AsyncProfile
} from "./AppScreens";

const AppRouter = () => {
  return (
    <Switch>
      <UnAuthedRoute
        path={ROUTE_PATHS.ALL_RESTAURANTS}
        render={() => <AsyncRestaurants />}
        exact={true}
      />
      <UnAuthedRoute
        path={ROUTE_PATHS.RESTAURANT()}
        render={() => <AsyncRestaurant />}
        //isAuthed={true}
        exact={true}
      />
      <UnAuthedRoute
        path={ROUTE_PATHS.LOGIN}
        render={() => <AsyncLogin />}
        exact={true}
      />

      <UnAuthedRoute
        path={ROUTE_PATHS.SIGN_UP}
        render={() => <AsyncSignUp />}
        exact={true}
      />
      <UnAuthedRoute
        path={ROUTE_PATHS.PROFILE}
        render={() => <AsyncProfile />}
        exact={true}
      />

      <Route path="/" render={() =><div>Home</div>} exact={true} />
      <Route component={AsyncRouteNotExists} />
    </Switch>
  );
};

export default AppRouter;
