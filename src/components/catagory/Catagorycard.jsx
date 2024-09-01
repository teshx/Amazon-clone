import React from "react";
import classes from "./catagory.module.css";
function Catagorycard({ data }) {
  return (
    <div className={classes.catagory}>
      <a href="">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img className={classes.img} src={data.img} alt="" />
        <p>{data.name}</p>
      </a>
    </div>
  );
}

export default Catagorycard;
