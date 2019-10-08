import React from "react";
import Layout from "../../Components/Layout/Layout";
import Restaurants from '../../Components/Restaurants/Restaurants';
import "./MyDinnerBuilder.css";
const MyDinnerBuilder = () => {
  return (
    <div className="MyDinnerBuilder">
      <Layout>
        <Restaurants />
      </Layout>
    </div>
  );
};

export default MyDinnerBuilder;
