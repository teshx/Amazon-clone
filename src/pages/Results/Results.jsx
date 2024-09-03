import React, { useEffect, useState } from "react";
import classes from "../../components/products/product.module.css";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoint.js";
import ProductCard from "../../components/products/ProductCard.jsx";

function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>results</h1>
        <p style={{ padding: "30px" }}>Catagory/{categoryName}</p>

        <div className={classes.product__container}>
          {results?.map((product, i) => (
            <ProductCard key={i} products={product} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Results;
