import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import classes from "./product.module.css";
function Products() {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setproduct(res.data))
      .catch((error) => console.log(error));

    // console.log(product);
  }, []);
  return (
    <>
      <section className={classes.product__container}>
        {product.map((Singleproduct, i) => {
          return <ProductCard key={i} products={Singleproduct} />;
        })}
      </section>
    </>
  );
}

export default Products;
