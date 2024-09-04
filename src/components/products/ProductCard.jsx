import React, { useContext } from "react";
import { Rating } from "@mui/material";
import CurrencyFormat from "../../currecyFormat/Curencyformat";
import classes from "./product.module.css";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/action.type";
import { DataContext } from "../Dataprovider/Dataprovider";
function ProductCard({ products, flex, renderDes }) {
  const { description, id, image, price, rating, title } = products;
  const [state, dispatch] = useContext(DataContext);
// console.log(state)
  const addtocart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        description,
        id,
        image,
        price,
        rating,
        title,
      },
    });
  };

  return (
    <>
      <div
        className={`${classes.card__container}  ${
          flex ? classes.product_flexed : ""
        }`}
      >
        <Link to={`/products/${id}`}>
          <img src={image} alt="product" />
        </Link>
        <div>
          <h3>{title}</h3>
          {renderDes && <p style={{ maxWidth: "750px" }}>{description}</p>}

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
          <button className={classes.button} onClick={addtocart}>
            add too cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
