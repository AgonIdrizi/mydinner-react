import React, { Suspense } from "react";
import Layout from "../../Components/Layout/Layout";
import AppRouter from "./components/AppRouter/AppRouter";
import Restaurants from "../../Components/Restaurants/Restaurants";
import "./MyDinnerBuilder.css";
const MyDinnerBuilder = () => {
  return (
    <div className="MyDinnerBuilder">
      <Layout>
        <Suspense fallback="loading">
          <AppRouter />
        </Suspense>
      </Layout>
    </div>
  );
};

export default MyDinnerBuilder;
