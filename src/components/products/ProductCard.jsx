import React from "react";
import { Rating } from "@mui/material";
import CurrencyFormat from "../../currecyFormat/Curencyformat";
import classes from "./product.module.css";
import { Link } from "react-router-dom";
function ProductCard({ products }) {
  const { description, id, image, price, rating, title } = products;

  return (
    <>
      <div className={classes.card__container}>
        <Link to={`/products/${id}`}>
          <img src={image} alt="product" />
        </Link>
        <div>
          <h3>{title}</h3>

          <div className={classes.Rating}>
            {/* reating */}

            <Rating value={rating?.rate} precision={0.1} />
            {/* count */}
            <small>{rating?.count}</small>
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
