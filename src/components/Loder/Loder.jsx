import React from "react";
import { FadeLoader } from "react-spinners";
function Loder() {
  //https://www.davidhu.io/react-spinners/storybook/?path=/docs/fadeloader--docs
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <FadeLoader color="#36d7b7" />
    </div>
  );
}

export default Loder;
