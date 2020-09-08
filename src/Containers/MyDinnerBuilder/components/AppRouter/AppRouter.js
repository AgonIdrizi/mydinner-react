import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { AuthedRoute, UnAuthedRoute } from './AppRouterWrapper';
import { ROUTE_PATHS } from "../../../../config/constants";
import {
  AsyncRestaurants,
  AsyncRestaurantsCity,
  AsyncLogin,
  AsyncSignUp,
  AsyncRestaurant,
  AsyncRouteNotExists,
  AsyncProfile,
  AsyncHome,
  AsyncCart
} from "./AppScreens";
import { UserContext } from "../../../../contexts/UserContext";

const AppRouter = () => {
  const context = useContext(UserContext);
  const { user } = context;
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
        path={ROUTE_PATHS.RESTAURANTS_CITY()}
        render={() => <AsyncRestaurants />}
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
        path={ROUTE_PATHS.CART}
        render={() => <AsyncCart />}
        exact={true}
      />
      <AuthedRoute
        path={ROUTE_PATHS.PROFILE}
        render={() => <AsyncProfile />}
        exact={true}
        isAuthed={user != null ? true : false}
      />

      <Route path="/" render={() => <AsyncHome />} exact={true} />
      <Route component={AsyncRouteNotExists} />
    </Switch>
  );
};

export default AppRouter;
