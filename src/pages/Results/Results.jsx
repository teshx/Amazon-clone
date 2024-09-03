import React from "react";
import classes from "./product.module.css";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
function Results() {
  const { catagoryName } = useParams();
  console.log(catagoryName);
  return <Layout>Results Results</Layout>;
}

export default Results;
