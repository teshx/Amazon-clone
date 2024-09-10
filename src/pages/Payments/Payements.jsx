import React, { useContext, useState } from "react";
import classes from "./payment.module.css";
import Layout from "../../components/Layout/Layout";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { DataContext } from "../../components/Dataprovider/Dataprovider";
import ProductCard from "../../components/products/ProductCard";
import CurrencyFormat from "../../currecyFormat/Curencyformat";

import { axiosInstance } from "../../Api/axios";
import { ClipLoader } from "react-spinners";
function Payements() {
  const [{ user, basket }] = useContext(DataContext);
  console.log(basket);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  const stripe = useStripe();
  const elements = useElements();
  const [Carderror, setCarderror] = useState(null);
  const [prossesing, setprocess] = useState(false);
  const handelchage = (e) => {
    e?.error?.message ? setCarderror(e?.error?.message) : setCarderror("");
  };
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const handelePayment = async (e) => {
    e.preventDefault();
    setprocess(true);
    // 1; // contact backend function---> cliant secrit
    try {
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`,
      });

      const clintSecret = response.data?.client_secret;

      // 2; //Cliant side conformation
      const conformation = await stripe.confirmCardPayment(clintSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      console.log(conformation);
      setprocess(false);
    } catch (error) {
      console.log(error);
      setprocess(false);
    }

    // 3; // after confirm -->store db orders and clean basket
  };

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
          <div className={classes.payement_Card_container}>
            <div className={classes.Payement_details}>
              <form action="" onSubmit={handelePayment}>
                {/* error */}
                {Carderror && (
                  <small style={{ color: "red" }}>{Carderror}</small>
                )}
                {/* card element */}
                <CardElement onChange={handelchage} />

                {/* price */}

                <div className={classes.payement_prices}>
                  <div>
                    <span style={{ display: "flex", gap: "15px" }}>
                      <p> Total order |</p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type="submit">
                    {prossesing ? (
                      <div className={classes.loders}>
                        <ClipLoader color="grey" size={12} />
                        <p> please wait..</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* address */}
      </section>
    </Layout>
  );
}

export default Payements;
