import React, { Suspense } from "react";
import Layout from "../../Components/Layout/Layout";
import AppRouter from "./components/AppRouter/AppRouter";
import AppRouteError from "./components/AppRouter/AppRouteError";
import { withRouter} from "react-router-dom";
import "./MyDinnerBuilder.css";
const MyDinnerBuilder = ({location}) => {
  return (
    <div className="MyDinnerBuilder">
      <Layout>
        <Suspense fallback="loading">
          <AppRouteError location={location}>
            <AppRouter />
          </AppRouteError>
        </Suspense>
      </Layout>
    </div>
  );
};

export default withRouter(MyDinnerBuilder);
