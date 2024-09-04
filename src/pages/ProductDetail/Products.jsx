import React, { useEffect, useState } from "react";
import Loder from "../../components/Loder/Loder";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoint";
import ProductCard from "../../components/products/ProductCard";
import Layout from "../../components/Layout/Layout";
function Products() {
  const [detail, setdetail] = useState([]);
  const [isloding, setIsloding] = useState(false);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    setIsloding(true);
    axios
      .get(`${productUrl}/products/${id}`)
      .then((res) => {
        setdetail(res.data);
        setIsloding(false);
      })
      .catch((err) => {
        console.log(err);
        setIsloding(false);
      });
  }, []);

  console.log(detail);
  return (
    <Layout>{isloding ? <Loder /> : <ProductCard products={detail} />}</Layout>
  );
}

export default Products;
