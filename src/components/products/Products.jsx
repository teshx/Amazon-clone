import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import classes from "./product.module.css";
import Loder from "../Loder/Loder";

function Products() {
  const [product, setproduct] = useState([]);
  const [isloding, setIsloding] = useState(false);
  useEffect(() => {
    setIsloding(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setproduct(res.data);
        setIsloding(false);
      })
      .catch((error) => {
        console.log(error);
        setIsloding(false);
      });

    // console.log(product);
  }, []);
  return (
    <>
      {isloding ? (
        <Loder />
      ) : (
        <section className={classes.product__container}>
          {product.map((Singleproduct, i) => {
            return (
              <ProductCard renderADD={true} key={i} products={Singleproduct} />
            );
          })}
        </section>
      )}
    </>
  );
}

export default Products;
