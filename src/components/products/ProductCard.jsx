import React from "react";
import { Rating } from "@mui/material";
import CurrencyFormat from "../../currecyFormat/Curencyformat";
import classes from "./product.module.css";
function ProductCard({ products }) {
  const { image, title, id, rating, price } = products;
  return (
    <>
      <div className={classes.card__container}>
        <a href="">
          <img src={image} />
        </a>
        <div>
          <h3>{title}</h3>

          <div className={classes.Rating}>
            {/* reating */}

            <Rating value={rating.rate} precision={0.1} />
            {/* count */}
            <small>{rating.count}</small>
          </div>
          <div>
            {/* pricing */}
            <CurrencyFormat amount={price} />
          </div>
        </div>

        <button className={classes.button}>add too cart</button>
      </div>
    </>
  );
}

export default ProductCard;
