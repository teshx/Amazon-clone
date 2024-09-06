import React, { useContext } from "react";
import classes from "./cart.module.css";
import Layout from "../../components/Layout/Layout";
import { DataContext } from "../../components/Dataprovider/Dataprovider";
import ProductCard from "../../components/products/ProductCard";
import CurrencyFormat from "../../currecyFormat/Curencyformat";
import { Type } from "../../Utility/action.type";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

function Cart() {
  const [{ basket }, dispatch] = useContext(DataContext);
  console.log(basket);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shoping basket </h3>
          <hr />
          {basket?.length == 0 ? (
            <p>OPS !! NO item in your cart </p>
          ) : (
            basket?.map((item, i) => {
              return (
                <section className={classes.cart_product}>
                  <ProductCard
                    products={item}
                    renderDes={true}
                    flex={true}
                    renderADD={false}
                  />

                  <div className={classes.btn_container}>
                    <button
                      className={classes.btn}
                      onClick={() => increment(item)}
                    >
                      <FaArrowUp />
                    </button>

                    <span>{item.amount}</span>

                    <button
                      className={classes.btn}
                      onClick={() => decrement(item.id)}
                    >
                      <FaArrowDown />
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>

            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>

            <Link to="/payment">Continue to Checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
