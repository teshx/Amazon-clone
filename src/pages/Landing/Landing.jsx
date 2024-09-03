import React from "react";
import CarasouleEeffect from "../../components/carasoule/Carasoule";
import Catagory from "../../components/catagory/Catagory";
import Product from "../../components/products/Products";
import Layout from "../../components/Layout/Layout";
function Landing() {
  return (
    <Layout>
      <CarasouleEeffect />
      <Catagory />
      <Product />
    </Layout>
  );
}

export default Landing;
