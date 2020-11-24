import React, { useContext } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { AuthedRoute, UnAuthedRoute } from "./AppRouterWrapper";
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
import { AnimatePresence } from "framer-motion";

const AppRouter = ({location}) => {
  //const location = useLocation()
  const context = useContext(UserContext);
  const { user } = context;
  console.log('location',location)
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
      <UnAuthedRoute
          path={ROUTE_PATHS.RESTAURANT()}
          render={() => <AsyncRestaurant />}
          //isAuthed={true}
          exact={true}
        />

        <UnAuthedRoute
          path={ROUTE_PATHS.ALL_RESTAURANTS}
          render={() => <AsyncRestaurants />}
          exact={true}
        />

        
        <UnAuthedRoute
          path={ROUTE_PATHS.RESTAURANTS_CITY()}
          render={() => <AsyncRestaurants />}
          exact={true}
        />
        <UnAuthedRoute
          path={ROUTE_PATHS.ALL_GROCERIES}
          render={() => <AsyncRestaurants />}
          exact={true}
        />
        <UnAuthedRoute
          path={ROUTE_PATHS.RESTAURANTS_CITY()}
          render={() => <AsyncRestaurants />}
          exact={true}
        />
        <UnAuthedRoute
          path={ROUTE_PATHS.GROCERY()}
          render={() => <AsyncRestaurant />}
          //isAuthed={true}
          exact={true}
        />
        <UnAuthedRoute
          path={ROUTE_PATHS.ALL_FLOWERS}
          render={() => <AsyncRestaurants />}
          exact={true}
        />
        <UnAuthedRoute
          path={ROUTE_PATHS.FLOWERS_CITY()}
          render={() => <AsyncRestaurants />}
          exact={true}
        />
        <UnAuthedRoute
          path={ROUTE_PATHS.FLOWER()}
          render={() => <AsyncRestaurant />}
          //isAuthed={true}
          exact={true}
        />
        <UnAuthedRoute
          path={ROUTE_PATHS.ALL_PHARMACIES}
          render={() => <AsyncRestaurants />}
          exact={true}
        />
        <UnAuthedRoute
          path={ROUTE_PATHS.PHARMACIES_CITY()}
          render={() => <AsyncRestaurants />}
          exact={true}
        />
        <UnAuthedRoute
          path={ROUTE_PATHS.PHARMACY()}
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
    </AnimatePresence>
  );
};

export default withRouter(AppRouter);
