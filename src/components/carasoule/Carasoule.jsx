import React from "react";
import { imgData } from "../carasoule/imgs/data.js";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import classes from "./carasoul.module.css";
function CarasouleEeffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {imgData.map((images,i) => {
          return <img key={i} src={images} alt="" />;
        })}
      </Carousel>

      <div className={classes.fed_container}></div>
    </div>
  );
}

export default CarasouleEeffect;
