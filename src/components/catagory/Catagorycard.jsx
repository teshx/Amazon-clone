import React from "react";
import { Link } from "react-router-dom";
import classes from "./catagory.module.css";
function Catagorycard({ data }) {
  return (
    <div className={classes.catagory}>
      <Link to={`/catagory/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img className={classes.img} src={data.img} alt="" />
        <p>{data.name}</p>
      </Link>
    </div>
  );
}

export default Catagorycard;
