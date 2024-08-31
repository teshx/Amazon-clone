import React from "react";
import { IoIosMenu } from "react-icons/io";
import classes from "./Header.module.css";
function Lowerheader() {
  return (
    <div   className={classes.lower__container}>
      <ul>
        <li>
          <IoIosMenu />
          <p>All</p>
        </li>
        <li> Todays Deals</li>
        <li>Customer service</li>
        <li> Registory</li>
        <li>Gift card</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default Lowerheader;
