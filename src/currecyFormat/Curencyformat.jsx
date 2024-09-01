import React from "react";
import numeral from "numeral";

const CurrencyFormat = ({ amount }) => {
  const formatedAmmount = numeral(amount).format("$0, 0.00");
  return <div>{formatedAmmount}</div>;
};

export default CurrencyFormat;
