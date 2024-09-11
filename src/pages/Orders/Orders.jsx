import React, { useContext, useEffect, useState } from "react";
import classes from "./order.module.css";
import Layout from "../../components/Layout/Layout";

import { db } from "../../Utility/firebase";
import { DataContext } from "../../components/Dataprovider/Dataprovider";
import ProductCard from "../../components/products/ProductCard";
function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [order, setorder] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("user")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshat) => {
          setorder(
            snapshat.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });

      console.log(order);
    } else {
      setorder([]);
    }
  }, []);

  return (
    <Layout>
      <section className={classes.containers}>
        <div className={classes.orders_container}>
          <h2>Your orders</h2>

          {order?.length == 0 && (
            <div style={{ padding: "20px" }}>
              {" "}
              you do not have any orders yet...
            </div>
          )}

          {/* orderd items */}

          <div>
            {order?.map((eachOrder, i) => {
              return (
                <div key={i}>
                  <hr />
                  <p>Order ID: {eachOrder?.id}</p>

                  {eachOrder?.data?.basket.map((order, i) => {
                    return <ProductCard key={i} flex={true} products={order} />;
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Orders;
