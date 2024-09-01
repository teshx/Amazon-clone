import React from "react";
import Catagorycard from "./Catagorycard";
import catagoryData from "./catagoryData.js";
import classes from "./catagory.module.css"
function Catagory() {
  return (
    <>
      <div className={classes.catagory__container}>
        {catagoryData.map((info) => (
          <Catagorycard data={info} />
        ))}
      </div>
    </>
  );
}

export default Catagory;
