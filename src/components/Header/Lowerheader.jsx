import React from "react";
import { IoIosMenu } from "react-icons/io";
import classes from "./Header.module.css";
import img from "./b.png";
function Lowerheader() {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          <IoIosMenu />
          <p>All</p>
        </li>
        <li>
          <a href="" className={classes.butimg}>
            <img src={img} alt="" />
            <span>Refus</span>
          </a>
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
