import React, { useContext } from "react";
import classes from "./payment.module.css";
import Layout from "../../components/Layout/Layout";

import { DataContext } from "../../components/Dataprovider/Dataprovider";
import ProductCard from "../../components/products/ProductCard";
function Payements() {
  const [{ user, basket }] = useContext(DataContext);
  console.log(basket);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <Layout>
      {/* header */}
      <div className={classes.payement_header}>
        checkout ({totalItem}) lists
      </div>
      {/* payement section */}
      <section className={classes.payement}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Addres</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 react lane</div>
            <div> dire Dawa ,IL</div>
          </div>
        </div>
        <hr />
        {/* cards */}
        <div className={classes.flex}>
          <h3>Review Item and Delivery</h3>
          <div>
            {basket.map((item, i) => {
              return <ProductCard key={i} products={item} flex={true} />;
            })}
          </div>
        </div>

        <hr />
        <div className={classes.flex}>
          <h3>Paymemnt mathod</h3>
        </div>
        {/* address */}
      </section>
    </Layout>
  );
}

export default Payements;
